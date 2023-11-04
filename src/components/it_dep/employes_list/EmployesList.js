import React from 'react';
import { Table } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';

const EmployesList = ({ employees, deleteEmployee, managerId }) => {
  const filEmp = employees ? employees.filter((employee) => employee.managerId === managerId) : [];

  const renderDeleteButton = (record) => (
    <DeleteFilled
      style={{ fontSize: '16px', color: '#FF0000' }}
      onClick={() => deleteEmployee(record)}
    />
  );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Job',
      dataIndex: 'job',
      key: 'job',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: renderDeleteButton,
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={filEmp}
        pagination={false}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

EmployesList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    managerId: PropTypes.number.isRequired,
  })).isRequired,
  deleteEmployee: PropTypes.func.isRequired,
  managerId: PropTypes.number.isRequired,
};

export default EmployesList;
