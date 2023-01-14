import React,{useState} from "react";


function Add(props){
    let [tittle,settittle]=useState(" ");
    let [note,setnote]=useState(" ");
    let submit=(e)=>{
           e.preventDefault();
           if(!tittle||!note){
            alert("Tittle or Note cannot be blank")
           }
           else{
           props.addNote(tittle,note)
           settittle("")
           setnote(" ")}
    }
     return <div className="container my-3">
        <h3>Add Note</h3>
                <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="tittle" className="from-label">Tittle</label>
    <input type="text" className="form-control" id="tittle" aria-describedby="emailhelp" onChange={(e)=>{
        settittle(e.target.value)
    }} placeholder="Enter Tittle"   value={tittle}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlTextarea1">Note</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Start Write Note" value={note}  onChange={(e)=>{
         setnote(e.target.value)
    }}>Write Note</textarea>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add</button>
</form> 
     
     </div>
}
export default Add;