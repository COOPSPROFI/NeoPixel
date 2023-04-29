package handler

import (
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/transport/rest/middleware"
)

type Deps struct {
	EventService   EventService
	OrderService   OrderService
	ConsultService ConsultService
	AuthService    AuthService
}

type Handler struct {
	Event   *EventHandler
	Order   *OrderHandler
	Consult *ConsultHandler
	Auth    *AuthHandler
}

func New(deps Deps) *Handler {
	return &Handler{
		Event:   NewEventHandler(deps.EventService),
		Order:   NewOrderHandler(deps.OrderService),
		Consult: NewConsultHandler(deps.ConsultService),
		Auth:    NewAuthHandler(deps.AuthService),
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
	router.Static("/assets", "./assets") // static img url

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
		events := api.Group("events")
		{
			events.GET("", middleware.RequireAuth, h.Event.Get)
			events.GET(":id", h.Event.GetById)
			events.POST("", h.Event.Create)
			events.PUT(":id", h.Event.Update)
			events.DELETE(":id", h.Event.Delete)
		}
		orders := api.Group("orders")
		{
			orders.GET("", middleware.RequireAuth, h.Order.Get)
			orders.GET(":id", h.Order.GetById)
			orders.POST("", h.Order.Create)
			orders.PUT(":id", h.Order.Update)
			orders.DELETE(":id", h.Order.Delete)
		}
	}
	return router
}
