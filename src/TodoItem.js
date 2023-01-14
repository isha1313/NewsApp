import React from "react";
function TodoItem({notes,onDelete}){
    return <div className="notes" >
    <h4 className="text-left my-3">{notes.sno} {notes.tittle}</h4>
    <p>{notes.note}</p>
    <button className="btn bt-sm btn-danger" onClick={()=>{onDelete(notes)}}>Delete</button>
    </div>
};
export default TodoItem;