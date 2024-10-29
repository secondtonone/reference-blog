REGISTRY=us-docker.pkg.dev/blog-gar-tf/docker-us
BASE_REGISTRY?=us-docker.pkg.dev/base-images-gar-tf/docker-us
REGISTRY_SUFFIX?=-env
IMAGE_TAG?=-tag
COMPOSE_PROJECT_NAME?=blog
REACT_APP_CODE?=blog
PROXY_TAG?=-tag
COMPOSE:=export REGISTRY=${REGISTRY} BASE_REGISTRY=${BASE_REGISTRY} REGISTRY_SUFFIX=${REGISTRY_SUFFIX} REACT_APP_CODE=${REACT_APP_CODE} PROXY_TAG=${PROXY_TAG} && cd docker && docker-compose
HASH:=$(shell git rev-parse --short HEAD)

build/app:
	${COMPOSE} -f docker-compose.build.yml build application
	docker tag ${COMPOSE_PROJECT_NAME}_application:latest ${REGISTRY}-${REGISTRY_SUFFIX}/app-${REACT_APP_CODE}:$(IMAGE_TAG)

rebuild/app:
	docker pull ${REGISTRY}-${REGISTRY_SUFFIX}/app-${REACT_APP_CODE}:$(IMAGE_TAG) || true
	make build/app

run/app:
	docker run -p 3001:3000 app-${REACT_APP_CODE}_${REACT_APP_CODE}:latest

push/app:
	docker push ${REGISTRY}-${REGISTRY_SUFFIX}/app-${REACT_APP_CODE}:$(IMAGE_TAG)

push/app-last:
	docker tag ${REGISTRY}-${REGISTRY_SUFFIX}/app-${REACT_APP_CODE}:${IMAGE_TAG} ${REGISTRY}-rc/app-${REACT_APP_CODE}:latest
	docker push ${REGISTRY}-rc/app-${REACT_APP_CODE}:latest

push/app-prod:
	docker pull ${REGISTRY}-rc/app-${REACT_APP_CODE}:${IMAGE_TAG}

	docker tag ${REGISTRY}-rc/app-${REACT_APP_CODE}:${IMAGE_TAG} ${REGISTRY}-production/app-${REACT_APP_CODE}:latest
	docker tag ${REGISTRY}-rc/app-${REACT_APP_CODE}:${IMAGE_TAG} ${REGISTRY}-production/app-${REACT_APP_CODE}:${CI_COMMIT_TAG}

	docker push ${REGISTRY}-production/app-${REACT_APP_CODE}:latest
	docker push ${REGISTRY}-production/app-${REACT_APP_CODE}:${CI_COMMIT_TAG}

copy/build:
	mkdir -p build/_next/
	docker create -ti --name temp-${REACT_APP_CODE}-${IMAGE_TAG} ${REGISTRY}-${REGISTRY_SUFFIX}/app-${REACT_APP_CODE}:$(IMAGE_TAG)
	docker cp temp-${REACT_APP_CODE}-${IMAGE_TAG}:/home/node/app/.next/static/ build/_next/
	docker rm temp-${REACT_APP_CODE}-${IMAGE_TAG}

release/prod:
	git checkout master && git pull
	semver patch
	cd application && npm version patch
	git push --tags

up-redis:
	#make run
	${COMPOSE} up -d redis

build/proxy:
	${COMPOSE} -f docker-compose.build.yml build proxy

rebuild/proxy:
	docker pull ${REGISTRY}/blog-proxy:latest || true
	make build/proxy
	docker tag ${COMPOSE_PROJECT_NAME}_proxy:latest ${REGISTRY}/blog-proxy:$(PROXY_TAG)
	docker tag ${COMPOSE_PROJECT_NAME}_proxy:latest ${REGISTRY}/blog-proxy:latest

push/proxy:
	docker push ${REGISTRY}/blog-proxy:$(PROXY_TAG)
    docker push ${REGISTRY}/blog-proxy:latest
