import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Column 1',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Column 2',
      taskIds: ['task-4', 'task-5'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Column 3',
      taskIds: [],
    },
  },
  tasks: {
    'task-1': { id: 'task-1', content: 'Task 1' },
    'task-2': { id: 'task-2', content: 'Task 2' },
    'task-3': { id: 'task-3', content: 'Task 3' },
    'task-4': { id: 'task-4', content: 'Task 4' },
    'task-5': { id: 'task-5', content: 'Task 5' },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}

export const tableroSlice = createSlice({
  name: "tablero",
  initialState,
  reducers: {
    updateColumnOrder(state, action) {
      state.columnOrder = action.payload;
    },
    updateTaskIds: (state, action) => {
      const { columnId, taskIds } = action.payload;
      state.columns[columnId].taskIds = taskIds;
    },
    updateColumnAndTaskIds: (state, action) => {
      const { start, finish } = action.payload;
      state.columns[start.id] = start;
      state.columns[finish.id] = finish;
    },
  }
});

export const { updateColumnOrder, updateTaskIds, updateColumnAndTaskIds } = tableroSlice.actions;

export default tableroSlice.reducer;