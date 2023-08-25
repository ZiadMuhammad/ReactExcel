import { createReducer } from '@reduxjs/toolkit';
import { addRow, addColumn, updateCellValue } from './actions';

interface State {
  rows: string[][];
  columns: string[];
}

const initialState: State = {
  rows: [['']], // Initialize with an empty cell
  columns: ['A'], // Initialize with a single column
};

export const excelReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addRow, (state) => {
      // Add a new row to the table
      state.rows.push(Array(state.columns.length).fill(''));
    })
    .addCase(addColumn, (state) => {
      // Add a new column to the table
      const nextColumn = String.fromCharCode(state.columns.length + 65);
      state.columns.push(nextColumn);
      state.rows.forEach((row) => row.push(''));
    })
    .addCase(updateCellValue, (state, action) => {
      // Update the cell value
      const { rowIndex, columnIndex, value } = action.payload;
      state.rows[rowIndex][columnIndex] = value;
    });
});
