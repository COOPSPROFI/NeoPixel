package service

type Deps struct {
	EventRepository   EventRepository
	ConsultRepository ConsultRepository
	AuthRepository    AuthRepository
}

type Service struct {
	EventService   *EventService
	ConsultService *ConsultService
	AuthService    *AuthService
}

func New(deps Deps) *Service {
	return &Service{
		EventService:   NewEventService(deps.EventRepository),
		ConsultService: NewConsultService(deps.ConsultRepository),
		AuthService:    NewAuthService(deps.AuthRepository),
	}
}
