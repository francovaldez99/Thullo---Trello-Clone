import React from 'react'
import Card from '../Card/Card'
import { Droppable } from 'react-beautiful-dnd';
function Columna(props) {
  return (
    
        <div className="card w-96   bg-slate-100 shadow-xl ">
          <h1 className='text-center card-title'>{props.column.title}</h1>
          <div className=' p-1 py-10 '>
            
              <Droppable droppableId={props.column.id}>
                {(provided)=>(
                
                <div
              
                   {...provided.droppableProps}
                   ref={provided.innerRef}>
                      {props.tasks.map((task,index) => (
                        <Card key={task.id} task={task}  index={index}/>
                      ))}
                      {provided.placeholder}
                      
                  </div>
                   )
                }
              </Droppable>
          </div>
        </div>
    
  );
}

export default Columna