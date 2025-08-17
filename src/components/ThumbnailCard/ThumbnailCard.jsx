import React from 'react';
import './ThumbnailCard.css'

function ThumbnailCard({adventure, index}) {
    return (
        <div className="thumbnail-card" key={adventure.id || index}>
            <div className="thumbnail-wrapper">
                <img
                    src={adventure.thumbnailUrl}
                    alt={adventure.title}
                    className="thumbnail-image"
                />
            </div>
            <div className="thumbnail-buttons">
                {adventure.youtubeUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={adventure.youtubeUrl}>
                        <button>📺</button>
                    </a>
                )}

                {adventure.spotifyUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={adventure.spotifyUrl}>
                        <button>🎧</button>
                    </a>
                )}

                <a className={'pdf-button'} target="_blank" rel="noopener noreferrer" href="#">
                    <button>📖</button>
                </a>
            </div>
        </div>
    );
}

export default ThumbnailCard;