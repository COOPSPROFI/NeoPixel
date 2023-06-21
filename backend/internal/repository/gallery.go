package repository

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx"
	"neopixel3d.ru/internal/model"
)

type GalleryRepository struct {
	DB *pgx.Conn
}

func NewGalleryRepository(conn *pgx.Conn) *GalleryRepository {
	return &GalleryRepository{
		DB: conn,
	}
}

func (r *GalleryRepository) GetAll(ctx *gin.Context) ([]model.Gallery, error) {
	rows, err := r.DB.Query("SELECT id, src FROM gallery")
	if err != nil {
		fmt.Println("error in repository level")
		return nil, err
	}
	defer rows.Close()

	var galleryItems []model.Gallery
	for rows.Next() {
		var galleryItem model.Gallery
		err := rows.Scan(&galleryItem.ID, &galleryItem.Src)
		if err != nil {
			fmt.Println("Failed to get row in parsing")
			return nil, err
		}
		galleryItems = append(galleryItems, galleryItem)
	}

	return galleryItems, nil
}
