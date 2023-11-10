package service

type Deps struct {
	EventRepository     EventRepository
	OrderRepository     OrderRepository
	ConsultRepository   ConsultRepository
	AuthRepository      AuthRepository
	EmployeesRepository EmployeesRepository
	GalleryRepository   GalleryRepository
}

type Service struct {
	EventService     *EventService
	OrderService     *OrderService
	ConsultService   *ConsultService
	AuthService      *AuthService
	EmployeesService *EmployeesService
	GalleryService   *GalleryService
}

func New(deps Deps) *Service {
	return &Service{
		EventService:     NewEventService(deps.EventRepository),
		OrderService:     NewOrderService(deps.OrderRepository),
		ConsultService:   NewConsultService(deps.ConsultRepository),
		AuthService:      NewAuthService(deps.AuthRepository),
		EmployeesService: NewEmployeesService(deps.EmployeesRepository),
		GalleryService:   NewGalleryService(deps.GalleryRepository),
	}
}
