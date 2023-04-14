package model

type Consult struct {
	ID     int64  `db:"id" json:"id"`
	Name   string `db:"name" json:"name"`
	Email  string `db:"email" json:"email"`
	Phone  string `db:"phone" json:"phone"`
	Status bool   `db:"status" json:"status"`
}
type CreateConsult struct {
}
type UpdateConsult struct {
}
type DeleteConsult struct {
}
