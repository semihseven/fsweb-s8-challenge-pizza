import React from "react";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start h-full text-white bg-cover w-full"
      style={{ backgroundImage: "url('../images/iteration-1-images/home-banner.png')" }}>
      <h1 className="!mt-24 font-[Roboto_Condensed] !font-light">KOD ACIKTIRIR<br />PİZZA, DOYURUR</h1>

      <Button color="warning" className="!m-8 !px-12 !rounded-full !font-[Barlow] !font-medium">
        ACIKTIM
      </Button>
    </div>
  );
};

export default Home;