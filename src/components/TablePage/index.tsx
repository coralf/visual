import { Table } from 'antd';
import { title } from 'process';
import React from 'react';

interface Props {}

const TablePage = (props: Props) => {
  const columns = [
    { title: 'id', dataIndex: 'id' },
    { title: 'name', dataIndex: 'name' },
  ];

  return (
    <div>
      <Table columns={columns} {...props}></Table>
    </div>
  );
};

export default TablePage;
