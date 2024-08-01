import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import Sidebar from './siderbar/Sidebar'
import Content from '../pages/Content'
import { ActiveContext } from '../context/ActiveContext';

const Index = () => {


  const [active, setActive] = useState(false);

  const handleSideBar = () => {
    setActive(!active);
  }

  return (
    <ActiveContext.Provider value={{active, setActive, handleSideBar}}>
      <section className="app-container">
        <Sidebar />
        <div className={`${!active ? 'hidden md:block mx-3 md:me-3 my-3 main-content' : 'mx-3 md:me-3 my-3 main-content'}`}>
          <Navbar />
          <Content />
        </div>
      </section>
    </ActiveContext.Provider>
  )
}

export default Index
