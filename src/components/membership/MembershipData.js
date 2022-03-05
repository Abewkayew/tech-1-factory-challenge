import React, { useState } from 'react'


import { Table, Modal, Button } from 'antd'

import { classNames } from '.'

export const MembershipData = () => {



    const membershipData = [
        {
            id: 1,
            types: "Billing Type",
            option_1: "One time",
            option_2: "per 2 yearly",
            option_3: "per 3 monthly",
            enterprise: "per 1 month"
        },
        {
            id: 2,
            types: "price",
            option_1: "$123",
            option_2: "$123",
            option_3: "$123",
            enterprise: "$123"
        },
        {
            id: 3,
            types: "Status",
            option_1: "Active",
            option_2: "Deactive",
            option_3: "Active",
            enterprise: "Active"
        }
    ]




    const EnterpriseStatus = ({ value }) => {
        const status = value ? value.toLowerCase() : "unknown";

        return (
            <span
                className={
                    classNames(
                        "px-3 py-1 uppercase leading-wide font-bold text-xs shadow-sm",
                        status.startsWith("active") ? " text-green-800 outline outline-offset-1 outline-1" : null,
                        status.startsWith("deactive") ? " text-red-800 outline outline-offset-1 outline-1" : null
                    )
                }
            >
                {status}
            </span>
        );
    };



    const columns = [
        {
            title: 'Membership Types',
            dataIndex: 'types',
            key: '0',
        },
        {
            title: 'Option 1',
            dataIndex: 'option_1',
            key: '1',
            render: (option_1) => <EnterpriseStatus value={option_1} />,
        },
        {
            title: 'Option 2',
            dataIndex: 'option_2',
            key: '2',
            render: (option_2) => <EnterpriseStatus value={option_2} />,
        },
        {
            title: 'Option 3',
            dataIndex: 'option_3',
            key: '3',
            render: (option_3) => <EnterpriseStatus value={option_3} />,
        },
        {
            title: 'Enterprises',
            dataIndex: 'enterprise',
            key: '4',
            render: (enterprise) => <EnterpriseStatus value={enterprise} />,
        }
    ];



    return (
        <div>
            <Table dataSource={membershipData} columns={columns} pagination={false} rowKey="id" />
        </div>
    )
}

