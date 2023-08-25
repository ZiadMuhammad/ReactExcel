import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addRow, addColumn, updateCellValue } from './../../redux/actions';

const Table: React.FC = () => {
    const rows = useSelector((state: RootState) => state.excel.rows);
    const columns = useSelector((state: RootState) => state.excel.columns);
    const dispatch = useDispatch();
  
    const handleCellChange = (rowIndex: number, columnIndex: number, value: string) => {
      dispatch(updateCellValue({ rowIndex, columnIndex, value }));
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              {columns.map((col, columnIndex) => (
                <th key={columnIndex}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((_, columnIndex) => (
                  <td key={columnIndex}>
                    <input
                      type="text"
                      value={row[columnIndex]}
                      onChange={(e) => handleCellChange(rowIndex, columnIndex, e.target.value)}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Table;
