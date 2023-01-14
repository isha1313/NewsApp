import React ,{useState, useEffect} from'react';
import Header from './Header';
import Todo from './Todos';
import Add from './Add';
/*import About from './About'
import { BrowserRouter as Router,
  Switch,
  Route,
  Link}
   from 'react-router-dom';*/

function App(){
  let initNote;
  if(localStorage.getItem("noteitem")===null){
        initNote=[];
  }
  else{
    initNote=JSON.parse(localStorage.getItem("noteitem"));
  }
  const onDelete=(notes)=>{
      console.log(notes)
      setnote(noteitem.filter((e)=>{
        return e!==notes;
      }))
      localStorage.setItem("noteitem",JSON.stringify(noteitem));
     
  }
 const addNote=(tittle,note)=>{
  let sno;
   if(noteitem.length===0){
    sno=1;
   }
   else{
      sno=noteitem[noteitem.length-1].sno+1;
    }
       const mynote={
        sno:sno,
        tittle:tittle,
        note:note,
       }
       alert("Note save")
       setnote([...noteitem,mynote]);
      
 }
 const [noteitem,setnote]=useState(initNote);
 useEffect(()=>{ localStorage.setItem("noteitem",JSON.stringify(noteitem));
 },[noteitem])
  
 /* return (<>
  <Switch>
  <Header/>
  <Router>
    <Route path='/' render={()=>{
      return (
      <> 
      <Add addNote={addNote}/>
      <Todo  onDelete={onDelete} noteitem={noteitem}/>
      </>)
    }}>
    </Route>
    <Route exact path="/About">
      <About/>
    </Route>
  </Router>
  </Switch>
  </>
);
  }*/

return (<>
          <Header/>
          <Add addNote={addNote}/>
          <Todo  onDelete={onDelete} noteitem={noteitem}/>

</>)

}
export default App;