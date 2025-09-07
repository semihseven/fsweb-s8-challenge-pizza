import React, { useState } from "react";
import { Button, Form, FormGroup, Input, InputGroup, Label, Card, CardTitle, CardText } from "reactstrap";

const initialForm = {
  isim: "",
  not: "",
  malzemeler: [],
  boyut: ""
}


const OrderFormTest = () => {

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {

    //setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.name);
  }

  return (
    <div className="w-1/3 flex flex-wrap flex-col">
      <div className="flex m-4 text-left w-full">
        <Form className="flex flex-col items-start">
          <div className="flex">

            <FormGroup check className="flex flex-col m-2">
              <span className="m-2 text-xl font-semibold">Boyut Seç</span>
              <Input
                name="radio2"
                type="radio"
              />
              {' '}
              <Label check>
                Küçük
              </Label>


              <Input
                name="radio2"
                type="radio"
              />
              {' '}
              <Label check>
                Orta
              </Label>

              <Input
                name="radio2"
                type="radio"
              />
              {' '}
              <Label check>
                Büyük
              </Label>
            </FormGroup>

            <FormGroup row className="flex flex-col items-start">

              <Label
                for="exampleSelect" className="mt-2 text-xl font-semibold"
              >
                Hamur Seç
              </Label>

              <Input
                id="exampleSelect"
                name="select"
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
          </div>
          <div>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" name="pepperoni" className="" />
              <Label check>
                Pepperoni
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
            <FormGroup
              check
              inline
              className="my-2"
            >
              <Input type="checkbox" className="" />
              <Label check>
                Some input
              </Label>
            </FormGroup>
          </div>
        </Form>
      </div >

      <div className="">
        <Form onChange={handleChange} className="flex flex-col flex-wrap max-h-64 content-between p-4">

        </Form>
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
            />
            <FormGroup />
            {formData.isim && formData.isim.length < 4 ? <span className="!text-red-500">İsim 3 karakterden uzun olmalı</span> : <span></span>}
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
          <Button color="warning" className="w-full !bg-[#FDC913]">
            SİPARİŞ VER
          </Button>
        </Card>
      </div>
    </div >
  );
};

export default OrderFormTest;