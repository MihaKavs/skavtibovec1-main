import React, { useState } from 'react';
import axios from 'axios';
import './Editor.css'
function VoditeljiEditor(props) {
    const [file, setFile] = useState();
    const [uploadedFile, setUploadedFile] = useState();
    const [error, setError] = useState();

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response.data);
                setUploadedFile(response.data.file);
            })
            .catch((error) => {
                console.error("Error uploading file: ", error);
                setError(error);
            });
    }
    
    return (
        <div className='container'>
            <div className='list-conatiner-voditelji'>
                <ul className='voditelji-list'>
                    <li className='list-element-voditelji'>Miha Kavs</li>
                    <li className='list-element-voditelji'>Nikita Kavs</li>
                </ul>
            </div>
            <div className='PostCreator-container voditelj-config'>
                <form onSubmit={handleSubmit} className='voditelj-editor-forum'>
                    <div className='PostCreator-title'>
                        <input type='text' className='title-input' required placeholder='Vnesi ime'></input>
                    </div>
                    <div className='PostCreator-title'>
                        <input type='text' className='title-input' required placeholder='Vnesi skavtsko ime'></input>
                    </div>
                    <div className='PostCreator-description'>
                        <textarea className='description input' required placeholder='opis'></textarea>
                    </div>
                    <div className='PostCreator-title'>
                        <input type='file' multiple className='title-input' required placeholder='vnesi slike' onChange={handleChange}></input>
                    </div>
                    <div className='submit-buttons'>
                        <input type='submit' className='edit-button edit' value={'Uredi'}></input>
                        <input type='submit' className='edit-button remove' value={'Izbriši'}></input>
                        <input type='submit' className='edit-button add' value={'Dodaj'}></input>
                    </div>
                </form>
                {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
                {error && <p>Error uploading file: {error.message}</p>}
            </div>
        </div>
    )
}

export default VoditeljiEditor