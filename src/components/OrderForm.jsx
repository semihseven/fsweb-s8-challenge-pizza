import React from "react";
import { Button, Form, FormGroup, Input, InputGroup, Label, Card, CardTitle, CardText } from "reactstrap";


const OrderForm = () => {
  return (
    <div className="w-1/3 flex flex-col">
      <div className="flex justify-between m-4 text-left">
        <Form className="flex flex-col items-start">
          <h5 className="m-2">Boyut Seç</h5>
          <FormGroup check className="m-2">
            <Input
              name="radio2"
              type="radio"
            />
            {' '}
            <Label check>
              Küçük
            </Label>
          </FormGroup>
          <FormGroup check className="m-2">
            <Input
              name="radio2"
              type="radio"
            />
            {' '}
            <Label check>
              Orta
            </Label>
          </FormGroup>
          <FormGroup check className="m-2">
            <Input
              name="radio2"
              type="radio"
            />
            {' '}
            <Label check>
              Büyük
            </Label>
          </FormGroup>
        </Form>
        <Form className="">
          <FormGroup row className="flex flex-col items-start">

            <Label
              for="exampleSelect" className="mt-2" tag="h5"
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
        </Form>
      </div>

      <div className="">
        <Form className="flex flex-col flex-wrap max-h-64 content-between p-4">
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
        </Form>
      </div>

      <div className="flex mt-16 flex-col items-start">
        <h2 className="my-4">Sipariş Notu</h2>
        <FormGroup className="flex w-full">
          <Label for="exampleText">

          </Label>
          <Input
            id="exampleText"
            name="text"
            type="textarea"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            style={{ resize: "none" }}
          />
        </FormGroup>


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
    </div>
  );
};

export default OrderForm;