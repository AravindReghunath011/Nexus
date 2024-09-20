import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
  return (
    <div className='w-[50vw] h-full '>
        <Image className='w-full h-[95vh] rounded-2xl' src={'/project.jpg'} width={10000} height={10000} />
        <h4 className='text-3xl py-4'>Princess Polly</h4> 
        <div className='flex '>  
            <span className='px-4 py-1 border  rounded-full'>Developed</span>
            <span className='px-4 py-1 border rounded-full'>Deployed</span>
            <span className='px-4 py-1 border rounded-full'>Designed</span>
        </div>

    </div>
  )
}

export default ProjectCard