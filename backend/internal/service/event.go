package service

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/model"
)

type EventRepository interface {
	GetAll(ctx *gin.Context) ([]model.Event, error)
	CreateEvent(ctx *gin.Context, event model.Event) (model.Event, error)

	// GetById(ctx context.Context, id int32) (*model.Event, error)
	// Create(ctx context.Context, input *model.CreateEvent) (*model.Event, error)
	// Update(ctx context.Context, input *model.UpdateEvent) (*model.Event, error)
	// Delete(ctx context.Context, input *model.DeleteEvent) (*model.Event, error)
}

type EventService struct {
	EventRepository EventRepository
}

func NewEventService(rep EventRepository) *EventService {
	return &EventService{
		EventRepository: rep,
	}
}

func (s *EventService) GetAll(ctx *gin.Context) ([]model.Event, error) {
	events, err := s.EventRepository.GetAll(ctx)
	if err != nil {
		fmt.Println("error in getting from repository events")
		return nil, err
	}
	return events, nil
}

func (s *EventService) CreateEvent(ctx *gin.Context, event model.Event) (model.Event, error) {
	createdEvent, err := s.EventRepository.CreateEvent(ctx, event)
	if err != nil {
		fmt.Println("error in creating event in repository")
		return model.Event{}, err
	}
	return createdEvent, nil
}
