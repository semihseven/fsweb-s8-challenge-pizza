import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";





const Home = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/neworder")
  }

  return (
    <div className="flex flex-col items-center justify-start h-full text-white bg-cover w-full"
      style={{ backgroundImage: "url('../images/iteration-1-images/home-banner.png')" }}>
      <h1 className="!mt-12 font-[Roboto_Condensed] !font-light">KOD ACIKTIRIR<br />PİZZA, DOYURUR</h1>

      <Button onClick={handleClick} color="warning" className="!m-8 !px-12 !rounded-full !font-[Barlow] !font-medium">
        ACIKTIM
      </Button>
    </div>
  );
};

export default Home;