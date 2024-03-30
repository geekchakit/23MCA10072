import { Rating, Select, Typography, Option, Button } from "@material-tailwind/react";
import Wrapper from "../layouts/Wrapper";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const sortby = {
  price: [
    {
      text: "Low to High",
      value: "low-to-high",
    },
    {
      text: "High to Low",
      value: "high-to-low",
    },
  ],
  category: [
    {
      text: "Phone",
      value: "Phone",
    },
    {
      text: "Computer",
      value: "Computer",
    },
    {
      text: "TV",
      value: "Tv",
    },
    {
      text: "Earphones",
      value: "Earphones",
    },
    {
      text: "Tablet",
      value: "Tablet",
    },
    {
      text: "Charger",
      value: "Charger",
    },
    {
      text: "Mouse",
      value: "Mouse",
    },
    {
      text: "Keyboard",
      value: "Keyboard",
    },
    { text: "Bluetooth", value: "Bluetooth" },
    {text:"Laptop",value:"Laptop"}
  ],
};

const Home = () => {
  const [products, setProducts] = useState([]);
  const [dataSortBY, setDataSortBY] = useState({
    minPrice: "",
    maxPrice: "",
    category: "",
  });

  const fetchData = async () => {
    try {
      if (dataSortBY.category && dataSortBY.minPrice && dataSortBY.maxPrice) {
        const response = await axios.get("http://localhost:5000/api/topproduct", {
          params: {
            categoryname: dataSortBY.category,
            n: 10,
            minPrice: dataSortBY.minPrice,
            maxPrice: dataSortBY.maxPrice,
          },
        });
        setProducts(response.data);
      } else {
        console.log("Please select category, min price, and max price");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataSortBY]); // Re-fetch data when dataSortBY changes

  return (
    <div className="py-10 w-full h-full">
      <Wrapper>
        <div>
          <div className="flex flex-row items-center gap-4 justify-between flex-wrap">
            <Typography
              variant="h3"
              className="font-semibold capitalize font-primary border-b-2 border-b-blue-500 max-w-fit"
            >
              All Products
            </Typography>
            <div className="flex flex-row items-center gap-2">
              <input
                type="number"
                placeholder="Min Price"
                className="bg-white font-primary p-2"
                value={dataSortBY.minPrice}
                onChange={(e) =>
                  setDataSortBY({ ...dataSortBY, minPrice: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Max Price"
                className="bg-white font-primary p-2"
                value={dataSortBY.maxPrice}
                onChange={(e) =>
                  setDataSortBY({ ...dataSortBY, maxPrice: e.target.value })
                }
              />
              <Select
                label="Select Price"
                className="bg-white font-primary"
                value={dataSortBY.price}
                onChange={(val) => setDataSortBY({ ...dataSortBY, price: val })}
              >
                {sortby.price.map((item, index) => (
                  <Option
                    key={index}
                    value={item.value}
                    className="capitalize font-primary"
                  >
                    {item.text}
                  </Option>
                ))}
              </Select>
              <Select
                label="Select Category"
                className="bg-white font-primary"
                value={dataSortBY.category}
                onChange={(val) =>
                  setDataSortBY({ ...dataSortBY, category: val })
                }
              >
                {sortby.category.map((item, index) => (
                  <Option
                    key={index}
                    value={item.value}
                    className="capitalize font-primary"
                  >
                    {item.text}
                  </Option>
                ))}
              </Select>
              <Button onClick={fetchData}>Fetch Data</Button>
            </div>
          </div>
          <div className="mt-8 text-base font-semibold">
            <Typography
              className="font-primary font-semibold text-gray-600"
              variant="h6"
            >
              {products.length} Products Found
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full h-full">
            {products.map((item, index) => (
              <Link
                to={`/product/${index}`}
                key={index}
                preventScrollReset={true}
              >
                <div className="bg-white w-full h-full rounded-lg border border-gray-800/5 overflow-hidden flex flex-col gap-1 cursor-pointer">
                  <div className="w-full h-[200px]  overflow-hidden relative">
                    <img
                      src="https://via.placeholder.com/800"
                      alt={item.productName}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="bg-white absolute bottom-0 left-1/2 -translate-x-1/2 px-6 pt-3 rounded-t-md">
                      <Rating value={Math.floor(item.rating)} readonly />
                    </div>
                  </div>
                  <div>
                    <div className="p-2 px-4 text-center flex flex-col gap-2">
                      <Typography
                        variant="h5"
                        className="font-primary font-semibold capitalize"
                      >
                        {item.productName}
                      </Typography>
                      <span className="bg-blue-50 text-blue-600 p-4 py-1 rounded-full max-w-fit mx-auto text-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-center flex flex-row gap-2 items-center justify-center mb-6">
                      <Typography
                        variant="h3"
                        className="font-primary text-gray-600"
                      >
                        {item.price}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Home;
