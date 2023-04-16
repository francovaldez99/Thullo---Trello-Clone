import React from 'react'
import Columna from './Columna/Columna';
import {DragDropContext} from "react-beautiful-dnd"
import {useDispatch,useSelector} from "react-redux"
import { updateColumnAndTaskIds, updateColumnOrder, updateTaskIds } from '../../redux/slices/tableroSlice';


function Tablero() {
   
    const initialData=useSelector((state)=>state.tablero)
    const dispatch=useDispatch()
    const onDragEnd = (result) => {
      const { destination, source, draggableId, type } = result;
    
      // Si no hay un destino, o el destino es el mismo que el origen, no hacemos nada
      if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
        return;
      }
    
      // Si el tipo es column, actualizamos el orden de las columnas
      if (type === 'column') {
        const newColumnOrder = Array.from(initialData.columnOrder);
        newColumnOrder.splice(source.index, 1);
        newColumnOrder.splice(destination.index, 0, draggableId);
    
        dispatch(updateColumnOrder(newColumnOrder));
        return;
      }
    
      // Si el tipo es task, actualizamos la posición de la tarea en su columna
      const start = initialData.columns[source.droppableId];
      const finish = initialData.columns[destination.droppableId];
    
      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
    
        dispatch(updateTaskIds({ columnId: start.id, taskIds: newTaskIds }));
      } else {
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
          ...start,
          taskIds: startTaskIds,
        };
    
        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
          ...finish,
          taskIds: finishTaskIds,
        };
    
        dispatch(updateColumnAndTaskIds({ start: newStart, finish: newFinish }));
      }
    }
  return (
    <DragDropContext onDragEnd={onDragEnd} >
        {<div className='flex'>
         {   initialData.columnOrder.map(columnId => {
              const column = initialData.columns[columnId];
              const tasks = column.taskIds.map(taskId => initialData.tasks[taskId]);
              
              return <Columna key={column.id} column={column} tasks={tasks} />;})}
              </div>
        }

    </DragDropContext>
  )
}

export default Tablero