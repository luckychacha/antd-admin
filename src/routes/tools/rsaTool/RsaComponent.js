import React from 'react';
import { Row, Col, Slider, Input, Button } from 'antd';

const RsaComponent = ({ onCheck, onReset }) => {

    const { TextArea } = Input;

    return (
        <div>
            <Row gutter={16}>
                <Col xl={{ span:12 }} md={{ span:6 }}>
                    公钥：
                    <TextArea rows={15} />
                </Col>
                <Col xl={{ span:12 }} md={{ span:6 }}>
                    私钥：
                    <TextArea rows={15} />
                </Col>
            </Row>
            <Row style={{ marginTop:'20' }} gutter={64}>
                <Col span={2} offset={10} >
                    <Button type="primary" onClick={onCheck}>校验</Button>
                </Col>
                <Col span={2}>
                    <Button onClick={onReset}>重置</Button>
                </Col>
            </Row>
        </div>
    )
}

export default RsaComponent
