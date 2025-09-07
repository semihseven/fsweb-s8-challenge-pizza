import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, InputGroup, Label, Card, CardTitle, CardText } from "reactstrap";

const initialForm = {
  isim: "",
  not: "",
  malzemeler: [],
  boyut: "",
  kalınlık: ""
}

const malzemeListesi = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"];


const OrderForm = () => {

  const [formData, setFormData] = useState(initialForm);

  const history = useHistory();
  const handleChange = (e) => {
    const { value } = e.target
    const { boyut, kalınlık, malzemeler, isim } = formData;
    let newValue;

    if (e.target.type === "checkbox") {
      const oldValues = formData.malzemeler

      if (oldValues.includes(value)) {
        newValue = oldValues.filter((v) => v !== value)
      } else {
        newValue = [...oldValues, value]
      }
      setFormData({ ...formData, malzemeler: newValue });
    } else {
      setFormData({ ...formData, [e.target.name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://reqres.in/api/pizza', formData, {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }
    )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    history.push("/success");
  }



  return (
    <div className="w-1/3 flex flex-col">
      <div className="flex justify-between m-4 text-left">
        <Form onChange={handleChange} name="size" className="flex flex-col items-start">
          <span className="m-2 text-xl font-semibold">Boyut Seç{formData.boyut ? <span /> : <span className="!text-red-500">  *</span>}</span>
          <FormGroup check className="m-2">
            <Input
              name="boyut"
              type="radio"
              value="küçük"
            />
            {' '}
            <Label >
              Küçük
            </Label>
          </FormGroup>
          <FormGroup check className="m-2">
            <Input
              name="boyut"
              type="radio"
              value="orta"
            />
            {' '}
            <Label >
              Orta
            </Label>
          </FormGroup>
          <FormGroup check className="m-2">
            <Input
              name="boyut"
              type="radio"
              value="büyük"
            />
            {' '}
            <Label check>
              Büyük
            </Label>
          </FormGroup>
        </Form>

        <Form onChange={handleChange} className="">
          <FormGroup row className="flex flex-col items-start">

            <Label
              for="kalınlık" className="mt-2 text-xl font-semibold"
            >
              Hamur Seç{formData.kalınlık ? <span /> : <span className="!text-red-500">  *</span>}
            </Label>

            <Input
              id="kalınlık"
              name="kalınlık"
              type="select"
              className=""
            >
              <option disabled selected>Hamur Kalınlığı</option>
              <option>
                İnce
              </option>
              <option>
                Kalın
              </option>

            </Input>

          </FormGroup>
        </Form>
      </div>

      <div className="">
        <Form onChange={handleChange} name="malzemeler" className="flex flex-col flex-wrap max-h-64 content-between p-4 text-left">

          {malzemeListesi.map(item =>

            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" value={item} className="" data-cy="malzeme" />
              <Label check>
                {item}
              </Label>
            </FormGroup>
          )}
        </Form>
        {formData.malzemeler && formData.malzemeler.length < 3 ? <span className="!text-red-500">En az 3 malzeme seçilmeli</span> : <span></span>}
      </div>

      <div className="flex flex-col items-start">
        <Form className="w-full">
          <FormGroup className="flex flex-col justify-start w-full text-left mt-4">
            <Label for="isim" className="text-xl font-semibold">
              İsim
            </Label>
            <Input
              id="isim"
              name="isim"
              type="text"
              placeholder="İsim"
              style={{ resize: "none" }}
              onChange={handleChange}
              value={formData.isim}
              data-cy="isim"
            />
            <FormGroup />
            {formData.isim && formData.isim.length < 4 ? <span className="!text-red-500" data-cy="isim-hata">İsim 3 karakterden uzun olmalı</span> : <span></span>}
            <FormGroup className="flex flex-col justify-start w-full text-left mt-4"></FormGroup>
            <Label for="not" className="text-xl font-semibold">
              Sipariş Notu
            </Label>
            <Input
              id="not"
              name="not"
              type="textarea"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              style={{ resize: "none" }}
              onChange={handleChange}
              value={formData.not}
            />
          </FormGroup>
        </Form>
      </div>
      <hr className="border-t border-black-100 my-4"></hr>
      <div className="flex justify-between">
        <InputGroup className="h-12" >
          <Button color="warning" className="shrink w-10 !bg-[#FDC913]">
            +
          </Button>
          <div className="w-12">
            <Input type="text" placeholder=" 1 " className="h-12" />
          </div>
          <Button color="warning" className="shrink w-10 !bg-[#FDC913]">
            -
          </Button>
        </InputGroup>

        <Card body className="flex text-left w-200 p-0">
          <CardTitle tag="h5" className="!m-8">
            Sipariş Toplamı
          </CardTitle>
          <CardText className="flex justify-between !mx-8">
            Seçimler
            <span>25.00</span>
          </CardText>

          <CardText className="flex justify-between !mx-8">
            Toplam
            <span>105</span>
          </CardText>
          <Button onClick={handleSubmit} disabled={!(formData.boyut && formData.kalınlık && formData.malzemeler.length >= 3 && formData.isim.length > 3)} color="warning" className="w-full !bg-[#FDC913]" data-cy="submit">
            SİPARİŞ VER
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default OrderForm;