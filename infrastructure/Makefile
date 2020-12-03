docker-up:
	@echo "Up All Services"
	docker-compose up
	
docker-bootstrap:

	@echo "Create Database if not exists"
	docker exec -ti infrastructure_mariadb_1 sh -c "cd /opt/bd && mysql -uroot -ppassword < init.sql"

docker-access-bd:

	@echo "Access to cotainer BD"
	docker exec -ti infrastructure_mariadb_1 bash

docker-access-api:

	@echo "Access to container API"
	docker exec -ti infrastructure_api-rest_1 bash

docker-down:

	@echo "Down docker-compose"
	docker-compose down

docker-watch:

	@echo "Watch in js"
	docker exec -ti infrastructure_api-rest_1 sh -c "npm run build:watch"

docker-test:

	@echo "Run tests"
	docker exec -ti infrastructure_api-rest_1 sh -c "npm run test"

docker-clear:

	@echo "Clear Dist folder"
	docker exec -ti infrastructure_api-rest_1 sh -c "npm run clean"

docker-generate-migration:

	@echo "Generate Migrations"
   	ifdef migration
		docker exec -ti infrastructure_api-rest_1 sh -c "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -n $(migration)"   
		@echo 'Migration  created'  $(migration)
   	else
		@echo 'Migration name is not defined'
   	endif

docker-create-migration:

	@echo "Create Migrations"
   	ifdef migration
		docker exec -ti infrastructure_api-rest_1 sh -c "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:create -n $(migration)"   
		@echo 'Migration  created'  $(migration)
   	else
		@echo 'Migration name is not defined'
   	endif

docker-run-migration:	

	@echo "Execute Migrations"
	docker exec -ti infrastructure_api-rest_1 sh -c "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run"   

docker-revert-migration:

	@echo "rollback last migration"
	docker exec -ti infrastructure_api-rest_1 sh -c "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:revert"

docker-clear-all:	

	@echo "Warning !!!! Delete ALL volumes, containers and images"
	docker volume prune 
	docker system prune -a