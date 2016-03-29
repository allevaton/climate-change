# Climate Change Client

State:
```javascript
{
  // Index is a basic look-up object for creating the UI and getting
  // base information to understand how to interact with the server.
  // It is sent from the server to the client upon connection.
  index: {
    areas: {
      [area.id]: {
        lat: Number,
        lng: Number,
        name: String,
        type: String
      }
    },
    isFetching: false,
    invalidated: false
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
        type: String
        description: String
      }
    }
  }
}
```
