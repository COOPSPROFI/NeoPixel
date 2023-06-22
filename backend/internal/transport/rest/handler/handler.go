package handler

import (
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Deps struct {
	EventService     EventService
	OrderService     OrderService
	ConsultService   ConsultService
	AuthService      AuthService
	EmployeesService EmployeesService
	GalleryService   GalleryService
}

type Handler struct {
	Event     *EventHandler
	Order     *OrderHandler
	Consult   *ConsultHandler
	Auth      *AuthHandler
	Employees *EmployeesHandler
	Gallery   *GalleryHandler
}

func New(deps Deps) *Handler {
	return &Handler{
		Event:     NewEventHandler(deps.EventService),
		Order:     NewOrderHandler(deps.OrderService),
		Consult:   NewConsultHandler(deps.ConsultService),
		Auth:      NewAuthHandler(deps.AuthService),
		Employees: NewEmployeesHandler(deps.EmployeesService),
		Gallery:   NewGalleryHandler(deps.GalleryService),
	}
}

func (h *Handler) Init() *gin.Engine {
	gin.SetMode(os.Getenv("GIN_MODE"))
	// Init gin handler
	router := gin.Default()

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowAllOrigins = true
	corsConfig.AllowCredentials = true
	corsConfig.AddAllowHeaders("Origin", "Content-Length", "Content-Type", "Authorization")

	router.Use(
		gin.Recovery(),
		gin.Logger(),
		cors.New(corsConfig),
	)

	router.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})
	router.Static("/assets", "./assets")

	h.initApi(router)

	return router
}

func (h *Handler) initApi(router *gin.Engine) *gin.Engine {
	api := router.Group("/api")
	{
		api.POST("login", h.Auth.Login)
		api.POST("register", h.Auth.Register)
		api.GET("logout", h.Auth.Logout)
		api.GET("validate", h.Auth.Validate)

		api.POST("employees/register", h.Employees.Register)
		api.POST("employees/login", h.Employees.Login)
		api.GET("employees/logout", h.Employees.Logout)
		api.GET("employees/validate", h.Employees.Validate)
		api.POST("employees/getrole", h.Employees.GetRole)
		api.GET("employees", h.Employees.GetAll)
		api.GET("gallery", h.Gallery.Get)

		events := api.Group("events")
		{
			events.GET("", h.Event.Get)
			events.GET(":id", h.Event.GetById)
			events.POST("", h.Event.Create)
			events.PUT(":id", h.Event.Update)
			events.DELETE(":id", h.Event.Delete)
			events.POST("/upload-stl", h.Event.UploadSTL)
		}
		orders := api.Group("orders")
		{
			orders.GET("", h.Order.Get)
			orders.GET(":id", h.Order.GetById)
			orders.POST("", h.Order.Create)
			orders.PUT(":id", h.Order.Update)
			orders.DELETE(":id", h.Order.Delete)
			orders.PUT(":id/status", h.Order.UpdateStatus)
		}
		consults := api.Group("consults")
		{
			consults.GET("", h.Consult.Get)
			consults.GET(":id", h.Consult.GetById)
			consults.POST("", h.Consult.Create)
			consults.PUT(":id", h.Consult.Update)
			consults.DELETE(":id", h.Consult.Delete)
			consults.PUT(":id/status", h.Consult.UpdateStatus)
		}

	}
	return router
}
