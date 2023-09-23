# DBEST stack

The `DBEST` (DrizzleORM, Bun, ElysiaJS, SolidStart, Tailwind CSS) stack is a bun-based 🔥 `BLAZINGLY FAST` 🔥 full-stack `100% type-safe` web development solution that provides `everything` you need to build a `production-ready` web app based on the performant and scalable SolidStart meta-framework. It consists of:

- [DrizzleORM](https://orm.drizzle.team)
- [Bun](https://bun.sh)
- [ElysiaJS](https://elysiajs.com)
- [SolidStart](https://start.solidjs.com/)
- [Tailwind CSS](https://tailwindcss.com)

## Creating a project

Create a new project

```bash
bun create itsyoboieltr/dbest-stack
```

Optionally specify a name for the destination folder. If no destination is specified, the name `dbest-stack` will be used.

```bash
bun create itsyoboieltr/dbest-stack my-app
```

Bun will perform the following steps:

- Download the `template`
- Copy all template files into the `destination folder`
- Install dependencies with `bun i`.
- Initialize a fresh Git repo. Opt out with the `--no-git` flag.

## Getting started

Once the project is created and the dependencies are installed, the environment variables need to be set up. The following environment variables can be configured:

[.env.example](.env.example)

```bash
DATABASE_HOST="localhost"
DATABASE_PORT="5432"
DATABASE_USER="postgres"
DATABASE_PASSWORD="postgres"
DATABASE_NAME="postgres"
DATABASE_SSL="false"
VITE_HOST_URL="http://localhost:3000"
COMPOSE_APP_PORT="3000"
COMPOSE_DATABASE_BACKUP_PATH="$HOME/backup"
COMPOSE_PROFILES=development
```

The most important thing to configure is the database connection, as running the app without a database connection will result in an instant error.

In case your database schema does not match the schema defined by drizzle, then the database needs to be synchronized. This can be done by running the following command:

```bash
bun push
```

In addition, drizzle studio can be leveraged to connect to the database and browse, add, delete and update data based on the declared drizzle schema.

```bash
bun studio
```

## Developing

If everything is set up correctly, you can start the development server with:

```bash
bun dev
```

## Building

Build for production by running the following command:

```bash
bun run build
```

## Running

Run in production by running the following command:

```bash
bun start
```

## Deployment

Using the [Dockerfile](Dockerfile) or the [compose.yaml](compose.yaml) file, the application can be deployed to any docker host. The following command will build the docker image and start the application.

```bash
docker compose up
```

Important notes for production use:

1. Set the `COMPOSE_APP_PORT` environment variable to the port that the application should be exposed on.

```bash
COMPOSE_APP_PORT="3000"
```

2. In a production setting, you might want to enable backups for the database. This can be done by setting the `COMPOSE_PROFILES` environment variable to `production`.

```bash
COMPOSE_PROFILES="production"
```

3. The `COMPOSE_DATABASE_BACKUP_PATH` environment variable can be used to customize the path where the database backups are stored.

```bash
COMPOSE_DATABASE_BACKUP_PATH="$HOME/backup"
```
