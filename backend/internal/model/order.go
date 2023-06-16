package model

type Order struct {
	ID          int64  `db:"id" json:"id"`
	Email       string `db:"email" json:"email"`
	Name        string `db:"name" json:"name"`
	Tel         string `db:"tel" json:"tel"`
	PrinterName string `db:"printername" json:"printername"`
	Description string `db:"desc" json:"desc"`
	Date        string `db:"date" json:"date"`
}
type CreateOrder struct {
	ID          int64  `json:"id"`
	Email       string `json:"email"`
	Name        string `json:"name"`
	Tel         string `json:"tel"`
	PrinterName string `json:"printername"`
	Description string `json:"desc"`
	Date        string `json:"date"`
}
type UpdateOrder struct {
}
type DeleteOrder struct {
}
