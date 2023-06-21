package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"neopixel3d.ru/internal/model"
)

type GalleryService interface {
	GetAll(ctx *gin.Context) ([]model.Gallery, error)
}

type GalleryHandler struct {
	service GalleryService
}

func NewGalleryHandler(service GalleryService) *GalleryHandler {
	return &GalleryHandler{
		service: service,
	}
}

func (h *GalleryHandler) Get(c *gin.Context) {
	galleryItems, err := h.service.GetAll(c)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Failed to get consults",
		})
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"consults": galleryItems,
	})
}
