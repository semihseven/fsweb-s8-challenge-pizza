import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import yemekler from "../data";

const YemekCard = () => {
  return (
    <div className="flex justify-center border-none text-left font-[Barlow]">
      <Card className="!border-none" style={{ padding: "0", marginBottom: "1rem" }}>
        <CardBody className="p-0 mt-8">
          <CardTitle tag="h5" className="text-[#292929] !mb-12">{yemekler[0].isim}</CardTitle>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold fs-4 text-[#292929]">{(yemekler[0].fiyat)}₺</span>
            <div className="flex justify-around text-[#5F5F5F] w-1/2">
              <span className="me-2">{yemekler[0].puan}</span>
              <span>({yemekler[0].yorum})</span>
            </div>
          </div>
          <CardText className="text-[#5F5F5F]">
            {yemekler[0].açıklama}
          </CardText>
        </CardBody>
      </Card>
    </div >
  );
};

export default YemekCard;