import React from 'react';
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

  //TODO: nared vse editorje
  return (
    <div className='navbar-editor-container'>
      <div className='profile'>{profile}</div>
      <ul className='list-conatiner'>
        <li className='list-element' onClick={() => handleListElementClick('PostCreator')}>
          Dodaj Post
        </li>
        <li className='list-element' onClick={() => handleListElementClick('VoditeljEditor')}>
          Edit voditeljev
        </li>
      </ul>
      <div className='login-container'>
        <span className="material-symbols-outlined login">
          login
        </span>
      </div>
    </div>
  );
}
export default EditorNavbar