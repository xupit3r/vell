import { defineStore } from 'pinia'

interface CellRule {
  (left: Cell, me: Cell, right: Cell): Cell
}

type Cell = {
  id: number,
  color: number,
  rules: CellRule[]
}

const rule1 = (l: Cell, r: Cell) => l.color || r.color;

const cellBag = (n: number) => {
  const cells = [];

  for (let i = 0; i < n; i++) {
    cells.push({
      id: i,
      color: 1,
      rules: [rule1]
    });
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
    step () {
      this.stepNumber++;
    }
  },
})