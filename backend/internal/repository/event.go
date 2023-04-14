package repository

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx"
	"neopixel3d.ru/internal/model"
)

type EventRepository struct {
	DB *pgx.Conn
}

func NewEventRepository(conn *pgx.Conn) *EventRepository {
	return &EventRepository{
		DB: conn,
	}
}

func (r *EventRepository) GetAll(ctx *gin.Context) ([]model.Event, error) {
	rows, err := r.DB.Query("SELECT id, name, description, date, img FROM events")
	if err != nil {
		fmt.Println("error in repository level")
		return nil, err
	}
	defer rows.Close()

	var events []model.Event
	for rows.Next() {
		var event model.Event
		err := rows.Scan(&event.ID, &event.Title, &event.Description, &event.Date, &event.Img)
		if err != nil {
			fmt.Println("Failed to get row in parsing")
			return nil, err
		}
		events = append(events, event)
	}

	return events, nil
}
