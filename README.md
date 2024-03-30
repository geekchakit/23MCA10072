# E-commerce Product Comparison API

## Description

This project implements a REST API that allows users to compare top products from five different e-commerce companies based on category, price range, and other criteria. The API fetches data from the e-commerce companies' APIs and presents the top N products within a specified category and price range. Users can also retrieve details of specific products.

## Features

- **GET /categories/:categoryname/products**: Retrieve the top N products within a category, with optional sorting based on rating, price, company, or discount.
- **GET /categories/:categoryname/products/:productid**: Retrieve details of a specific product.
- **Pagination**: If the number of products exceeds 10, pagination is enforced.
- **Dynamic Filtering**: Users can specify the minimum and maximum price range for products.
- **Dynamic Sorting**: Users can sort products based on price (low to high or high to low) and category.

## Technologies Used

### Backend
- Node.js
- Express.js
- Axios

### Frontend
- React
- Vite
- Tailwind CSS
- Material-UI

## Usage

1. Clone the repository: `git clone https://github.com/geekchakit/23MCA10072`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Access the API endpoints at `http://localhost:5000/api/`

## API Endpoints

- **GET /api/categories/:categoryname/products**: Retrieve top products within a category.
  - Query Parameters:
    - `n`: Number of products to retrieve (default 10)
    - `minPrice`: Minimum price range
    - `maxPrice`: Maximum price range
    - `sort`: Sorting criteria (optional)
- **GET /api/categories/:categoryname/products/:productid**: Retrieve details of a specific product.

## Authors
Chakit Sharma
