import React from 'react';
import './ThumbnailCard.css'

function ThumbnailCard({title, thumbnailUrl, image, youtubeUrl, spotifyUrl, pdfUrl}) {

    const svgBlob = new Blob([image], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    return (
        <div className="thumbnail-card">
            <div className="thumbnail-wrapper">
                {!image && thumbnailUrl &&
                <img src={thumbnailUrl} alt={title} className="thumbnail-image"/>}
                {image && url &&
                    <img src={url} alt={title} className="thumbnail-image"/>}

            </div>
            <div className="thumbnail-buttons">
                 {image && url && (
                    <a download rel="noopener noreferrer" href={url}>
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