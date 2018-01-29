401 JS --  Lab 36 Full Stack Crud
===

#### setup:
.env file
- `PORT`
- `DB_URL=mongodb://localhost:27017/visual_files_dev`
- `API_URL=http://localhost:${PORT}/api/v1`
- `ORIGIN_URL=http://localhost:8080`
for mongo db:
- create `server/db` folder

#### to run
- in server/: `npm start`
- in server/ run `mongod --dbpath=/db`
- in client/ run `npm run watch`

open localhost:8080
