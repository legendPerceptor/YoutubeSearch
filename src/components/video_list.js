import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = ({videos,onVideoSelect})=>{
    if(!videos){
        return <div>loading</div>;
    }
    const videoItem= videos.map((video)=>{
        return (<VideoListItem 
            key={video.etag} 
            video={video} 
            onVideoSelect={onVideoSelect}
            />);
    });
    return (
        <ul className="col-md-4 list-group">
           {videoItem}
        </ul>
    );
};

export default VideoList;