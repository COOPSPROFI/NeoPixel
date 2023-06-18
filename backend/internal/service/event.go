package service

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/model"
)

type EventRepository interface {
	GetAll(ctx *gin.Context) ([]model.Event, error)
	CreateEvent(ctx *gin.Context, event model.Event) (model.Event, error)
	GetById(ctx *gin.Context, id int64) (*model.Event, error)
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

func (s *EventService) GetById(ctx *gin.Context, id int64) (*model.Event, error) {
	event, err := s.EventRepository.GetById(ctx, id)
	if err != nil {
		fmt.Println("error in getting event by ID from repository")
		return nil, err
	}
	return event, nil
}
