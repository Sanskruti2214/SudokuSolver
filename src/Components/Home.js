import React, { useState, useEffect } from 'react';
import './Home.css';
import Hero from './Hero.js';
import searchimg from '../Images/searchimg.jpg';
export default function Home() {
    let twoDarray = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    let [cellValues, setCellValues] = useState(twoDarray);

    const handleInputChange = (row, col, event) => {
        const newValue = event.target.value;
        const newCellValues = cellValues.map((row) => [...row]);
        newCellValues[row][col] = parseInt(newValue, 10) || 0;
        setCellValues(newCellValues);

    };

    // Function to solve the Sudoku puzzle
    
    const checksolveSudoku = () => {
        try {
            let grid = [...cellValues.map(row => [...row])];
            if (solveSudoku(grid, 0, 0)) {
                setCellValues(grid);
            } else {
                throw new Error('No solution exists for the given Sudoku puzzle.');
            }
        } catch (error) {
            console.error(error.message);
            alert(error.message);
            setCellValues(twoDarray);
        }
    };
    let N = 9;
    // Helper function for solving Sudoku
    const solveSudoku = (grid, row, col) => {
        if (row === N - 1 && col === N)
            return true;

        if (col === N) {
            row++;
            col = 0;
        }
        if (grid[row][col] !== 0)
            return solveSudoku(grid, row, col + 1);

        for (let num = 1; num < 10; num++) {

            if (isSafe(grid, row, col, num)) {
                grid[row][col] = num;

                if (solveSudoku(grid, row, col + 1))
                    return true;

                grid[row][col] = 0;
            }
        }
        return false;
    };

    // Function to check if placing a number in a given cell is valid
    const isSafe = (grid, row, col, num) => {

        for (let x = 0; x <= 8; x++) {
            if (grid[row][x] === num) {
                return false;
            }
        }
        for (let x = 0; x <= 8; x++)
            if (grid[x][col] === num)
                return false;


        let startRow = row - row % 3,
            startCol = col - col % 3;

        for (let i = 0; i < 3; i++)
            for (let j = 0; j < 3; j++)
                if (grid[i + startRow][j + startCol] === num)
                    return false;

        return true;
    };

    const handleOutput = () => {
        // alert('output clicked');
        checksolveSudoku();
        // console.log('Current cellValues:', cellValues);
    };
    const handleReset = () => {
        setCellValues(twoDarray);
    };
    return (
        <>
            <Hero />
            <table>
                <tbody>
                    {cellValues.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((value, colIndex) => (
                                <td key={colIndex}>
                                    <input
                                       type='number'
                                       value={value === 0 ? '' : value}
                                        // type='text'
                                        // value={value}
                                        onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='operation'>
                <button onClick={handleOutput}>SOLVE</button>
                <button onClick={handleReset}>RESET</button>
            </div>
            <div className='instruction'>
                <h1>Sudoku Solver</h1>
                <img className='show' src={searchimg} alt='show'/>
                <ol type="a" className='text'>
                    <li>Click on the cell to input a number.</li>
                    <li>Input a single digit from 1 to 9 into the cell. </li>
                    <li>If a cell already contains multiple digits, consider only the starting digit of the number.</li>
                    <li>Exercise caution to avoid entering incorrect Sudoku numbers.</li>
                    <li>After completing the entire Sudoku grid, click the "SOLVE" button to obtain the solution.</li>
                    <li>To reset the Sudoku puzzle, use the "RESET" button.</li>
                </ol>
            </div>
        </>
    );
};