import React from 'react'
import Header from './commonHeader'
import './style.css'
const Layout=(props)=> {    
  return (
    <div className='layout'>
        <Header nodes={props.nodes}/>
        <main className="content">{props.children}</main>

        
    </div>
  )
}
export default Layout
