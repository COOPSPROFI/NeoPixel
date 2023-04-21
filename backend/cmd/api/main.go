package main

import (
	"os"

	"neopixel3d.ru/internal/configs"
	"neopixel3d.ru/internal/repository"
	"neopixel3d.ru/internal/service"
	"neopixel3d.ru/internal/transport/rest"
	"neopixel3d.ru/internal/transport/rest/handler"
)

func init() {
	// Connect all configs
	configs.LoadEnviroment()
	configs.ConnectToDB()
}

func main() {
	db := repository.New(configs.DB)

	services := service.New(service.Deps{
		EventRepository:   db.EventRepository,
		ConsultRepository: db.ConsultRepository,
		AuthRepository:    db.AuthRepository,
	})

	handlers := handler.New(handler.Deps{
		EventService:   services.EventService,
		ConsultService: services.ConsultService,
		AuthService:    services.AuthService,
	}).Init()

	server := rest.NewServer(os.Getenv("PORT"), handlers)

	server.ListenAndServe()
}
