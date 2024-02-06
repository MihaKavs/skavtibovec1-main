import React, { useState } from 'react'
import './Editor.css'
import axios from 'axios'
function PostCreator() {
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
        <div className='PostCreator-container'>
            <form onSubmit={handleSubmit}>
                <div className='PostCreator-title'>
                    <input type='text' className='title-input' placeholder='vnesi naslov'></input>
                </div>
                <div className='PostCreator-title'>
                    <input type='text' className='title-input' placeholder='vnesi lokacijo'></input>
                </div>
                <div className='PostCreator-description'>
                    <textarea className='description input' placeholder='opis'></textarea>
                </div>
                <div className='PostCreator-title'>
                    <input type='file' multiple className='title-input' placeholder='vnesi slike' onChange={handleChange}></input>
                </div>
            </form>
            {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
            {error && <p>Error uploading file: {error.message}</p>}
        </div>
    )
}

export default PostCreator