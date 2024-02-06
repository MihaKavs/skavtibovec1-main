import React, { useState } from 'react'
import PostCreator from '../PostCreator'
import EditorNavbar from '../EditorNavbar'
function Editor() {
    const [displayedComponent, setDisplayedComponent] = useState(null);

    const handleListElementClick = (component) => {
        setDisplayedComponent(component);
    };
    return (
        <>
            <EditorNavbar onListElementClick={handleListElementClick}></EditorNavbar>
            {displayedComponent === 'PostCreator' && <PostCreator />}
            
        </>
    )
}

export default Editor