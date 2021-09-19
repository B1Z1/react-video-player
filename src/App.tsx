import React, { useState } from 'react';
import 'App.scss';
import { Video } from 'video/Video';

function App() {
	const [videoSrc, setVideoSrc] = useState('https://static.pexels.com/lib/videos/free-videos.mp4');

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setVideoSrc('https://vod-progressive.akamaized.net/exp=1632099023~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2217%2F22%2F561086934%2F2653419879.mp4~hmac=1e487429d5d052157c77cd11129c8294d0f158bfa1f0fa80578737c4e852ee99/vimeo-prod-skyfire-std-us/01/2217/22/561086934/2653419879.mp4?filename=pexels-rodnae-productions-8279531.mp4');
	// 	}, 5000);
	// }, []);

	return (
		<div className="app">
			<Video className="app__video dupa"
				   toolPlayButton={play => <button onClick={play}>Dupcio</button>}
				   src={videoSrc}/>
		</div>
	);
}

export default App;
