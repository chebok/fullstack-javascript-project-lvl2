install:
		npm ci # установка
gendiff:
		node bin/gendiff.js # запуск					
publish:
		npm publish --dry-run # публикация
lint:
		npx eslint # eslinting
test:
		NODE_OPTIONS=--experimental-vm-modules npx jest # тесты без бабеля