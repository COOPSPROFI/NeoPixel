package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/model"
)

type OrderService interface {
	GetAll(ctx *gin.Context) ([]model.Order, error)
	CreateOrder(ctx *gin.Context, order model.Order) (model.Order, error)
	// Implement other methods for GetById, Update, and Delete
}

type OrderHandler struct {
	service OrderService
}

func NewOrderHandler(service OrderService) *OrderHandler {
	return &OrderHandler{
		service: service,
	}
}

func (h *OrderHandler) Get(c *gin.Context) {
	orders, err := h.service.GetAll(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Failed to get orders",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"orders": orders,
	})
}

func (h *OrderHandler) Create(c *gin.Context) {
	var order model.Order
	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request body",
		})
		return
	}

	createdOrder, err := h.service.CreateOrder(c, order)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "Failed to create order",
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"order": createdOrder,
	})
}

func (h *OrderHandler) GetById(c *gin.Context) {
	// Implement logic to get order by ID
}

func (h *OrderHandler) Update(c *gin.Context) {
	// Implement logic to update order
}

func (h *OrderHandler) Delete(c *gin.Context) {
	// Implement logic to delete order
}
