🛒 Simple Product CRUD API

A simple Product CRUD (Create, Read, Update, Delete) API built with Node.js and Express.js, using in-memory storage (no database).

This project demonstrates basic RESTful API design and request handling.

📌 Features

Create a product

Get all products

Get a product by ID

Update a product

Delete a product

Uses in-memory storage (data resets on server restart)

🛠️ Technologies Used

Node.js

Express.js

JavaScript

Postman (for API testing)

📂 Project Structure
ProductCRUD/
│
├── controllers/
│   └── product.controller.js
│
├── routes/
│   └── product.route.js
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/Olakitan-01/simple-product-CRUD.git
cd simple-product-CRUD

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
node index.js


Server will run at:

http://localhost:3001

🔗 API Endpoints

Base URL:

http://localhost:3001/api/products

➕ Create a Product

POST /api/products

{
  "name": "Laptop",
  "quantity": 5,
  "price": 300000,
  "description": "Gaming laptop"
}

📄 Get All Products

GET /api/products

🔍 Get a Product by ID

GET /api/products/:id

✏️ Update a Product

PUT /api/products/:id

{
  "price": 280000
}

🗑️ Delete a Product

DELETE /api/products/:id

🧪 Testing the API

You can test all endpoints using:

Postman


⚠️ Important Note

This project uses in-memory storage

All data will be lost when the server restarts

No database is used

📚 Learning Purpose

This project was built for learning purposes to understand:

Express routing

Controllers

RESTful APIs

CRUD operations without a database

