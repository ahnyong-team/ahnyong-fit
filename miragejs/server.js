import { Server, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model
    },

    seeds(server) {
      server.create('user', { name: 'Bob' })
      server.create('user', { name: 'Alice' })
    },

    routes() {
      this.namespace = 'api'

      this.get('/users', (schema) => {
        return schema.users.all()
      })

      this.get('/dashboard', () => {
        return {
          group: {
            id: 3,
            targetReps: 250,
            exercise: 'pushups',
            groupId: 3
          },
          members: [
            {
              id: 34,
              name: 'Aaron',
              avatar: '',
              completedTotal: 250,
              completedToday: 25,
              latest: 25
            },
            {
              id: 19,
              name: 'Matt',
              avatar: '',
              completedTotal: 7,
              completedToday: 0,
              latest: 3
            },
            {
              id: 86,
              name: 'Zach',
              avatar: '',
              completedTotal: 25,
              completedToday: 20,
              latest: 10
            }
          ]
        }
      })
    }
  })

  return server
}
