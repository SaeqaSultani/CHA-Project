import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';

const AddEmployeePop = ({ toggle, AddEmployee }) => {
  const saveData = (values) => {
    const {
      id, name, job, age, address, managerId,
    } = values;
    AddEmployee(id, name, job, age, address, managerId);
    toggle();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>AddEmployee</h2>
        <Form onFinish={saveData}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Job"
            name="job"
            rules={[{ required: true, message: 'Please enter a job' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please enter an age' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please enter an address' }]}
          >
            <Input />
          </Form.Item>
          <button type="submit">Save</button>
          <button type="button" onClick={toggle}>Cancel</button>
        </Form>
      </div>
    </div>
  );
};

AddEmployeePop.propTypes = {
  toggle: PropTypes.func.isRequired,
  AddEmployee: PropTypes.func.isRequired,
};

export default AddEmployeePop;
