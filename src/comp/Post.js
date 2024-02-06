import React, { useState } from 'react'


function Post(props) {
    const [isLiked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!isLiked);
    };

    const [isOverlayOpen, setOverlayOpen] = useState(false);


    const handleImageClick = () => {
        document.body.style.overflow = 'hidden';
        setOverlayOpen(true);
    };

    const handleCloseOverlay = () => {
        document.body.style.overflow = 'auto';
        setOverlayOpen(false);
    };
    return (
        <>
            <li className='post'>
                <div className='post-name' >
                    <figure className='post-name-img-wrap' data-category={props.label}>
                        <img src={props.src} className='post-name-img' onClick={handleImageClick} alt='slika'></img>
                    </figure>
                    <div className='post-name-info'>
                        <div className='post-name-location'>{props.location}</div>
                        <h5 className='post-name-info-text'>{props.text}</h5>
                        <div className='post-name-engagament'>
                            <div className='engagament-likes'><span onClick={handleClick} id="like" className={`material-symbols-outlined like ${isLiked ? 'liked' : ''}`}>
                                favorite
                            </span></div>
                            <div className='engagament-comments'>
                                <span className="material-symbols-outlined like">
                                    comment
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            {isOverlayOpen && (
                <div className='overlay'>
                    <button className='moveButton lButton'>
                        <span className="material-symbols-outlined">
                            chevron_left
                        </span>
                    </button>
                    <div className='overlay-content'>

                        {/* Add logic to display all images in the post */}
                        {/* For example, you can map over an array of image URLs */}
                        {/* and display them in a similar way as your original Post component */}

                    </div>
                    <button className='moveButton rButton'>
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </button>
                    <span className="material-symbols-outlined closeOverlay" onClick={handleCloseOverlay}>
                        close
                    </span>
                </div>
            )}
        </>
    )
}

export default Post

