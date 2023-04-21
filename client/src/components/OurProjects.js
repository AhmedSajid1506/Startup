import React from 'react'
import '../css/ourProjects.css'

const OurProjects = () => {
  return (
    <div className='text-center my-4'>
        <h2 className='f2 f-primary'>Our Projects</h2>
        <div className='row justify-content-between'>
            <p className='col-2 px-3 py-2 filter bg-main'>All</p>
            <p className='col-2 px-3 py-2 filter'>Websites</p>
            <p className='col-2 px-3 py-2 filter'>GFX Designs</p>
            <p className='col-2 px-3 py-2 filter'>Video Edits</p>
            <p className='col-2 px-3 py-2 filter'>Contents</p>
        </div>
    </div>
  )
}

export default OurProjects