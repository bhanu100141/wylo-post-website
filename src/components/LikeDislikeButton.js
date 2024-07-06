import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

function LikeDislikeButton() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <div className="like-dislike-buttons">
            <button onClick={handleLike}>
                <AiOutlineLike />  {likes}
            </button>
            <button onClick={handleDislike}>
                <AiOutlineDislike /> {dislikes}
            </button>
        </div>
    );
}

export default LikeDislikeButton;
