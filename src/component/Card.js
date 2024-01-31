import React from 'react'
// import { ReactPropTypes } from 'react'
import './Car.css'
export default function card() {
  return (
    <div>
      <div className="container">
        <h1>ADD NOTES</h1>
        <input className='inp' id='in1' type="text" placeholder='Title'/>
        <textarea name="" id="" cols="30" rows="4" placeholder=' Take a Note...'></textarea>
        <button>ADD NOTES</button>
      </div>
    </div>
  )
}
