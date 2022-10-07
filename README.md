# hotelreservation

App para gestión de reservas en un hotel:

Capacidad CRUD para habitaciones y reservas

## ALERTA:

Es necesario tener Docker instalado para poder ejecutar el proyecto con el comando:

`docker-compose up`

En caso de fallar el Docker se puede explorar la app de forma tradicional por el puerto 3001



Se proponen las siguientes rutas, su justificación y capacidades 


## Rutas Habitaciones:

### CARGAR HABITACIONES (POST)
`http://localhost:3001/rooms/bulk`

- Para cargar las 10 primeras habitaciones disponibles para ahorrar procesos

### CREAR HABITACIÓN (POST)
`http://localhost:3001/rooms/create`

- Se carga la información para crear una nueva habitación cuando sea necesario
Body:
	{
		"id": 120,
		"room_name": "Habitación mixta",
		"detail": "Habitación con cama sencilla y baño privado",
		"price_per_nigth": 80000
	}

### EDITAR HABITACIÓN (PUT)
`http://localhost:3001/rooms/edit/103`

- Se carga la información por Body y se pasa la id de la habitación por params para editar una habitación cuando sea necesario

Body:
	{
		"room_name": "Habitación familiar grande",
		"detail": "Habitación con tres camas dobles y baño privado",
		"price_per_nigth": 200000
	}

### ELIMINAR HABITACIÓN (DELETE)
`http://localhost:3001/rooms/delete/120`

- Se pasa la id por params para borrar una habitación (NO DEBE TENER OCUPACIÓN VIGENTE)

### CONSULTAR HABITACIONES(GET)
`http://localhost:3001/rooms/`

- Se utiliza para obtener información detallada sobre las habitaciones, el historial de reservas y la ocupación programada.

### CONSULTAR UNA SOLA HABITACIÓN (GET)
`http://localhost:3001/rooms/103`

- Se pasa la id por params para obtener toda la información detallada de un habitación



## Rutas Reservas:

### CREAR RESERVA (POST)
`http://localhost:3001/reservations/create`

- Se agrupa información como los nombres del cliente, numero de telefono, metodo de pago, habitación solicitada, fecha de entrada y fecha de salida para crear una nueva reserva.

Body:
{
	"costumer_name":"Laura",
	"costumer_lastname":"Rosales",
	"phone_number":"+573211681199",
	"payment_method":"debitcard",
	"initial_date": "2022/11/12",
	"final_date": "2022/11/15",
	"room_name":"Habitación premium"
}

### EDITAR RESERVA (PUT) 
`http://localhost:3001/reservations/edit/15433b50-45dd-11ed-8758-eb4ffa923822`

- Despues de realizada una reserva es posible editarla por completo con los datos correspondientes
    (Acepta nuevas fechas y cambio de habitación)

Body:
{
	"costumer_name": "Pedro",
	"costumer_lastname": "Portillo",
	"phone_number": "+573008781199",
	"payment_method": "cash",
	"initial_date": "2022/12/09",
	"final_date": "2022/12/12",
	"room_name": "Habitación individual doble"
}

### CANCELAR RESERVA (PUT)
`http://localhost:3001/reservations/cancel/091afc92-a35b-4c8b-ab90-e96026de9002`

- Se pasa la id de reserva por params para cambiar su estado a "cancelado" y quitar las fechas registradas previamente.

### PAGAR RESERVA (PUT)
`http://localhost:3001/reservations/pay/2ae68b3e-5c0a-4a6a-a55d-cd959d576bac`

- Se pasa la id de reserva por params para cambiar su estado a "pagado".

### CONSULTAR RESERVAS (GET)
`http://localhost:3001/reservations/`

- Se pueden consultar todas las reservas que se han procesado hasta el momento

### CONSULTAR UNA RESERVA (GET)
`http://localhost:3001/reservations/d086f31a-58aa-432a-9172-e6036c5ccada`

- Se pasa la id de reserva por params para consultar la reserva y obtener su información detallada.