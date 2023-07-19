import React from 'react'
import './BrowseCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {faStar as staricon} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BrowseCard = ({ podcastSeries, lightDark, addToSubscriptions, subscriptions }) => {

    // const [icon, setIcon] = useState(null)

    if (!podcastSeries)
        return null;

    const shortDescription = () => {
        if (podcastSeries.description)
            return podcastSeries.description.split(' ').slice(0, 18).join(' ')
        return "Description not available"
    }

    const result = () => {
        
        return subscriptions.find(p => p.uuid === podcastSeries.uuid)

    }
    if(!result())
        console.log(result())


    return (
        <>
            <div className={`BrowseCard ${lightDark}`}>

            <Link to={`/episodes/${podcastSeries.uuid}`}>  <img src={podcastSeries.imageUrl} alt={`cover image for ${podcastSeries.name}`} /></Link>

                <div className='cardMain'>
                    <div>
                        <h4>{podcastSeries.name}</h4>
                        <p>{podcastSeries.totalEpisodesCount} Episodes</p>
                        <p>{shortDescription()}...</p>
                    </div>

                    <div>
                        <span id="icon" onClick={(event) => {
                            event.stopPropagation()
                            addToSubscriptions(podcastSeries)
                        }}><FontAwesomeIcon icon={faStar}/></span>
                    </div>
                </div>

            </div>
            <hr />
        </>
    )
}

export default BrowseCard