import React from "react";
function Header(){
 

    return <>
       <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a  className="navbar-brand mb-0 h1" href="/">NoteBook </a>
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span>
  </button>
</nav>

    </>
};

export default Header;
/*
 <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div  className="navbar-nav">
      <a  className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">About</a>
    </div>
  </div>

*/