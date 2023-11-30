import React from 'react';
import './Nav.css';
function Nav(){
      
    const body=document.getElementById('body')

    const card =document.getElementsByClassName('container')
    // const card =document .getElementsByClassName('card')
    const btn1=document.getElementsByClassName('btn1')
    
    console.log(btn1)
    var flag=true
     
    function handler(){

        if (flag){
          body.style.backgroundColor='black'
          card[0].childNodes[0].style.backgroundColor='black'
          card[0].childNodes[0].style.color='white'
          card[0].childNodes[1].style.backgroundColor='black'
          card[0].childNodes[1].style.color='white'
          card[0].childNodes[2].style.backgroundColor='black'
          card[0].childNodes[2].style.color='white'
          btn1[0].innerHTML='Normal Mode'

        }

        else{
          body.style.backgroundColor='white'
          card[0].childNodes[0].style.backgroundColor='white'
          card[0].childNodes[0].style.color='black'
          card[0].childNodes[1].style.backgroundColor='white'
          card[0].childNodes[1].style.color='black'
          card[0].childNodes[2].style.backgroundColor='white'
          card[0].childNodes[2].style.color='black'
          btn1[0].innerHTML='DarkMode'

        }

        flag=!flag
         
      
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

     <button className='btn1' id='btn2' onClick={handler} >Dark Mode</button>

       </div>

       
      
       </>
    )
}

export default Nav;