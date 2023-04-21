package repository

import (
	"github.com/jackc/pgx"
)

type Repository struct {
	EventRepository   *EventRepository
	ConsultRepository *ConsultRepository
	AuthRepository    *AuthRepository
}

func New(conn *pgx.Conn) *Repository {
	return &Repository{
		EventRepository:   NewEventRepository(conn),
		ConsultRepository: NewConsultRepository(conn),
		AuthRepository:    NewAuthRepository(conn),
	}
}
