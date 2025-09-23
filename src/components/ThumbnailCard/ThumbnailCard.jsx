import React from 'react';
import './ThumbnailCard.css'

function ThumbnailCard({title, thumbnailUrl, youtubeUrl, spotifyUrl, pdfUrl, coloringBookUrl}) {
    return (
        <div className="thumbnail-card">
            <div className="thumbnail-wrapper">
                <img src={thumbnailUrl} alt={title} className="thumbnail-image"/>
            </div>
            <div className="thumbnail-buttons">
                 {coloringBookUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={coloringBookUrl}>
                        <button type="button">
                            <img src="/assets/downloads-btn.png" alt="Download" className="downloads-btn-image" />
                        </button>
                    </a>
                )}

                {youtubeUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={youtubeUrl}>
                        <button type="button">📺</button>
                    </a>
                )}

                {spotifyUrl && (
                    <a target="_blank" rel="noopener noreferrer" href={spotifyUrl}>
                        <button type="button">🎧</button>
                    </a>
                )}

                {pdfUrl && (
                    <a className="pdf-button" target="_blank" rel="noopener noreferrer" href={pdfUrl}>
                        <button type="button">📖</button>
                    </a>
                )}
            </div>
        </div>
)
    ;
}

export default ThumbnailCard;