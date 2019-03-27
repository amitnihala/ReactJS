import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
	const renderedList = videos.map(video =>{
		return (<div className="item">
			<VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
			</div>
			);
	});
	return(
		//<div className="ui relaxed divided list">
		<div className="ui vertical sidebar menu right overlay visible">
		{renderedList}
		</div>
	);
}

export default VideoList;