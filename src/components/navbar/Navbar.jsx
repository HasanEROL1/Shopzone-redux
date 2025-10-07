import React from 'react'
import NavbarLeft from './NavbarItems/NavbarLeft'
import NavbarRight from './NavbarItems/NavbarRight'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <NavbarLeft />
            <NavbarRight />

        </div>
    )
}

export default Navbar