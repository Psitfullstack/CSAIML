import React from 'react';
import './Home.css'
import Card from './Card'

function Home() {
     
     const obj1={img:'./pic1.png'}
     const obj2={img:'./pic2.png'}
     const obj3={img:'./pic3.png'}
     
    return (
        <>
            <div className="container">
              <Card {...obj1} />
              <Card {...obj2} />
              <Card {...obj3} />
            </div>

        </>
    )
}

export default Home;