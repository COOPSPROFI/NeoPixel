package service

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/model"
)

type GalleryRepository interface {
	GetAll(ctx *gin.Context) ([]model.Gallery, error)
}

type GalleryService struct {
	GalleryRepository GalleryRepository
}

func NewGalleryService(rep GalleryRepository) *GalleryService {
	return &GalleryService{
		GalleryRepository: rep,
	}
}

func (s *GalleryService) GetAll(ctx *gin.Context) ([]model.Gallery, error) {
	galleryItems, err := s.GalleryRepository.GetAll(ctx)
	if err != nil {
		fmt.Println("error in getting Consults from repository")
		return nil, err
	}
	return galleryItems, nil
}
