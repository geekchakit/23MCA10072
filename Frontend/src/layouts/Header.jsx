import { Typography } from "@material-tailwind/react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white border-b-2 border-b-gray-800/10">
      <Wrapper>
        <div className="flex flex-row items-center gap-4 justify-between py-4">
          <Typography
            variant="h4"
            className="font-primary font-black uppercase "
          >
            ChakitKart
          </Typography>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
