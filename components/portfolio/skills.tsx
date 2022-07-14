import React from 'react'
import { skills } from '../../utils/skills'

export default function Skills() {
  return (
    <div id='skills' className='w-5/6 mx-auto flex flex-col gap-10'>
      <div className='flex flex-col gap-3'>
                <div className='bg-alt  w-5 h-1 rounded-full'></div>
                <div className='font-bold text-3xl'>Skills</div>
                <div className='bg-alt  w-20 h-1 ml-10 rounded-full'></div>

                {/* <div className='bg-gray-300  w-10 h-1'></div> */}
            </div>
        <div className='bg-white shadow-xl px-5 py-16 rounded-lg'>
            <div className='grid grid-cols-6 gap-10 xs:grid-cols-2 sm:grid-cols-2'>
                {
                    skills.map((skill, i) => {
                        return <div className='flex flex-col justify-center items-center gap-2'>
                            <div className='bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full shadow-md'>
                                <img className='w-8 h-8' src={`img/${skill.icons}.${skill.type ==='svg' ? 'svg' : 'png'}`} />
                            </div>
                            <div>
                                {skill.name}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
