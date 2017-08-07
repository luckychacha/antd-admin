import React from 'react';
import { Row, Col, Slider, Input, Button, Form, message } from 'antd';
import { connect } from 'dva';
import PropTypes from 'prop-types'

const FormItem = Form.Item

const RsaComponent = ({ 
    onCheck,
    onReset,
    resetShowResult,
    form: {
        getFieldDecorator,
        validateFields,
        getFieldsValue,
        resetFields
    },
    publicKey,
    privateKey,
    checkLoading,
    showCheckResult, 
    checkResult, 
}) => {

    if (showCheckResult == true && publicKey != '' && privateKey != '') {
      checkResult ? message.success("恭喜，配对成功！") : message.error("很抱歉，配对失败！")
      resetShowResult()
    }

    const { TextArea } = Input;

    const handleReset = () => {
      onReset();
      resetFields();
    }

    const handleSubmit = () => {
      validateFields((error) => {
        if (error) {
          return
        }
        const data = {
            ...getFieldsValue()
        }
        onCheck(data.publicKey, data.privateKey)
      })
    }
    
    return (
        <div>
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col xl={{ span:12 }} md={{ span:12 }} sm={{ span:24 }} xs={{ span:24 }}>
                        <FormItem label="公钥">
                        {getFieldDecorator("publicKey", {
                            rules: [{
                                    required: true,
                                    message: "请输入公钥"
                                }],
                            initialValue: publicKey,
                          })(<TextArea rows={15} placeholder="请输入公钥，包含换行" spellCheck="false" />)}
                        </FormItem>
                    </Col>
                    <Col xl={{ span:12 }} md={{ span:12 }} sm={{ span:24 }} xs={{ span:24 }}>
                        <FormItem label="私钥">
                        {getFieldDecorator("privateKey", {
                            rules: [{
                                    required: true,
                                    message: "请输入私钥"
                                }],
                            initialValue: privateKey,
                         })(<TextArea rows={15}  placeholder="请输入私钥，包含换行" spellCheck="false" />)}
                        </FormItem>
                    </Col>
                </Row>
                <Row style={{ marginTop:'20' }} gutter={64}>
                    <Col span={2} offset={10} >
                        <Button type="primary" onClick={handleSubmit} loading={checkLoading}>校验</Button>
                    </Col>
                    <Col span={2}>
                        <Button onClick={handleReset}>重置</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

RsaComponent.propTypes = {
    onCheck: PropTypes.func,
    onReset: PropTypes.func,
    resetShowResult: PropTypes.func,
    checkLoading: PropTypes.func,
    publicKey: PropTypes.string,
    privateKey: PropTypes.string,
    showCheckResult: PropTypes.bool,
    checkResult: PropTypes.bool,
}

export default Form.create()(RsaComponent)