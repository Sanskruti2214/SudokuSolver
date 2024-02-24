![Image of Splash Screen](https://github.com/Sanskruti2214/SudokuSolver/blob/main/Screenshot%20(172).png)
![Image of actual Sudoku Solver](https://github.com/Sanskruti2214/SudokuSolver/blob/main/Screenshot%20(174).png)
# Sudoku Solver

## Overview

This project implements a Sudoku solver using the backtracking algorithm. Sudoku is a popular number-placement puzzle game 
where the goal is to fill a 9x9 grid with digits so that each column, each row, and each of the nine 3x3 subgrids contain all of the digits from 1 to 9.

## Algorithm

The Sudoku solver follows these steps:

1. **Empty Cell Detection:**
   - Start from the top-left corner of the puzzle.
   - Find the first empty (unassigned) cell. If no empty cell is found, the puzzle is solved.

2. **Number Assignment:**
   - Try assigning a number (from 1 to 9) to the empty cell.

3. **Check Validity:**
   - Check whether the assigned number conflicts with the Sudoku rules.
   - If the number is valid, move to the next empty cell.

4. **Recursion:**
   - If the number is not valid, backtrack and try the next number.
   - Continue this process until a solution is found or it's determined that no solution exists.

5. **Base Case:**
   - The algorithm stops when all cells are filled, and the Sudoku puzzle is solved.





