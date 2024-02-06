import React from 'react'
import './Veje.css'
function Veje() {
    return (
        <div className='veje-container'>
            <div className='veje-title'>
                <div className='veje-title-text'>
                    <h2>Spoznajte veje</h2>
                </div>
            </div>
            <div className='veja-list-container'>
                <div className='veja-container'>
                    <h3 className='veja-name'>Bobri in bobrovke</h3>
                    <div className='veja-logo'>
                        <img src='BB.jpg' alt="" className='veja-img'></img>
                    </div>
                    <p className='veja-opis'>Od 6 do 7 let</p>
                </div>
                <div className='veja-container'>
                    <h3 className='veja-name'>Volčiči in volkuljice</h3>
                    <div className='veja-logo'>
                        <img src='BB.jpg' alt="" className='veja-img'></img>
                    </div>
                    <p className='veja-opis'>Od 8 do 10 let</p>
                </div>
                <div className='veja-container'>
                    <h3 className='veja-name'>Izvidniki in izvidnice</h3>
                    <div className='veja-logo'>
                        <img src='BB.jpg' alt="" className='veja-img'></img>
                    </div>
                    <p className='veja-opis'>Od 11 do 16 let</p>
                </div>
                <div className='veja-container'>
                    <h3 className='veja-name'>Klan</h3>
                    <div className='veja-logo'>
                        <img src='BB.jpg' alt="" className='veja-img'></img>
                    </div>
                    <p className='veja-opis'>Od 17 do 21 let</p>
                </div>
                <div className='veja-container'>
                    <h3 className='veja-name'>SKVO</h3>
                    <div className='veja-logo'>
                        <img src='BB.jpg' alt="" className='veja-img'></img>
                    </div>
                    <p className='veja-opis'>21+</p>
                </div>
            </div>
            
        </div>
    )
}

export default Veje