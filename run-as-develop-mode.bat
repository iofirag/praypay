REM Stop and remove last image build.
docker-compose down
REM Build image again
REM This create our services using the configuration in docker-compose.yml and docker-compose.override.yml 
REM (but not the prod configuration in docker-compose.prod.yml).
docker-compose build
docker-compose up