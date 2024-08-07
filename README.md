1. Для установки всех расширений используйте npm i (npm install)
2. Установить все необходимые расширения:
npm i webpack webpack-cli json-server eslint husky webpack-dev-server
3. Для корректной работы последующих модулей требуется произвести команду git init и npm run prepare
4. Для включения webpack-dev-server используйте команду npx webpack-dev-server
5. Для включения json-server требуется выполнить команду json-server --watch database.json
6. Для работы линтера и pre-commit хука следуюет воспроизвести команду npx husky add .husky/pre-commit "npm run lint", затем git add ./husky и можете наслаждаться результатом!
P.S Команда git add .husky необязательна. Она требуется, если вы хотите просто проверить работоспособность проекта, а не для его улучшения или использования
   
