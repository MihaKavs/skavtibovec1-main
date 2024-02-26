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
                    <input type='text' className='title-input' required placeholder='vnesi naslov'></input>
                </div>
                <div className='PostCreator-title'>
                    <input type='text' className='title-input' required placeholder='vnesi lokacijo'></input>
                </div>
                <div className='PostCreator-description'>
                    <textarea className='description input'  required placeholder='opis'></textarea>
                </div>
                <div className='PostCreator-title'>
                    <input type='file' multiple className='title-input' required placeholder='vnesi slike' onChange={handleChange}></input>
                </div>
                <div className='PostCreator-title radio-buttons'>
                    <input type='radio' className='veja-input' name="veje" value="BB"></input> <label className='veja-text'>BB</label>
                    <input type='radio' className='veja-input' name="veje" value="IV"></input> <label className='veja-text'>IV</label>
                    <input type='radio' className='veja-input' name="veje" value="Klan"></input> <label className='veja-text'>Klan</label>
                    <input type='radio' className='veja-input' name="veje" value="SKVO"></input> <label className='veja-text'>Skvo</label>
                    <input type='radio' className='veja-input' name="veje" value="Steg"></input> <label className='veja-text'>Steg</label>
                </div>
                <input type='submit'   value={'objavi'} className='post-submit' name='submit'></input>
            </form>
            {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
            {error && <p>Error uploading file: {error.message}</p>}
        </div>
    )
}

export default PostCreator