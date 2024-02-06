import React from 'react'
import './Editor.css'
function EditorNavbar({ onListElementClick }) {
    const handleListElementClick = (index) => {
        switch (index) {
            case 'PostCreator':
                onListElementClick('PostCreator');

        }
        onListElementClick('PostCreator');
    };
    //todo: create links for all edistors
    return (
        <div className='navbar-editor-container'>
            <div className='profile'>bra</div>
            <ul className='list-conatiner'>
                <li className='list-element' onClick={handleListElementClick}>Dodaj Post</li>
                <li className='list-element' onClick={handleListElementClick}>Dodaj Post</li>
            </ul>
            <div className='login-container'>
                <span class="material-symbols-outlined login">
                    login
                </span>
            </div>
        </div>
    )
}

export default EditorNavbar