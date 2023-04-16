import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
function Card(props) {
  return (
    <Draggable  draggableId={props.task.id} index={props.index} >
      {(provided)=>{
       return (
         <div
         className='card   bg-base-100 shadow-xl p-3 mb-3'
         {...provided.draggableProps}
         {...provided.dragHandleProps}
     
         ref={provided.innerRef}
         >{props.task.content}</div>

       )
       
         
        }
      }
    </Draggable>
  )
}

export default Card