install:
		npm ci # установка
gendiff:
		node bin/gendiff.js # запуск					
publish:
		npm publish --dry-run # публикация
lint:
		npx eslint # eslinting