import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    //console.log(video);
    return (
        <li className="list-group-item" onClick={()=>{onVideoSelect(video)}}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="video-item" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media title">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );

}

export default VideoListItem;