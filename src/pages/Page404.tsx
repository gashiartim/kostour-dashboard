import { Button } from "../components/shared/Button/Button";
import React from "react";
import pageNotFound from "../assets/images/404_error.jpg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../lib/context/AuthContext/AuthContext";

type Props = {};

const Page404 = (props: Props) => {
  const navigate = useNavigate();
  const authCtx = useAuthContext();

  function handleClick() {
    if (authCtx.user) return navigate(authCtx.user.redirectTo);
    navigate("/");
  }

  return (
    <div className="absolute inset-0 w-full h-[100vh] bg-white p-20">
      <img
        alt="Page not found"
        src={pageNotFound}
        style={{
          width: "80%",
          height: "300px",
          objectFit: "contain",
          objectPosition: "center",
        }}
        className="mx-auto "
      />
      <div className="items-start justify-center w-full h-full lg:pl-[300px] text-left ">
        <h2 className="text-4xl font-medium text-gray-500 uppercase">
          Page not found
        </h2>
        <p className="text-xl font-normal text-gray-500">
          We looked everywhere for this page. <br /> Are you sure the website
          URL is correct? <br /> Get in touch with the site owner.
        </p>
        <Button className="mt-5 btn-secondary" onClick={handleClick}>
          Go to homepage
        </Button>
      </div>
    </div>
  );
};

export default Page404;
