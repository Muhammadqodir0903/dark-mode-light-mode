import React, { useContext } from 'react'
import '../Header/Header.css'
import { Context } from '../../Context/Context'

function Footer() {
    const {mode}= useContext(Context)
  return (
    <div className={mode ? "header" : "header2"}>
        <div className="container">
            <div className={mode ? "text" : "text2"}>
               <center> inomov@gmail.com !nomoov</center>
                
            </div>
        </div>
    </div>
  )
}

export default Footer