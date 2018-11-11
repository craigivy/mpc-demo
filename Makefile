.DEFAULT: default
default: uibuild uidist uistart

.PHONY: all
all: setup default

.PHONY: setup
setup:
	@echo "Running: $@"
	@cd ui-src && npm install
	@cd ui-serve && npm install

.PHONY: uibuild
uibuild:
	@echo "Running: $@"
	@cd ui-src && ./dist.sh

.PHONY: uidist
uidist:
	@echo "Running: $@"
	@cp -r ui-src/dist/tate-demo-ui/ ui-serve/public/

.PHONY: uistart
uistart:
	@echo "Running: $@"
	@cd ui-serve && npm start

