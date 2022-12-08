# Simple Memo - server side

This is a simple memo app in web version inspired by [Blink](https://apps.apple.com/us/app/blink-quick-memo-widget/id1182856129)

- Visit the [client side repo](https://github.com/aanmeba/simple-memo-client) for more details

## Demo

👉 Here's the deployed api: [back end](https://simple-memo-server.onrender.com/memos)

## Tech Stack

- Express for backend development
- Cors for skipping same-origin policy
- MongoDB Atlas for storing and retrieving data
- Mongoose for connecting between MongoDB and Express
- Nodemon for restarting the server automatically when there is any change during development

## Installation

- Clone this repo
- Run this command line in your terminal, `npm install`, to install the dependencies defined in package.json
- Execute the server using `npm start` and it will run your localhost port 5000
- Once it connects to the MongoDB Atlas and runs, "Server is running on port: 5000" message is shown on your terminal
