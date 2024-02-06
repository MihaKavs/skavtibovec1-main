import React from 'react'
import './Filters.css'
function Filters() {
    return (
        <div className='filters-container'>
            <div className='dropdown-container'>
                <ul className='dropdown'>
                    <p className='dropdown-text'>Izberite leto</p>
                    <li className='dropdown-element'>2024</li>
                    <li className='dropdown-element'>2023</li>
                    <li className='dropdown-element'>2022</li>
                    <li className='dropdown-element'>2021</li>
                    <li className='dropdown-element'>2020</li>
                    <li className='dropdown-element'>2019</li>
                    <li className='dropdown-element'>2018</li>
                </ul>
            </div>
            <div className='dropdown-container'>
                <ul className='dropdown'>
                <p className='dropdown-text'>Izberite vejo</p>
                    <li className='dropdown-element'>BB</li>
                    <li className='dropdown-element'>IV</li>
                    <li className='dropdown-element'>Klan</li>
                    <li className='dropdown-element'>SKVO</li>
                    <li className='dropdown-element'>Steg</li>
                    <li className='dropdown-element'>Vsi</li>
                </ul>
            </div>
        </div>
    )
}

export default Filters