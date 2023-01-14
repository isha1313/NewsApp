import React from "react";
import TodoItem from "./TodoItem";

function Todo(props){
     

      return <div className="container my-3">
        <h3>Your Note List</h3>
        {props.noteitem.length===0?"No Notes":
        props.noteitem.map((e)=>{
        return <><TodoItem  notes={e} key={e.sno} onDelete={props.onDelete}  /><hr/></>
        })
        }
      </div>
};
export default Todo;