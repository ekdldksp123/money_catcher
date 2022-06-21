/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ContainerCenter } from '@/layout/ContainerGroup';
import React from 'react';
import 'antd/dist/antd.css';
import { Table, Typography } from 'antd';
import { Title } from '@/molecules/FormGroup';

const IncomesView:React.FC = () => {

    const { Text } = Typography;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Borrow',
        dataIndex: 'borrow',
      },
      {
        title: 'Repayment',
        dataIndex: 'repayment',
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        borrow: 10,
        repayment: 33,
      },
      {
        key: '2',
        name: 'Jim Green',
        borrow: 100,
        repayment: 0,
      },
      {
        key: '3',
        name: 'Joe Black',
        borrow: 10,
        repayment: 10,
      },
      {
        key: '4',
        name: 'Jim Red',
        borrow: 75,
        repayment: 45,
      },
    ];
    const fixedColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        fixed: true,
        width: 100,
      },
      {
        title: 'Description',
        dataIndex: 'description',
      },
    ];
    const fixedData = [];
    
    for (let i = 0; i < 20; i += 1) {
      fixedData.push({
        key: i,
        name: ['Light', 'Bamboo', 'Little'][i % 3],
        description: 'Everything that has a beginning, has an end.',
      });
    }
    return (
        <ContainerCenter>
            <Title css={title}>지출 관리</Title>
            <Table
                style={{ width: '80%'}}
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                summary={(pageData) => {
                    let totalBorrow = 0;
                    let totalRepayment = 0;
                    pageData.forEach(({ borrow, repayment }) => {
                    totalBorrow += borrow;
                    totalRepayment += repayment;
                    });
                    return (
                    <>
                        <Table.Summary.Row>
                        <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
                        <Table.Summary.Cell index={1}>
                            <Text type="danger">{totalBorrow}</Text>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={2}>
                            <Text>{totalRepayment}</Text>
                        </Table.Summary.Cell>
                        </Table.Summary.Row>
                        <Table.Summary.Row>
                        <Table.Summary.Cell index={0}>Balance</Table.Summary.Cell>
                        <Table.Summary.Cell index={1} colSpan={2}>
                            <Text type="danger">{totalBorrow - totalRepayment}</Text>
                        </Table.Summary.Cell>
                        </Table.Summary.Row>
                    </>
                    );
                }}
                />
        </ContainerCenter>
    );
};

export default IncomesView;

const title = css`
    width: 80% !important;
    float: left;
`

