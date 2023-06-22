package service

import (
	"errors"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
	"neopixel3d.ru/internal/model"
)

type AuthRepository interface {
	GetUserByUsernameOrEmail(string, string) model.User
	GetUserByUsername(string) model.User
	CreateNewUser(*model.User) error
}

type AuthService struct {
	AuthRepository AuthRepository
}

func NewAuthService(rep AuthRepository) *AuthService {
	return &AuthService{
		AuthRepository: rep,
	}
}

func (s *AuthService) Register(c *gin.Context) error {
	var UserInputRegister model.UserInputRegister
	if c.Bind(&UserInputRegister) != nil {
		return errors.New("Failed to read request")
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(UserInputRegister.Password), 10)
	if err != nil {
		return errors.New("Failed to hash password")
	}

	user := s.AuthRepository.GetUserByUsernameOrEmail(UserInputRegister.Username, UserInputRegister.Email)
	if user.ID != 0 {
		return errors.New("User with this username or email already exist")
	}

	user = model.User{Name: UserInputRegister.Name, Email: UserInputRegister.Email, Username: UserInputRegister.Username, Password: string(hash)}
	err = s.AuthRepository.CreateNewUser(&user)
	if err != nil {
		return err
	}

	return nil
}

func (s *AuthService) Login(c *gin.Context) string {
	var UserInputLogin model.UserInputLogin
	if c.Bind(&UserInputLogin) != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to read request",
		})
	}

	user := s.AuthRepository.GetUserByUsername(UserInputLogin.Username)
	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid username or password",
		})
		return ""
	}

	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(UserInputLogin.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid username or password",
		})
		return ""
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24 * 30).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid to create token",
		})
	}

	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)

	return tokenString
}
