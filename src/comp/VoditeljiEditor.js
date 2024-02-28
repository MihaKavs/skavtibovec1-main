import React, { useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    const [voditelji, setVoditelji] = useState([
        { id: '1', name: 'Miha Kavs' },
        { id: '2', name: 'Nikita Kavs' },
        { id: '3', name: 'Alex Copato'}
    ]); 

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(voditelji);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setVoditelji(items);
    };
    function editVoditelj(){
        //TODO: handle edit
    }
    function removeVoditelj(){
        //TODO: handle removal
    }
    function addVoditelj(){
        //TODO: handle addition
    }
    return (
        <div className='container'>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <ul className='voditelji-list' {...provided.droppableProps} ref={provided.innerRef}>
                        <p className='sort-text'>Razvrsti voditelje po vrsti</p>
                            {voditelji.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided) => (
                                        <li
                                            className='list-element-voditelji'
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                        >
                                            {item.name}
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            <button className='list-submitt'>Zamenjaj zaporedje</button>
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
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
                        <input type='file' multiple className='title-input fileselector' required placeholder='vnesi slike' onChange={handleChange}></input>
                    </div>
                    <div className='submit-buttons'>
                        <input type='submit' onClick={editVoditelj} className='edit-button edit' value={'Uredi'}></input>
                        <input type='submit' onClick={removeVoditelj} className='edit-button remove' value={'Izbriši'}></input>
                        <input type='submit' onClick={addVoditelj} className='edit-button add' value={'Dodaj'}></input>
                    </div>
                </form>
                {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
                {error && <p>Error uploading file: {error.message}</p>}
            </div>
        </div>
    )
}

export default VoditeljiEditor