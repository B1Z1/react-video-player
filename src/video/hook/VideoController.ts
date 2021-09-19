export interface VideoController {
	playing: boolean;

	init: (videoElement: HTMLVideoElement) => void;
	play: () => void;
	pause: () => void;
	togglePlay: () => void;
	reset: () => void;
}
