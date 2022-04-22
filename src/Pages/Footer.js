import React from 'react'

export default function Footer() {

  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className='min-h-screen' style={{backgroundColor : '#2C4250' , color : 'white'}}>
       <div className='pt-3 flex justify-center'>
         <p><span className='underline text-blue-500'>Privacy Policy</span> | © {year} HighRadius Corporation . All rights reserved</p>
       </div>
    </div>
  )
}
