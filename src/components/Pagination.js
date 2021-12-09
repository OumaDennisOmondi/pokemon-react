import React from 'react'

export default function Pagination({goToNextPage, goToPrevPage}) {
    return (
        <div>
            <button disabled ={goToPrevPage? false:true} onClick={goToPrevPage}>Prev</button>
            <button disabled ={ goToNextPage? false:true} onClick={goToNextPage}>Next</button>
        </div>
    )
}
