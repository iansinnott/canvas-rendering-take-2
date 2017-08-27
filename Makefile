.PHONY: bundle dev-server

bundle:
	./node_modules/.bin/webpack

dev-server:
	./node_modules/.bin/webpack-dev-server
