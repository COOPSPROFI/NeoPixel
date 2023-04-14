package model

import "time"

type Event struct {
	ID          int64     `db:"id" json:"id"`
	Title       string    `db:"title" json:"title"`
	Description string    `db:"desc" json:"desc"`
	Date        time.Time `db:"date" json:"date"`
	Img         string    `db:"src" json:"src"`
}
type CreateEvent struct {
}
type UpdateEvent struct {
}
type DeleteEvent struct {
}
