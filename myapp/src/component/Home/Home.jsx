import React, { useCallback, useState } from 'react'
// import Counter from './Hooks';

function Home({ onClick }) {

    const [data,setData]=useState('')

    const handleClick = useCallback((message) => {
        setData(`Hello ,${message}`)
    }, [])
    return (
        <>

            <h6>{data}</h6>
            <button onClick={handleClick}>useCallback</button>

            {/* <Counter /> */}

        </>
    )
}

export default Home;