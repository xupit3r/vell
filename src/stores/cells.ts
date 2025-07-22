import { defineStore } from 'pinia'

type Cell = {
  id: number,
  previousColor: number,
  color: number
}

const cellBag = (n: number) => {
  const cells = [];

  for (let i = 0; i < n; i++) {
    cells.push({
      id: i,
      previousColor: i === 4 ? 0 : 1,
      color: i === 4 ? 0 : 1
    } as Cell);
  }

  return cells;
}

export const useCellStore = defineStore('cells', {
  state: () => {
    return {
      stepNumber: 0,
      cells: cellBag(10),
    }
  },
  actions: {
    toggle (id: number) {
      const idx = this.cells.findIndex(c => c.id === id);

      if (idx > -1) {
        this.cells[idx].color = this.cells[idx].color ? 0 : 1
      }
    },
    step () {
      this.stepNumber++;
      this.cells.forEach((cell, i, cells) => {
        const left = cells[i - 1];
        const right = cells[i + 1];

        cell.previousColor = cell.color;

        if (i === 0) {
          cell.color = ( 
            right.previousColor && 
            cell.previousColor
            ? 1 
            : 0
          );
        } else if (i === cells.length - 1) {
          cell.color = (
            left.previousColor &&
            cell.previousColor
            ? 1 
            : 0
          );
        } else {
          cell.color = (
            left.previousColor && 
            right.previousColor && 
            cell.previousColor
            ? 1 
            : 0
          );
        }
      });
    }
  },
})