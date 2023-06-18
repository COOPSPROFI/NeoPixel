package model

type Event struct {
	ID          int64  `db:"id" json:"id"`
	Title       string `db:"title" json:"title"`
	Description string `db:"description" json:"description"`
	Date        string `db:"date" json:"date"`
	Img         string `db:"img" json:"img"`
}
type CreateEvent struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Date        string `json:"date"`
	Img         string `json:"img"`
}
type UpdateEvent struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Date        string `json:"date"`
	Img         string `json:"img"`
}
type DeleteEvent struct {
	ID int64 `json:"id"`
}
