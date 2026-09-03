# Zenith Car Dealership Platform

Full-stack car dealership platform with a React front end and an Express +
MongoDB API. Customers browse inventory; dealers and admins manage listings.

## Stack

| Layer    | Technology                                      |
| -------- | ----------------------------------------------- |
| Client   | React 19, Vite, Material UI, Redux Toolkit      |
| Server   | Node.js, Express 4, Mongoose                    |
| Database | MongoDB (Redis for caching)                     |
| Auth     | JWT access tokens with role-based authorization |

## Layout

```
client/   React application (Vite)
server/   Express REST API
  config/       database connection
  controllers/  request handlers
  middleware/   auth and role guards
  models/       Mongoose schemas
  routes/       route definitions
  utils/        seeder and helpers
```

## Getting started

```bash
npm run install-all            # install root, server and client dependencies
cp server/.env.example server/.env
npm run dev                    # run the API and client together
```

The API listens on `http://localhost:5001` and the client on
`http://localhost:5173`.

## Seeding data

```bash
cd server
npm run seed        # load sample users and vehicles
npm run seed:clear  # remove seeded data
```

## Roles

- `customer` — browse and view vehicles
- `dealer` — create and update vehicle listings
- `admin` — full access, including deleting listings

## License

MIT — see [LICENSE](LICENSE).
