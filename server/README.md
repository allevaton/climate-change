
## Database
 - [DB Browser for SQLite](http://sqlitebrowser.org/) can be used to modify the database

## API

 Get index or type (accessed at GET `http://localhost:3000/api/:choice`).
 - `/api/index` to list everything
 - `/api/vulnerability`
 - `/api/building`
 - `/api/quad`
 - `/api/parkinglot`
 - `/api/help`

Get area by id (accessed at GET `http://localhost:3000/api/area/:id`).
 - `/api/area/:id` (EXAMPLE: 555HA)
 - List of available [area ids](http://pastebin.com/raw/GWYeMLx0)

List areas by vulnerability type and severity level (accessed at GET `http://localhost:3000/api/vulnerability/:type/:level`)
 - `/api/vulnerability/:type/:level` (EXAMPLE: /heat/severe)
 - List of available [types](http://pastebin.com/raw/32Kz3hAn) and [levels](http://pastebin.com/raw/W6Kgj4U6)

## Testing
Unit test driver can be used with [mocha](https://mochajs.org/).
