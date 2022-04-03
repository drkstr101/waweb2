.PHONY: setup clean format lint test build start ci dato-export docs

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make
# DATO_API_TOKEN := ${DATO_API_TOKEN}
# WA_HOME_URL := ${WA_HOME_URL}
# WA_EXPO_URL := ${WA_EXPO_URL}

ci:
	$(MAKE) setup
	$(MAKE) format
	$(MAKE) lint
	$(MAKE) test
	$(MAKE) build

clean:
	rm -rf yarn.lock coverage/ dist/ public/ node_modules/ **/__snapshots__/ apps/**/.cache/
	yarn cache clean

analyze:
	ANALYZE=true nx build home --verbose

# Install a few libs into node modules so the can be found
# using standard nodejs require
setup: install
	$(MAKE) setup-utils

setup-utils:
	nx build api-stackbit
	rm -rf node_modules/@watheia/api.stackbit
	mkdir -p node_modules/@watheia/api.stackbit
	cp -r dist/libs/api/stackbit/* node_modules/@watheia/api.stackbit/.
	echo '{}' > .sourcebit-nextjs-cache.json

install:
	yarn install

format:
	nx format

lint:
	nx run-many --all --target lint

test: setup-utils
	nx run-many --all --target test

build: build-home setup-utils

build-home: setup-utils
	WA_HOME_URL=$(WA_HOME_URL) \
		WA_EXPO_URL=$(WA_EXPO_URL) \
		nx build home --prod --verbose --skip-nx-cache

# build-expo: setup-utils
#		WA_HOME_URL=$(WA_HOME_URL) \
			WA_EXPO_URL=$(WA_EXPO_URL) \
			nx build expo --prod --verbose

# Run all in parallel
start: setup-utils
	WA_HOME_URL=$(WA_HOME_URL) \
		nx run-many --all --target serve --parallel

docs:
	depcruise . \
		--config .dependency-cruiser.js  \
		--output-type dot \
		--output-to docs/depgraph.dot --prefix "https://github.com/drkstr101/waweb2/blob/main/"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg



