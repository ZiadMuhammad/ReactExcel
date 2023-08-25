// redux/actions.ts
import { createAction } from '@reduxjs/toolkit';

export interface RootState {
    // Define your Redux state structure here
    excel: {
      rows: string[][];
      columns: string[];
      // other state properties
    };
}
  

export const addRow = createAction('ADD_ROW');
export const addColumn = createAction('ADD_COLUMN');
export const updateCellValue = createAction<{ rowIndex: number; columnIndex: number; value: string }>('UPDATE_CELL_VALUE');
