import React from 'react';
import { Row, Col, Slider, Input, Button, Form } from 'antd';

const FormItem = Form.Item

const RsaComponent = ({ 
    onCheck,
    onReset,
    form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue,
    },
}) => {

    const { TextArea } = Input;

    const handleSubmit = () => {
        const data = {
            ...getFieldsValue()
        }
        onCheck(data.publicKey, data.privateKey);
    }
    
    return (
        <div>
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xl={{ span:12 }} md={{ span:12 }} sm={{ span:24 }} xs={{ span:24 }}>
                        <FormItem label="公钥">
                        {getFieldDecorator("publicKey", {
                            rules: [
                                {
                                    required: true,
                                }
                            ],
                        })(<TextArea rows={15} />)}
                        </FormItem>
                    </Col>
                    <Col xl={{ span:12 }} md={{ span:12 }} sm={{ span:24 }} xs={{ span:24 }}>
                        <FormItem label="私钥">
                        {getFieldDecorator("privateKey", {
                            rules: [
                                {
                                    required: true,
                                }
                            ],
                        })(<TextArea rows={15} />)}
                        </FormItem>
                    </Col>
                </Row>
                <Row style={{ marginTop:'20' }} gutter={64}>
                    <Col span={2} offset={10} >
                        <Button type="primary" onClick={handleSubmit}>校验</Button>
                    </Col>
                    <Col span={2}>
                        <Button onClick={onReset}>重置</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default Form.create()(RsaComponent)
