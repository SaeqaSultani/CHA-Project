import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import './AddManagerPop.css';

const AddManagerPop = ({ toggle, AddManager }) => {
  const saveName = (values) => {
    const { name } = values;
    AddManager(name);
    toggle();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>AddManager</h2>
        <Form onFinish={saveName}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter a name' }]}
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

AddManagerPop.propTypes = {
  toggle: PropTypes.func.isRequired,
  AddManager: PropTypes.func.isRequired,
};

export default AddManagerPop;
