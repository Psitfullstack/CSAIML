import React from 'react';
import './Nav.css';
function Nav(){
      
    const body=document.getElementById('body')

    const card =document.getElementsByClassName('container')
    
     
    function handler(){
          body.style.backgroundColor='black'
          card[0].firstChild.style.backgroundColor='black'
          card[0].firstChild.style.color='white'
    }

    return(
       <>
       
       <div className="container1">
       <nav>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Service</a></li>
        </ul>
       </nav>

     <button className='btn1' onClick={handler} >Dark Mode</button>

       </div>

       
      
       </>
    )
}

export default Nav;