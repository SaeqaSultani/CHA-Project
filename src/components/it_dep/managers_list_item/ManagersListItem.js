import { Collapse, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import './ManagersListItem.css';
import PropTypes from 'prop-types';
import AddEmployeePop from '../add_employee_pop/AddEmployeePop';
import EmployesList from '../employes_list/EmployesList';

const { Panel } = Collapse;

const getDataFromLS = () => {
  const data = localStorage.getItem('employes');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const ManagersListItem = ({ manager, deleteManagers }) => {
  const [seen, setSeen] = useState(false);
  const [employes, setEmployes] = useState(getDataFromLS());

  useEffect(() => {
    localStorage.setItem('employes', JSON.stringify(employes));
  }, [employes]);

  const DeleteEmployee = (employeeToDelete) => {
    const filteredEmployes = employes.filter((employee) => employee !== employeeToDelete);
    setEmployes(filteredEmployes);
  };

  const togglePop = () => {
    setSeen(!seen);
  };

  const AddEmployee = (id, name, job, age, address) => {
    const copy = [...employes];
    const newEmployee = {
      id: copy.length > 0 ? copy[copy.length - 1].id + 1 : 1,
      name,
      job,
      age,
      address,
      managerId: manager.id,
    };
    copy.push(newEmployee);
    setEmployes(copy);
  };

  const genExtra = () => (
    <DeleteOutlined
      style={{ fontSize: '16px', color: '#FF0000' }}
      onClick={(event) => {
        deleteManagers(manager);
        event.stopPropagation();
      }}
    />
  );

  return (
    <Collapse className="container">
      <Panel header={manager.name} key={manager.id} extra={genExtra()}>
        <div className="item">
          <div className="div-btn">
            <h3>Employees List</h3>
            <Button type="primary" onClick={togglePop}>
              Add Employee
            </Button>
            {seen && <AddEmployeePop AddEmployee={AddEmployee} toggle={togglePop} />}
          </div>
          <EmployesList
            employees={employes}
            managerId={manager.id}
            deleteEmployee={DeleteEmployee}
          />
        </div>
      </Panel>
    </Collapse>
  );
};

ManagersListItem.propTypes = {
  manager: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  deleteManagers: PropTypes.func.isRequired,
};

export default ManagersListItem;
