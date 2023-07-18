import React from 'react'
import './PlayListCard.css'



const PlayListCard = ({ episode, deleteFromPlaylist, lightDark, defaultImgUrl }) => {
    const handleClick = () => {
        deleteFromPlaylist(episode)
     }

 
    return (
        <div>
        
            <div className={`PlaylistCard ${lightDark}`}>
                <img src={episode.imageUrl ? episode.imageUrl : defaultImgUrl} alt={`image of ${episode.name}`} />
                <h4> {episode.name} </h4>
                <button onClick={handleClick}> delete </button>
            </div>
        </div>
    )
}

export default PlayListCard