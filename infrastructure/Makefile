docker-up:
	docker-compose up

docker-donw:
	docker-compose down

docker-watch:
	docker exec -ti infrastructure_api-rest_1 sh -c "npm run build:watch"

docker-test:
	docker exec -ti infrastructure_api-rest_1 sh -c "npm run test"

docker-clear:
	docker exec -ti infrastructure_api-rest_1 sh -c "npm run clean"

docker-generate-migration:
   	ifdef migration
		docker exec -ti infrastructure_api-rest_1 sh -c "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -n $(migration)"   
		@echo 'Migration  created'  $(migration)
   	else
		@echo 'Migration name is not defined'
   	endif

docker-create-migration:
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
	docker volume prune 
	docker system prune -a