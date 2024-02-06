import React from 'react'
import './Editor.css'
function PostCreator() {
    return (
        <div className='PostCreator-container'>
            <form>
                <div className='PostCreator-title'>
                    <input type='text' className='title-input' placeholder='vnesi naslov'></input>
                </div>
                <div className='PostCreator-location'>
                    <input type='text' className='title-input' placeholder='vnesi lokacijo'></input>
                </div>
                <div className='PostCreator-description'>
                    <textarea className='description input' placeholder='opis'></textarea>
                </div>
                <div className='PostCreator-location'>
                    <input type='file' multiple className='title-input' placeholder='vnesi slike'></input>
                </div>
                
            </form>
        </div>
    )
}

export default PostCreator