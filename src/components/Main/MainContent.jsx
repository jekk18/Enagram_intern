import React from 'react'

const MainContent = ({ children, activeSide }) => {
  return (
    <main className={`main-content ${activeSide ? 'active-main-content' : ''}`}>
        { children }
    </main>
  )
}

export default MainContent