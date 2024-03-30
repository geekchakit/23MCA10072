import { Button, Rating, Typography } from "@material-tailwind/react";
import Wrapper from "../layouts/Wrapper";

const data = {
  productName: "Bluetooth Earphones",
  price: "$79.99",
  rating: 4.2,
  discount: "20%",
  availability: false,
  category: "Earphones",
};

const ProductInfo = () => {
  const { productName, price, rating, discount, availability, category } = data;

  return (
    <div className="w-full h-full py-4 pb-10 md:pb-0  md:py-16">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full h-[400px] rounded-lg p-4 bg-white">
            <img
              src="https://via.placeholder.com/800"
              alt={productName}
              className="w-full h-full bg-white object-cover object-center"
            />
          </div>
          <div>
            <div>
              <Typography variant="h3" className="font-semibold font-primary">
                {productName}
              </Typography>
              <div className="flex flex-row items-center gap-2 flex-wrap mt-2">
                <Typography
                  variant="paragraph"
                  className="font-primary font-medium bg-blue-50 text-blue-500 mt-1 p-4 py-1 rounded-full max-w-fit "
                >
                  {category}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="font-primary font-medium bg-blue-50 text-blue-500 mt-1 p-4 py-1 rounded-full max-w-fit "
                >
                  Company Name
                </Typography>
              </div>
              <Typography variant="paragraph" className="font-primary mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                quos, voluptates, quod, nemo quas reiciendis Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Sapiente cum delectus
                quam modi labore, beatae nostrum atque doloribus, ipsa rem velit
                debitis ipsam totam illo!
              </Typography>
              <div className="flex flex-row items-center flex-wrap gap-2 mt-6">
                <Typography
                  variant="h3"
                  className="font-primary font-bold text-gray-600"
                >
                  {price}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="font-primary font-medium bg-yellow-500 text-black mt-1 p-4 py-1 rounded-full max-w-fit "
                >
                  {discount} OFF
                </Typography>
              </div>
              {availability ? (
                <div className="mt-6 flex flex-row items-center gap-2">
                  <Button
                    color="blue"
                    ripple="light"
                    rounded={true}
                    className="font-primary"
                    size="lg"
                    variant="outlined"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    color="blue"
                    ripple="light"
                    rounded={true}
                    className="font-primary"
                    size="lg"
                  >
                    Buy Now
                  </Button>
                </div>
              ) : (
                <div className="mt-6">
                  <Button
                    color="blue"
                    ripple="light"
                    rounded={true}
                    className="font-primary cursor-not-allowed"
                    size="lg"
                    disabled
                  >
                    Out of Stock
                  </Button>
                </div>
              )}
              <div className="mt-4 flex flex-row flex-wrap items-center gap-2">
                <Rating value={Math.floor(rating)} readonly />
                <span>
                  <Typography
                    variant="paragraph"
                    className="font-primary font-medium text-gray-600"
                  >
                    {rating} Rating
                  </Typography>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductInfo;
