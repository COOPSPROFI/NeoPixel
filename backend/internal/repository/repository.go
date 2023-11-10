package repository

import (
	"github.com/jackc/pgx"
)

type Repository struct {
	EventRepository     *EventRepository
	OrderRepository     *OrderRepository
	ConsultRepository   *ConsultRepository
	AuthRepository      *AuthRepository
	EmployeesRepository *EmployeesRepository
	GalleryRepository   *GalleryRepository
}

func New(conn *pgx.Conn) *Repository {
	return &Repository{
		EventRepository:     NewEventRepository(conn),
		OrderRepository:     NewOrderRepository(conn),
		ConsultRepository:   NewConsultRepository(conn),
		AuthRepository:      NewAuthRepository(conn),
		EmployeesRepository: NewEmployeesRepository(conn),
		GalleryRepository:   NewGalleryRepository(conn),
	}
}
