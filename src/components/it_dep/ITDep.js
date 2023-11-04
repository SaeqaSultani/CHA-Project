import React, { useState, useEffect } from 'react';
import './ITDep.css';
import { Button } from 'antd';
import AddManagerPop from './add_manager_pop/AddManagerPop';
import ManagersList from './managers_list/ManagersList';

const getDatafromLS = () => {
  const data = localStorage.getItem('managers');
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const ITDep = () => {
  const [seen, setSeen] = useState(false);
  const [managers, setManagers] = useState(getDatafromLS());

  useEffect(() => {
    localStorage.setItem('managers', JSON.stringify(managers));
  }, [managers]);

  const togglePop = () => {
    setSeen(!seen);
  };

  const deleteManagers = (managerToDelete) => {
    const filteredManagers = managers.filter((manager) => manager.id !== managerToDelete.id);
    setManagers(filteredManagers);
  };

  const addManager = (manager) => {
    const copy = [...managers];
    const newManager = {
      id: copy.length > 0 ? copy[copy.length - 1].id + 1 : 1,
      name: manager,
    };
    copy.push(newManager);
    setManagers(copy);
  };

  return (
    <div className="center">
      <div>
        <ManagersList managers={managers} deleteManagers={deleteManagers} key={managers.id} />
      </div>
      <div className="btn">
        <Button onClick={togglePop}>
          Add Manager
        </Button>
        {seen && <AddManagerPop AddManager={addManager} toggle={togglePop} />}
      </div>
    </div>
  );
};

export default ITDep;
