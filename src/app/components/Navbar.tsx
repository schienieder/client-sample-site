import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full h-auto py-5 flex justify-around items-center">
            <h4 className="text-2xl font-bold cursor-pointer tracking-wider">LOGO</h4>
            <div className="flex gap-x-12 capitalize">
                <p className="text-sm cursor-pointer hover:underline tracking-wider">ABOUT</p>
                <p className="text-sm cursor-pointer hover:underline tracking-wider">SERVICE</p>
                <p className="text-sm cursor-pointer hover:underline tracking-wider">PRODUCT</p>
                <p className="text-sm cursor-pointer hover:underline tracking-wider">REVIEWS</p>
            </div>
            <button className="border border-blue-600 bg-transaparent text-blue-600 hover:bg-blue-600 hover:text-white font-medium w-48 py-2 rounded-3xl tracking-wider">Contact Us</button>
        </nav>
    )
}

export default Navbar