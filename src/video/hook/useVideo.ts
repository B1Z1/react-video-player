import { useCallback, useState } from 'react';
import { VideoController } from 'video/hook/VideoController';

export function useVideo(): VideoController {
	const [videoElement, setVideoElement] = useState<HTMLVideoElement>();
	const [playing, setPlayState] = useState<boolean>(false);

	const init = useCallback(videoElement => {
		setVideoElement(videoElement);
	}, [setVideoElement]);
	const play = useCallback(() => {
		if (!videoElement) return;

		videoElement.play();
		setPlayState(true);
	}, [videoElement, setPlayState]);
	const pause = useCallback(() => {
		if (!videoElement) return;

		videoElement.pause();
		setPlayState(false);
	}, [videoElement, setPlayState]);
	const togglePlay = useCallback(() => {
		playing ? pause() : play();
	}, [playing, play, pause]);
	const reset = useCallback(() => {
		pause();
	}, [pause]);

	return {
		playing: playing,

		init: init,
		play: play,
		pause: pause,
		togglePlay: togglePlay,
		reset: reset
	};
}
