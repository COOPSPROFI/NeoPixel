package service

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/model"
)

type OrderRepository interface {
	GetAll(ctx *gin.Context) ([]model.Order, error)
	// GetById(ctx context.Context, id int32) (*model.Order, error)
	// Create(ctx context.Context, input *model.CreateOrder) (*model.Order, error)
	// Update(ctx context.Context, input *model.UpdateOrder) (*model.Order, error)
	// Delete(ctx context.Context, input *model.DeleteOrder) (*model.Order, error)
}

type OrderService struct {
	OrderRepository OrderRepository
}

func NewOrderService(rep OrderRepository) *OrderService {
	return &OrderService{
		OrderRepository: rep,
	}
}

func (s *OrderService) GetAll(ctx *gin.Context) ([]model.Order, error) {
	orders, err := s.OrderRepository.GetAll(ctx)
	if err != nil {
		fmt.Println("error in getting from repository orders")
		return nil, err
	}
	return orders, nil
}
