
init:
	@mkdir -p ./postgresql/data
	@echo "Init postgresql"
rm :
	@rm -rf ./postgresql/data
	@echo "Remove postgresql"
start:
	 @docker-compose -f ./postgresql/docker-compose.yml up -d
	@echo "Start postgresql  "
stop:
	@docker-compose -f ./postgresql/docker-compose.yml down
	@echo "Stop postgresql"
restart: stop start
	@echo "Restart postgresql"
