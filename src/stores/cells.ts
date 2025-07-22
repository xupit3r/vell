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
      steps: [cellBag(10)],
    }
  },
  actions: {
    toggle (id: number) {
      const idx = this.steps[this.stepNumber].findIndex(c => c.id === id);

      if (idx > -1) {
        this.steps[this.stepNumber][idx].color = this.steps[this.stepNumber][idx].color ? 0 : 1
      }
    },
    step () {
      this.steps[++this.stepNumber] = [...this.steps[this.stepNumber - 1]];
      this.steps[this.stepNumber].forEach((cell, i, cells) => {
        const left = cells[i - 1];
        const right = cells[i + 1];

        cell.previousColor = cell.color;
        cell.color = (
          (cell.previousColor &&
           (left || {}).previousColor && 
           (right || {}).color
          ) ? 1 : 0
        );
      });
    }
  },
})