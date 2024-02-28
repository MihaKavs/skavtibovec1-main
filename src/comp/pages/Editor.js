import React, { useState } from 'react'
import PostCreator from '../PostCreator'
import EditorNavbar from '../EditorNavbar'
import VoditeljiEditor from '../VoditeljiEditor';
import ONasEditor from '../ONasEditor';
function Editor() {
    const [displayedComponent, setDisplayedComponent] = useState(null);

    const handleListElementClick = (component) => {
        setDisplayedComponent(component);
    };
    return (
        <>
            <EditorNavbar profile="Kavsič" onListElementClick={handleListElementClick}></EditorNavbar>
            {displayedComponent === 'PostCreator' && <PostCreator />}
            {displayedComponent === 'VoditeljEditor' && <VoditeljiEditor />}
            {displayedComponent === 'ONasEditor' && <ONasEditor />}
        </>
    )
}

export default Editor