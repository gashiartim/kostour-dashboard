import React from "react";
import Container from "../../components/shared/Container/Container";
import { Icon } from "../../components/shared/Icon/Icon";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h1 className="text-6xl font-semibold leading-[70px] mt-[100px]">
          Dashboard <br /> Website
        </h1>
        <h4 className="text-lg text-gray-500 max-w-[500px] mt-10">
          This is an application that is developed for admin users, in order to
          provide them with ways to manage data.
        </h4>
      </div>
      <div className="flex justify-center lg:justify-start">
        <div className="bg-[#262626] rounded-3xl w-max  mt-4 lg:mt-0">
          <Icon
            icon="dashboard"
            className=" w-[320px] lg:w-[400px] lg:h-[400px]  h-[320px] mx-auto block "
          />
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
