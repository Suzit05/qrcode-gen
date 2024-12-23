import React from 'react'


const Navbar = () => {
    return (
        <div className='w-full border-b border-zinc-700 h-[30%] p-1 flex justify-between  text-xl'>
            <div className='flex items-center gap-4 '>
                <img className='w-[7vw] h-[5vh]' src='https://www.the-qrcode-generator.com/wp-content/themes/tqrcg/img/logo/tqrcg_logo_asset_1.webp' alt="" />
                <h1 className='border-b-2 border-green-400'>Generate</h1>
                <h1>Scan</h1>
                <h1>About QR codes</h1>
            </div>
            <div className='flex items-center gap-4 '>
                <button className='bg-zinc-500 p-1 rounded-md'>Sign in</button>
                <button className='bg-zinc-700 text-white p-1 rounded-md'>Suzit05</button>
            </div>
        </div>
    )
}

export default Navbar