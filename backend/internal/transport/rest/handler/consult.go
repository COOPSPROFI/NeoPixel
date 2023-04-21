package handler

import (
	"context"

	"github.com/gin-gonic/gin"
)

type ConsultService interface {
	GetAll(ctx context.Context) (string, error)
	// GetById(ctx context.Context, id int32) (*model.Event, error)
	// Create(ctx context.Context, input *model.CreateEvent) (*model.Event, error)
	// Update(ctx context.Context, input *model.UpdateEvent) (*model.Event, error)
	// Delete(ctx context.Context, input *model.DeleteEvent) (*model.Event, error)
}

type ConsultHandler struct {
	service ConsultService
}

func NewConsultHandler(service ConsultService) *ConsultHandler {
	return &ConsultHandler{
		service: service,
	}
}

func (h *ConsultHandler) Get(c *gin.Context) {

}
func (h *ConsultHandler) GetById(c *gin.Context) {

}
func (h *ConsultHandler) Create(c *gin.Context) {

}
func (h *ConsultHandler) Update(c *gin.Context) {

}
func (h *ConsultHandler) Delete(c *gin.Context) {

}
