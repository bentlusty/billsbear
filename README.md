# Billsbear - Making your bills bearable

## How to start your project locally
1. Make sure you have docker and docker-compose installed on your system.
2. Change the .local.env file to .env file
3. run:
```bash
docker-compose up -d
```
That will connect the app to a Postgresql DB for development.
4. run 
```bash
npx ts-node index.ts
```
To run the app

## Run locally with Heroku
1. Make sure you have heroku CLI
2. Run heroku local web

## Staging ENV
Currently we only have staging env in Heroku: https://mighty-castle-46179.herokuapp.com/
