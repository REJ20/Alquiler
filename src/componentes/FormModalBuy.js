import React from "react";
import { Input, Select, Button, Form } from 'antd';
//import { CreditCardOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import {  Col, DatePicker, Drawer, Row, Space } from 'antd';
import { useState } from 'react';

/*const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  /*
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  /*const onFinish = (values) => {
    console.log(values);
  };
  const validateCreditCardNumber = (value) => {
    // Expresión regular para validar el número de tarjeta de crédito
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/;
    if (!regex.test(value)) {
      return Promise.reject('Por favor ingrese un número de tarjeta de crédito válido');
    }
    return Promise.resolve();
  };
*/
  const { Option } = Select;

const FormModalBuy = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
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

/*const FormBuy = () => (
    <div className='FormCompra-container'>
        <h2>Formulario de Compra</h2>
        <div>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                style={{
                maxWidth: 600,
                }}
                validateMessages={validateMessages}
            >
            <Form.Item
            name={['user', 'nombre']}
            label="Nombre"
            rules={[{ required: true, },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            name={['user', 'apellido']}
            label="Apellido"
            rules={[{ required: true, },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
                {
                    required: true,
                type: 'email',
                },
            ]}
            >
            <Input />
            </Form.Item>
            <Form.Item label="Select">
            <Select>
            <Select.Option value="cash">Cash</Select.Option>
            <Select.Option value="tarjeta">Tarjeta</Select.Option>
            </Select>
            </Form.Item>
            
            <Form.Item
            name={['user', 'credit-card']}
            label='N° tarjeta'
            rules={[{ required: true, },]}
            >
            <Input
                prefix={<CreditCardOutlined />}
                placeholder="Número de tarjeta de crédito"
                type="credit-card"
                onBlur={(e) => validateCreditCardNumber(e.target.value)}
            />
            </Form.Item>

            <Form.Item
            name={['user', 'edad']}
            label="Edad"
            rules={[
                {
                type: 'number',
                min: 18,
                max: 99,
                },
            ]}
            >
            <InputNumber />
            </Form.Item>
            <Form.Item
            wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
            }}
            >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            <Button type="default" htmlType="reset">
                Cancelar
            </Button>
            </Form.Item>
        </Form>
    </div>
  </div>
)*/

export default FormModalBuy;