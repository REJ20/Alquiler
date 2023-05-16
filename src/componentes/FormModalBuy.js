import React from "react";
import { Input, Select, InputNumber, Button, Form } from 'antd';
//import { CreditCardOutlined } from '@ant-design/icons';
import '../estilos/buyStyle.css';
import {  Col, DatePicker, Drawer, Row, Space } from 'antd';
import { useState } from 'react';

const onChange = (value) => {
  console.log('changed', value);
};

const { Option } = Select;

const FormModalBuy = () => {
  const [openBuy, setOpenBuy] = useState(false);
  const showDrawerBuy = () => {
    setOpenBuy(true);
  };
  const onCloseBuy = () => {
    setOpenBuy(false);
  };
  const [openRent, setOpenRent] = useState(false);
  const showDrawerRent = () => {
    setOpenRent(true);
  };
  const onCloseRent = () => {
    setOpenRent(false);
  };
  return (
    <>
    {/* Boton de formulario de compra */}
      <InputNumber className="input-number" min={1} max={10} defaultValue={3} onChange={onChange} /> <p>Cantidad</p> 
      <Button className='button-buy' onClick={showDrawerBuy}>
        Comprar
      </Button>
      <Drawer
        title="Datos personales de Compra"
        width={720}
        onClose={onCloseBuy}
        open={openBuy}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onCloseBuy}>Cancel</Button>
            <Button onClick={onCloseBuy} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={10}>
              <Form.Item
                name="name"
                label="Nombres:"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please type your name" />
              </Form.Item>
            </Col>
            <Col span={10}>
              <Form.Item
                name="lastName"
                label="Apellidos:"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please type your last name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="birthdate"
                label="Fecha de nacimiento"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Space direction="vertical" size={12}>
                <DatePicker  />
                </Space>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the approver',
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>

      {/** Botton de alquiler  */}
      <Button className='button-rent' onClick={showDrawerRent}>
        Alquilar
      </Button>
      <Drawer
        title="Datos personales de Alquiler"
        width={720}
        onClose={onCloseRent}
        open={openRent}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onCloseRent}>Cancel</Button>
            <Button onClick={onCloseRent} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter user name',
                  },
                ]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[
                  {
                    required: true,
                    message: 'Please enter url',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[
                  {
                    required: true,
                    message: 'Please select an owner',
                  },
                ]}
              >
                <Select placeholder="Please select an owner">
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the type',
                  },
                ]}
              >
                <Select placeholder="Please choose the type">
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the approver',
                  },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  {
                    required: true,
                    message: 'Please choose the dateTime',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{
                    width: '100%',
                  }}
                  getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
}

export default FormModalBuy;