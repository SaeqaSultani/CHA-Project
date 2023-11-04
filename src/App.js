import { Tabs } from 'antd';
import React from 'react';
import ITDep from './components/it_dep/ITDep';

const items = [
  {
    key: '1',
    label: 'IT Dep',
    children: <ITDep />,
  },
  {
    key: '2',
    label: 'Finance Dep',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'HR Dep',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Marketing Dep',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '5',
    label: 'Operation Dep',
    children: 'Content of Tab Pane 3',
  },
];
const App = () => <Tabs defaultActiveKey="1" centered items={items} />;

export default App;
