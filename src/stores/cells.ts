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
    step () {
      this.steps[this.stepNumber + 1] = cellBag(10);
      this.steps[this.stepNumber + 1].forEach((cell, i) => {
        const left = this.steps[this.stepNumber][i - 1];
        const right = this.steps[this.stepNumber][i + 1];

        if (!left) {
          cell.color = 0;
        } else if (!right) {
          cell.color = 0;
        } else {
          cell.color = !left.color || !right.color ? 0 : 1;
        }
      });
      this.stepNumber++;
    }
  },
})