package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/model"
)

type EventService interface {
	GetAll(ctx *gin.Context) ([]model.Event, error)
	CreateEvent(ctx *gin.Context, event model.Event) (model.Event, error)
	// GetById(ctx context.Context, id int32) (*model.Event, error)
	// Create(ctx context.Context, input *model.CreateEvent) (*model.Event, error)
	// Update(ctx context.Context, input *model.UpdateEvent) (*model.Event, error)
	// Delete(ctx context.Context, input *model.DeleteEvent) (*model.Event, error)
}

type EventHandler struct {
	service EventService
}

func NewEventHandler(service EventService) *EventHandler {
	return &EventHandler{
		service: service,
	}
}

func (h *EventHandler) Get(c *gin.Context) {
	events, err := h.service.GetAll(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "bad request",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"events": events,
	})
	return
}
func (h *EventHandler) GetById(c *gin.Context) {

}
func (h *EventHandler) Create(c *gin.Context) {
	var event model.Event
	if err := c.ShouldBindJSON(&event); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Invalid request body",
		})
		return
	}

	createdEvent, err := h.service.CreateEvent(c, event)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"message": "Failed to create event",
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"event": createdEvent,
	})
}
func (h *EventHandler) Update(c *gin.Context) {

}
func (h *EventHandler) Delete(c *gin.Context) {

}
