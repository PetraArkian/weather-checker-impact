import React from 'react'

function ZipForm(props){
  return (
    <div id="zip-form">
    <input placeholder='Enter your Zip Code' />
    <button onClick={(event)=>{props.setZip(event.target.previousSibling.value)}}>Go</button>
    </div>
  )
}


export default ZipForm
