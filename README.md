
# API Examples:

 Get index or type (accessed at GET `http://localhost:3000/api/:choice`)
 - `/api/index` to list everything
 - `/api/vulnerability`
 - `/api/building`
 - `/api/quad`
 - `/api/parkinglot`

Get area by id (accessed at GET `http://localhost:3000/api/area/:id`)
 - `/api/area/:id` (EXAMPLE: 555HA)

List areas by vulnerability type and severity level (accessed at GET `http://localhost:3000/api/vulnerability/:type/:level`)
 - `/api/vulnerability/:type/:level` (EXAMPLE: /heat/severe)
 - List of types and [levels](http://pastebin.com/raw/W6Kgj4U6)
