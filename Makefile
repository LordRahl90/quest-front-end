build:
	docker build -t lordrahl/quest-front-end:latest .

push:
	docker push lordrahl/quest-front-end:latest

ci: build push