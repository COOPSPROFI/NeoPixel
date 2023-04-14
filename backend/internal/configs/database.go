package configs

import (
	"fmt"
	"log"
	"os"

	"github.com/jackc/pgx"
)

var DB *pgx.Conn

// один раз объявил переменную
// передаешь ССЫЛКУ на переменную

func ConnectToDB() {
	config, err := pgx.ParseURI(os.Getenv("ConnURI"))
	if err != nil {
		log.Fatal("Unable to parse url string")
		os.Exit(1)
	}
	config.PreferSimpleProtocol = true
	DB, err = pgx.Connect(config)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to connect to database: %v\n", err)
		os.Exit(1)
	}
}
func CloseDB() error {
	return DB.Close()
}
