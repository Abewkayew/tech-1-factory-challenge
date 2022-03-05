
import React, { useState } from 'react'
import { MembershipData } from '.'
import { Home } from '..'

import { Modal, Button, Form, Input, message, Space, Select } from 'antd'

export const Membership = () => {

    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false)

    const [form] = Form.useForm();
    const { Option } = Select;

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };


    const showModal = () => {
        setVisible(true)
    }

    const handleCancel = () => {
        setVisible(false)
    }


    const handleOk = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setVisible(false)
        }, 3000)
    }



    return (
        <Home>

            <Modal
                visible={visible}
                title="Add new Membership cost"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" className='py-1 px-4 bg-purple-800 text-white'
                        loading={loading} onClick={handleOk}>
                        Done
                    </Button>,
                ]}
                className='modal_style'
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    className='form_style'
                >
                    <Form.Item
                        name="title"
                        label="Membership title"
                    >
                        <Input placeholder="example" />
                    </Form.Item>

                    <div className='w-full flex'>
                        <Form.Item
                            name="billingType"
                            label="Billing Type"
                            className='w-2/3 select_style'
                        >
                            <Select placeholder="Select">
                                <Option value="ONETIME">ONE TIME</Option>
                                <Option value="PER_2_YEARLY">PER 2 YEARS</Option>
                                <Option value="PER_2_MONTHLY">PER 3 MONTHLY</Option>
                                <Option value="PER_1_MONTH">PER 1 MONTH</Option>
                            </Select>

                        </Form.Item>

                        <Form.Item
                            name="perYear"
                            label="Per"
                            className='w-1/2 ml-5'
                        >
                            <Input placeholder="2 years" className='ml-5' />
                        </Form.Item>
                    </div>

                    <Form.Item
                        name="price"
                        label="Price"
                    >
                        <Input addonBefore="$" placeholder="00.00" />
                    </Form.Item>

                    <Form.Item
                        name="status"
                        label="Status"
                    // rules={[{ required: true }]}
                    >

                        <Select placeholder="Select" defaultValue="Active">
                            <Option value="Active">Active</Option>
                            <Option value="Deactive">Deactive</Option>
                        </Select>
                    </Form.Item>
                </Form>

            </Modal>

            <div className='flex flex-col mt-4'>
                <div className='flex justify-between p-2 bg-gray-100'>
                    <h3>Memberships</h3>
                    <button
                        onClick={showModal}
                        className='py-1 px-4 bg-purple-800 text-white'>
                        Add New
                    </button>
                </div>

                {/* display membership data */}
                <div className='mt-5'>

                    <MembershipData />

                </div>
            </div>
        </Home>
    )
}

