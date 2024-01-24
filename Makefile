build:
	docker build -t lordrahl/quest-student:latest .

push:
	docker push lordrahl/quest-student:latest

ci: build push