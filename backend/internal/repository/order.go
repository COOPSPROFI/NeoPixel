package repository

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx"
	"neopixel3d.ru/internal/model"
)

type OrderRepository struct {
	DB *pgx.Conn
}

func NewOrderRepository(conn *pgx.Conn) *OrderRepository {
	return &OrderRepository{
		DB: conn,
	}
}

func (r *OrderRepository) GetAll(ctx *gin.Context) ([]model.Order, error) {
	rows, err := r.DB.Query("SELECT id, email, name, tel, printername, description, date FROM orders")
	if err != nil {
		fmt.Println("error in repository level")
		return nil, err
	}
	defer rows.Close()

	var orders []model.Order
	for rows.Next() {
		var order model.Order
		err := rows.Scan(&order.ID, &order.Email, &order.Name, &order.Tel, &order.PrinterName, &order.Description, &order.Date)
		if err != nil {
			fmt.Println("Failed to get row in parsing")
			return nil, err
		}
		orders = append(orders, order)
	}

	return orders, nil
}

func (r *OrderRepository) CreateOrder(ctx *gin.Context, order model.Order) (model.Order, error) {
	_, err := r.DB.Exec("INSERT INTO orders (email, name, tel, printername, description, date) VALUES ($1, $2, $3, $4, $5, $6)",
		order.Email, order.Name, order.Tel, order.PrinterName, order.Description, order.Date)
	if err != nil {
		fmt.Println("Failed to create order in repository")
		return model.Order{}, err
	}

	return order, nil
}
