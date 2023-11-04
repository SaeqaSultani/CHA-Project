import React from 'react';
import PropTypes from 'prop-types';
import ManagersListItem from '../managers_list_item/ManagersListItem';

const ManagersList = ({ managers, deleteManagers }) => (
  <div>
    {managers.map((manager) => (
      <ManagersListItem manager={manager} key={manager.id} deleteManagers={deleteManagers} />
    ))}
  </div>
);

ManagersList.propTypes = {
  managers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // Add other required properties of a manager object here
    }),
  ).isRequired,
  deleteManagers: PropTypes.func.isRequired,
};

export default ManagersList;
