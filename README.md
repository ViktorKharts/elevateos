### Prerequisits
1. Node v23.9.0
2. Docker

### Launch 
1. `npm ci` - install dependencies
2. `docker-compose up -d` - bring db and redis up
3. `npm run migration` - build project and run migration
4. `npm run serve:prod` - launch project

### Tips 
Swagger is available at `/docs` endpoint.

### Further improvements
1. Use more process.env
2. Dockerize api as well
