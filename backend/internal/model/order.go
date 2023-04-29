package model

import "time"

type Order struct {
	ID          int64     `db:"id" json:"id"`
	Email       string    `db:"email" json:"email"`
	Name        string    `db:"name" json:"name"`
	Tel         string    `db:"tel" json:"tel"`
	PrinterName string    `db:"printername" json:"printername"`
	Description string    `db:"desc" json:"desc"`
	Date        time.Time `db:"date" json:"date"`
}
type CreateOrder struct {
}
type UpdateOrder struct {
}
type DeleteOrder struct {
}
