##
## -----------------------------
## Install
## -----------------------------
##

## Install everything
install: 
	yarn && cd back && yarn

##
## -----------------------------
## Run
## -----------------------------
##

lint.back:
	cd back && yarn eslint --ext .js,.ts./

lint: 
	make lint.back

start: ## Start dev environment
	npx pm2 start

stop: ## Stop dev environment
	npx pm2 delete all

monit: ## Open pm2 dev monitor
	npx pm2 monit

logs: ## Show dev logs
	npx pm2 logs all --nostream

logs.watch: ## Watch dev logs
	npx pm2 logs all
