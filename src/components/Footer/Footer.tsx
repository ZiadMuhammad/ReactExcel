import React from 'react';
import { useDispatch } from 'react-redux';
import { addRow, addColumn } from './../../redux/actions';

const Footer: React.FC = () => {
    const dispatch = useDispatch();

    const handleAddRow = () => {
      // Dispatch an action to add a new row to the table
      dispatch(addRow());
    };
  
    const handleAddColumn = () => {
      // Dispatch an action to add a new column to the table
      dispatch(addColumn());
    };
  

  return (
    <div>
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleAddColumn}>Add Column</button>
    </div>
  );
};

export default Footer;
