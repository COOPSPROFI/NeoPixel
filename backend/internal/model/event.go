package model

type Event struct {
	ID          int64  `db:"id" json:"id"`
	Title       string `db:"title" json:"title"`
	Description string `db:"desc" json:"desc"`
	Date        string `db:"date" json:"date"`
	Img         string `db:"src" json:"src"`
}
type CreateEvent struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Date        string `json:"date"`
	Img         string `json:"img"`
}
type UpdateEvent struct {
}
type DeleteEvent struct {
	ID int64 `json:"id"`
}
