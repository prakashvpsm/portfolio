import React from 'react'
import Link from 'next/link'

import { menus } from '../../utils/menus'

export default function SideBar() {
  return (
    <div className='xs:hidden'>
        <div className='flex flex-col gap-7 mt-0'>
            {
                menus.map((d, i) => {
                    return <div className='bg-gray-100/20 p-3 rounded-full shadow-2xl shadow-white'>
                            <Link href={`#${d.path}`}>
                                <div>
                                    <img className='w-5 h-5' src={`icons/${d.path}.png`} />
                                </div>
                            </Link>
                    </div>
                })
            }
        </div>
    </div>
  )
}
