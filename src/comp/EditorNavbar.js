import React, { useState } from 'react';
import './Editor.css';

function EditorNavbar({ onListElementClick, profile }) {
  const handleListElementClick = (index) => {
    switch (index) {
      case 'PostCreator':
        onListElementClick('PostCreator');
        break; // Add break to prevent fall-through
      case 'VoditeljEditor':
        onListElementClick('VoditeljEditor');
        break; // Add break to prevent fall-through
      default:
        break;
    }
  };
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    console.log(click)
  }
  //TODO: nared vse editorje
  return (
    <div className='navbar-editor-container'>
      <div className='profile'>{profile}</div>
      <div className='list-parrent' onClick={handleClick}>
              <span class="material-symbols-outlined burger-menu" >
        menu
        </span>
        <ul className='list-conatiner' style={{
          left: click ? '-100%' : '0',
        }} >
          <li className='list-element' onClick={() => handleListElementClick('PostCreator')}>
            Dodaj Post
          </li>
          <li className='list-element' onClick={() => handleListElementClick('VoditeljEditor')}>
            Edit voditeljev
          </li>
        </ul>
      </div>
      <div className='login-container'>
        <span className="material-symbols-outlined login">
          login
        </span>
      </div>
    </div>
  );
}
export default EditorNavbar