package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/model"
)

type OrderService interface {
	GetAll(ctx *gin.Context) ([]model.Order, error)
	// GetById(ctx context.Context, id int32) (*model.Order, error)
	// Create(ctx context.Context, input *model.CreateOrder) (*model.Order, error)
	// Update(ctx context.Context, input *model.UpdateOrder) (*model.Order, error)
	// Delete(ctx context.Context, input *model.DeleteOrder) (*model.Order, error)
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
			"message": "bad request",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"orders": orders,
	})
	return
}
func (h *OrderHandler) GetById(c *gin.Context) {

}
func (h *OrderHandler) Create(c *gin.Context) {

}
func (h *OrderHandler) Update(c *gin.Context) {

}
func (h *OrderHandler) Delete(c *gin.Context) {

}
