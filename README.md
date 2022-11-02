# 

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx mongoosejs-cli db:migrate
```

4) Seeders:
``` bash
npx mongoosejs-cli db:seed:all