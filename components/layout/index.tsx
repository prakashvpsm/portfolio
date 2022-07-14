import React from 'react'
import SideBar from '../sidebar'

export default function Layout(props: any) {
    return (
        <div className='flex w-full'>
            <div className='w-32 xs:hidden sm:hidden bg-primary h-screen fixed  flex flex-col items-center justify-center'>
                <SideBar />
            </div>
            <div className='bg-bgp w-full ml-32 xs:m-0'>
                {props.children}
            </div>
        </div>
    )
}
