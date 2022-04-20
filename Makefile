.PHONY: ci clean format lint test build start ci dato-export docs

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)
MAKE := make
GATEKEEPER_URL := ${GATEKEEPER_URL}

ci:
	$(MAKE) setup
	$(MAKE) depcruise
	$(MAKE) check
	$(MAKE) test
	$(MAKE) build

clean:
	rm -rf yarn.lock coverage/ dist/ public/ node_modules/ **/__snapshots__/ apps/**/.cache/
	yarn cache clean

analyze:
	ANALYZE=true nx build home --verbose

# Install a few libs into node modules so the can be found
# using standard nodejs require
setup:
	npm install --global @teambit/bvm
	bvm install
	bit config set analytics_reporting false
	bit config set interactive false
	bit init --harmony
	bit install

setup-utils:
	nx build api-stackbit
	rm -rf node_modules/@watheia
	mkdir node_modules/@watheia
	cp -r dist/libs/api/stackbit node_modules/@watheia/api.stackbit
	echo '{}' > .sourcebit-nextjs-cache.json

check:
	nx run-many --all --target lint
	nx workspace-lint
	stackbit validate

test: setup-utils
	nx run-many --all --target test

build: setup-utils
	nx run-many --all --target build --verbose

build-home: home
	@echo "DEPRECATED: use 'make home' instead"

home: setup-utils
	nx build home --prod --verbose --skip-nx-cache

# Run all in parallel
start: setup-utils
	nx run-many --all --target serve --parallel

depcruise:
	depcruise . \
		--config .dependency-cruiser.js  \
		--output-type dot \
		--output-to docs/depgraph.dot --prefix "https://github.com/drkstr101/waweb2/blob/main/"
	cat docs/depgraph.dot | dot -T svg > docs/depgraph.svg.tmp
	mv docs/depgraph.svg.tmp docs/depgraph.svg



