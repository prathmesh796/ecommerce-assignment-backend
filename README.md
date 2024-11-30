# E-commerce Backend

This is the backend for the E-commerce website, built with Node.js and Express. It provides APIs for authentication, product management, and cart functionality.

## Features

- User authentication using JWT (signup and login).
- Product management APIs with filters and pagination.
- Cart management APIs (add, view, remove items).
- MongoDB for database management.
- Postman collection for API testing.

## Tech Stack

- **Node.js**: JavaScript runtime.
- **Express**: Backend framework for building RESTful APIs.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB.
## Installation and Setup

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running (local or cloud).

### Steps to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prathmesh796/ecommerce-assignment-backend.git
   cd e-commerce-backend

2. **Install dependencies:**
    ```bash
    npm install

3. **Generate your JWT_SECRET:**
    To generate your JWT_SECRET run:
    ```bash
    node scripts/gensecret.js

4. **Set up environment variables:**
    Create a .env file in the root directory:
    ```bash
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/ecommerce
    JWT_SECRET=your_jwt_secret

5. **Seed the database:**
    To populate the database with sample products, run:
    ```bash
    node scripts/seed.js

6. **Run the server:**
    ```bash
    node index.js

## API Reference

#### Authentication

```http
  POST /api/auth/signup
  POST /api/auth/login
```

#### Products

```http
  GET /api/products/products
```

#### Cart

```http
  POST /api/cart
  GET /api/cart/:userId
  DELETE /api/cart/remove
```


## Postman Collection

A Postman collection is available in the repository (ecommerce.postman_collection.json). Import it into Postman to test all APIs.

Or you can access the postman collection dirctly by clicking this button: 
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/37731635-8bba760a-6361-4c09-af30-1051c0cd4b20?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D37731635-8bba760a-6361-4c09-af30-1051c0cd4b20%26entityType%3Dcollection%26workspaceId%3D5cc10ee3-f0bd-4fad-89e7-ef44571543eb)