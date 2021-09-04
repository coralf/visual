import { Table as AntdTable } from 'antd';
import { title } from 'process';
import React from 'react';

interface Props {}

const Table = (props: Props) => {
  const columns = [
    { title: 'id', dataIndex: 'id' },
    { title: 'name', dataIndex: 'name' },
  ];

  return (
    <div>
      <AntdTable columns={columns} {...props}></AntdTable>
    </div>
  );
};

export default Table;
