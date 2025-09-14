
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, InputGroup, Label, Card, CardTitle, CardText } from "reactstrap";
import YemekCard from "./YemekCard";
import yemekler from "../data";
import axios from "axios";




const malzemeListesi = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak", "Zeytin", "Ekstra Sos"];


const OrderForm = (props) => {

  const { count, setCount, formData, setFormData, fiyat, setFiyat, yanit, setYanit } = props;

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();


    axios.post('https://reqres.in/api/pizza', formData, {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }
    )
      .then(function (response) {
        console.log(response.data);
        setYanit(response.data);
        history.push("/success");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleChange = (e) => {

    const { value } = e.target;
    let newValue;

    if (e.target.type === "checkbox") {
      const oldValues = formData.malzemeler
      if (oldValues.includes(value)) {
        newValue = oldValues.filter((v) => v !== value);
        setFiyat({ ...fiyat, ekMalzeme: fiyat.ekMalzeme - 5 })
      } else {
        newValue = [...oldValues, value];
        setFiyat({ ...fiyat, ekMalzeme: fiyat.ekMalzeme + 5 })
      }
      setFormData({ ...formData, malzemeler: newValue });

    } else {
      setFormData({ ...formData, [e.target.name]: value })
    }
  }

  useEffect(() => {
    setFiyat({ ...fiyat, yemekFiyat: yemekler[0].fiyat * count });
  }, [count])

  return (
    <div className="w-1/3 flex flex-col font-[Barlow] ">
      <YemekCard />

      <div className="flex justify-between my-4 text-left">
        <Form onChange={handleChange} name="size" className="flex flex-col items-start">
          <span className="my-2 text-xl font-semibold">Boyut Seç{formData.boyut ? <span /> : <span className="!text-red-500">  *</span>}</span>
          <FormGroup check className="my-2">
            <Input
              name="boyut"
              type="radio"
              value="Küçük"
            />
            {' '}
            <Label >
              Küçük
            </Label>
          </FormGroup>
          <FormGroup check className="my-2">
            <Input
              name="boyut"
              type="radio"
              value="Orta"
            />
            {' '}
            <Label >
              Orta
            </Label>
          </FormGroup>
          <FormGroup check className="my-2">
            <Input
              name="boyut"
              type="radio"
              value="Büyük"
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
              defaultValue="1"
            >
              <option value="1" disabled>Hamur Kalınlığı</option>
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

      <div className="text-left">
        <p className="text-xl font-semibold">Ek Malzemeler</p>
        <p className="text-base font-medium text-[#5F5F5F]">En Fazla 10 Malzeme Seçebilirsiniz. 5₺</p>

        <Form onChange={handleChange} name="malzemeler" className="flex flex-col flex-wrap max-h-64 content-between text-left">

          {malzemeListesi.map((item, id) =>

            <FormGroup
              check
              inline
              className="my-2"
              key={id}
            >
              <Input type="checkbox" key={id} value={item} className="" data-cy="malzeme" disabled={
                formData.malzemeler.length >= 10 &&
                !formData.malzemeler.includes(item)
              } />
              <Label check>
                {item}
              </Label>
            </FormGroup>
          )}
        </Form>
        {formData.malzemeler && formData.malzemeler.length < 3 ? <span className="!text-red-500">En az 3 malzeme seçilmeli</span> : <span></span>}
        {formData.malzemeler && formData.malzemeler.length >= 10 ? <span className="!text-red-500">En fazla 10 malzeme seçebilirsin</span> : <span></span>}
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
          <Button onClick={() => setCount(count + 1)} color="warning" className="shrink w-10 !bg-[#FDC913]" data-cy="ekle">
            +
          </Button>
          <div className="w-12">
            <Input type="text" placeholder="1" className="h-12" value={count} />
          </div>
          <Button onClick={() => setCount(count - 1)} color="warning" className="shrink w-10 !bg-[#FDC913]">
            -
          </Button>
        </InputGroup>

        <Card body className="flex text-left w-200 p-0">
          <CardTitle tag="h5" className="!m-8">
            Sipariş Toplamı
          </CardTitle>
          <CardText className="flex justify-between !mx-8 font-medium">
            Seçimler
            <span>{fiyat.ekMalzeme.toFixed(2)}₺</span>
          </CardText>

          <CardText className="flex justify-between !mx-8 text-red-500 font-medium">
            Toplam
            <span>{(fiyat.ekMalzeme + fiyat.yemekFiyat).toFixed(2)}₺</span>
          </CardText>
          <Button onClick={handleSubmit} disabled={!(formData.boyut && formData.kalınlık && formData.malzemeler.length >= 3 && formData.isim.length > 3 && count > 0)} color="warning" className="w-full !bg-[#FDC913]" data-cy="submit">
            SİPARİŞ VER
          </Button>
        </Card>
      </div>

    </div>
  );
};

export default OrderForm;