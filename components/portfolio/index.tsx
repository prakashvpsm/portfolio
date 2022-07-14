import React from 'react'
import Home from './home'
import Skills from './skills'
import Projects from './projects'
import Contacts from './contact'

export default function Portfolio() {
  return (
    <div className='w-full'>
      <Home />
      <div className='flex flex-col gap-20'>
        <Skills />
        <Projects />
        <Contacts />
      </div>

    </div>
  )
}
