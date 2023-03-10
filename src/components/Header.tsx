import React from 'react'

const Header = () => {
    return (
        <div className='bg-orange-100 flex justify-between p-5'>
            <div className='w-2/6'>
                <a href="/">
                    <img src="" alt="" />
                    <h1 className='text-2xl font-bold'>Apple Shope</h1>
                </a>
            </div>
            <div className='w-2/6 text-center'>
                <input type="text"
                    className=' border-slate-800 border rounded-full bg-orange-50 w-72 px-3 test-bold text-lg text-center'
                />
            </div>
            <div className='w-2/6 text-end space-x-3'>
                <button className='bg-red-200'>change theme</button>
                <select name="leng" id="1"
                    className='bg-transparent cursor-pointer'
                >
                    <option value="value1">ua</option>
                    <option value="value1">uk</option>
                </select>
            </div>
        </div>
    )
}

export default Header
