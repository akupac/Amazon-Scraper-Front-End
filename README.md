# Amazon Scraper

This project is a simple web scraper that uses [Vite](https://vitejs.dev/) to serve the frontend to consume a simple API created in node ([Amazon-Scraper-Backend](https://github.com/akupac/Amazon-Scraper-Backend)).

The frontend is written in HTML, CSS, and Vanilla JavaScript. It uses the Fetch API to make requests to the API. The API is designed to accept a keyword as a query parameter and return a JSON response containing the results of the search.

## Usage

To use the project, run the following commands:

## Install

`npm install`

## Config

To use the project you need to create a `.env` file in the root directory with the following content or with your own port configuration in backend:

VITE_API_URL='http://localhost:3000'

### Development

`npm run dev`

This will start the development server and open the frontend in your web browser.

### Production

`npm run build`

This will build the frontend and create a production-ready version in the `dist` directory.

### Preview

`npm run preview`

This will start the production server and open the frontend in your web browser.
