const axios = require("axios");
require("dotenv").config();
// Function to fetch products from all e-commerce APIs
async function fetchProductsFromAllCompanies(categoryname,n,minPrice,maxPrice) {
  // Array to store the promises for fetching products from each company
  const promises = [
    fetchProductsFromAMZ(categoryname, minPrice, maxPrice),
    fetchProductsFromFLP(categoryname, minPrice, maxPrice),
    fetchProductsFromSNP(categoryname, minPrice, maxPrice),
    fetchProductsFromMYN(categoryname, minPrice, maxPrice),
    fetchProductsFromAZO(categoryname, minPrice, maxPrice),
  ];

  // Wait for all promises to resolve
  const results = await Promise.all(promises);
  console.log(results);
  //Combine the results from all companies into a single array
  let products = results.reduce((acc, curr) => acc.concat(curr), []);
  return products.slice(0,n);
}

// Functions to fetch products from each e-commerce company
async function fetchProductsFromAMZ(categoryname, minPrice, maxPrice) {
  // Implement logic to fetch products from Amazon's API
  console.log(process.env.token);
  const url = `http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.token}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    //console.log(error);
    return [];
  }
}

async function fetchProductsFromFLP(categoryname, minPrice, maxPrice) {
    // Implement logic to fetch products from Flipkart's API
    console.log(process.env.token);
    const url = `http://20.244.56.144/test/companies/FLP/categories/${categoryname}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      //console.log(error);
      return [];
    }
}

async function fetchProductsFromSNP(categoryname, minPrice, maxPrice) {
    // Implement logic to fetch products from SNP's API
    console.log(process.env.token);
    const url = `http://20.244.56.144/test/companies/SNP/categories/${categoryname}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      //console.log(error);
      return [];
    }
}

async function fetchProductsFromMYN(categoryname, minPrice, maxPrice) {
    // Implement logic to fetch products from Myntra's API
    console.log(process.env.token);
    const url = `http://20.244.56.144/test/companies/MYN/categories/${categoryname}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      //console.log(error);
      return [];
    }
}

async function fetchProductsFromAZO(categoryname, minPrice, maxPrice) {
    // Implement logic to fetch products from Azio's API
    console.log(process.env.token);
    const url = `http://20.244.56.144/test/companies/AZO/categories/${categoryname}/products?top=10&minPrice=${minPrice}&maxPrice=${maxPrice}`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      //console.log(error);
      return [];
    }
}

module.exports.getTopProduct = async (req, res) => {
  console.log(req.query);
  const product = await fetchProductsFromAllCompanies(req.query.categoryname,req.query.n,req.query.minPrice,req.query.maxPrice);
  res.json(product);
};

module.exports.getSpecifiedProduct = async (req, res) => {
  //unable to do as product id is not specified in response getting from the Test API
  res.json({ message: "Product specified" });
};
