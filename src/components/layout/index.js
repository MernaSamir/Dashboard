import React from 'react'
import Header from './commonHeader'
import './style.css'
const Layout=({children})=> {
    
  return (
    <div className='layout'>
        <Header></Header>
        <main className="content">{children}</main>

        
    </div>
  )
}
export default Layout
