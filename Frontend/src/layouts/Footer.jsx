import { Typography } from "@material-tailwind/react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <div className="bg-white border-t-2 border-t-gray-800/10 py-10">
      <Wrapper>
        <div className="flex flex-col items-center justify-center text-center">
          <Typography
            variant="h2"
            className="font-black uppercase font-primary"
          >
            ChakitKart
          </Typography>
          <Typography
            variant="paragraph"
            className="font-primary font-medium mx-auto mt-4"
          >
            Designed and developed by chakit
            <br /> All rights reserved
          </Typography>
          <span className="mt-6 text-sm font-medium text-gray-500">
            {" "}
            @{new Date().getFullYear()} All rights reserved
          </span>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
