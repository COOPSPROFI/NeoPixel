package repository

import (
	"context"
	"os"

	"github.com/jackc/pgx"
)

type ConsultRepository struct {
	DB *pgx.Conn
}

// * - указатель
// & - ссылка

func NewConsultRepository(conn *pgx.Conn) *ConsultRepository {
	return &ConsultRepository{
		DB: conn,
	}
}

// создал ConsultRepository взял от переменной ссылку и вернул её, а дальше делай че хочешь с ней уже

func (r *ConsultRepository) GetAll(ctx context.Context) (string, error) {
	rows, err := r.DB.Query("select * FROM consults")
	if err != nil {
		os.Exit(1)
	}
	rows.Next()
	return "testvernyt'", nil
}
