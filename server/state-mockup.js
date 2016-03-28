area = {
  id: '610H',
  data: [{
    floor: 'G',
    risks: ['Storm surge', 'Flooding']
  }]
}

state = {
  // Index is a basic look-up object for creating the UI and getting
  // base information to understand how to interact with the server
  index: {
    areas: {
      [area.id]: {
        lat: Number,
        lng: Number,
        name: String,
        iconType: String, // list of known values not obtained by the server
      }
    }
  },
  areas: {
    [area.id]: {
      isFetching: Boolean,
      data: Object,
      lastUpdated: Date
    }
  },
  help: {
    vulnerabilities: {
      [vuln.id]: {
        name: String,
        description: String
      }
    }
  }
}

index = {
  areas: {
    buildings: {
      '555HA': {
        lat: 559109285,
        lng: 98125125,

        tooltip: 'This is triple 5',
        iconType: 'severe'
      }
    },
    parkinglot: {
      'westlot': {
        lat: 19825125,
        lng: 12985125,

        hasFloors: false
      }
    }
  }
}

{
  areas: {
    '555HA': {
      rtfDescription: 'HOIAHFOIAHOFI',
      floors: {
        'G': {
          vulnerabilities: ['Storm surge', 'Flooding'],
        }
      }
    }
  }
}
