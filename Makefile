docker-up:
	docker-compose up -d
	docker-compose ps
	@echo "up end!"

docker-down:
	docker-compose down -v
	@echo "down end!"

connect-to-server:
	docker exec -it node_server bash

connect-to-client:
	docker exec -it node_client bash
