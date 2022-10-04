import React from 'react'
import loading from './loading.gif'
function Spinner() {
    return (
        <div className='text-center'>
            <img className='my-2' src={loading} alt="Loading" />
        </div>
    )
}

export default Spinner