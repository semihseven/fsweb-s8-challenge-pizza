import React from "react";
import yemekler from "../data";
import { Card, CardText, CardTitle } from "reactstrap";

const Success = (props) => {
  const { fiyat, yanit } = props;
  console.log(yanit);
  return (
    <div className="flex flex-col justify-start items-center w-full h-full bg-[#CE2829] text-white ">
      <h3 className="font-[Satisfy] text-[#FDC913]">lezzetin yolda</h3>
      <h1 className="!font-[Roboto_Condensed] !font-light">SİPARİŞ ALINDI</h1>
      <hr className="!border-t !border-black-100 my-4 w-1/3"></hr>
      <h4 className="text-center">{yemekler[0].isim}</h4>
      <div className="mt-12 flex flex-col flex-wrap justify-start items-between !font-[Roboto_Condensed] w-1/7 text-left">
        <p className="font-extralight">Boyut: <span className="font-normal">{yanit.boyut}</span></p>
        <p className="font-extralight">Hamur: <span className="font-normal">{yanit.kalınlık}</span></p>
        <p className="font-extralight">Ek Malzemeler: <span className="font-normal">{yanit.malzemeler.join(", ")}</span></p>

      </div>

      <Card body className="flex border-white text-left !max-h-min w-1/7 py-4 px-0 !bg-[#CE2829] h-auto">
        <CardTitle tag="h6" className="!m-6">
          Sipariş Toplamı
        </CardTitle>
        <CardText className="flex justify-between !mx-6 font-medium">
          Seçimler
          <span>{fiyat.ekMalzeme.toFixed(2)}₺</span>
        </CardText>

        <CardText className="flex justify-between !mx-6 font-medium">
          Toplam
          <span>{(fiyat.ekMalzeme + fiyat.yemekFiyat).toFixed(2)}₺</span>
        </CardText>
      </Card>

    </div>
  );
};

export default Success;