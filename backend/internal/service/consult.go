package service

import (
	"context"
)

type ConsultRepository interface {
	GetAll(ctx context.Context) (string, error)
	// GetById(ctx context.Context, id int32) (*model.Consult, error)
	// Create(ctx context.Context, input *model.CreateConsult) (*model.Event, error)
	// Update(ctx context.Context, input *model.UpdateConsult) (*model.Event, error)
	// Delete(ctx context.Context, input *model.DeleteConsult) (*model.Event, error)
}

type ConsultService struct {
	ConsultRepository ConsultRepository
}

func NewConsultService(rep ConsultRepository) *ConsultService {
	return &ConsultService{
		ConsultRepository: rep,
	}
}

func (s *ConsultService) GetAll(ctx context.Context) (string, error) {
	return "test", nil
}
