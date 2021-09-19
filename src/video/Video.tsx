import { FC, MouseEvent, MouseEventHandler, PropsWithChildren, useCallback, useRef, useState } from 'react';
import { VideoProps } from 'video/VideoProps';
import playIcon from 'video/play-solid.svg';
import 'video/Video.scss';
import { cssClassesConverter } from 'utils/css-classes/cssClassesConverter';
import { VIDEO_WRAPPER_CLASS } from 'video/CssClassConsts';
import { useVideo } from 'video/hook/useVideo';

function getDefaultPlayButton(onClickEvent?: MouseEventHandler<HTMLElement>): JSX.Element {
	return (
		<button onClick={onClickEvent} className="video__play-button">
			<img src={playIcon} className="video__play-icon" alt="Play icon"/>
		</button>
	);
}

export const Video: FC<VideoProps> = (props: PropsWithChildren<VideoProps>) => {
	const { initPlayButton, toolPlayButton } = props;
	const videoRef = useRef<HTMLVideoElement>(null);
	const [initialLoad, setInitialLoadState] = useState<boolean>(true);
	const { playing, init, togglePlay, reset } = useVideo();

	const videoLoad = useCallback(() => {
		if (initialLoad) {
			init(videoRef.current as HTMLVideoElement);
			setInitialLoadState(false);
		} else {
			reset();
		}
	}, [videoRef, init, reset, initialLoad, setInitialLoadState]);
	const backdropClick = useCallback(() => {
		togglePlay();
	}, [togglePlay]);
	const toolPlayButtonClick = useCallback((event: MouseEvent<HTMLElement>) => {
		event.stopPropagation();

		togglePlay();
	}, [togglePlay]);

	const wrapperClasses = props.className
		? cssClassesConverter(VIDEO_WRAPPER_CLASS, props.className)
		: VIDEO_WRAPPER_CLASS;

	const actualInitPlayButton = initPlayButton ?? getDefaultPlayButton();
	const actualToolPlayButton = toolPlayButton
		? toolPlayButton(toolPlayButtonClick)
		: getDefaultPlayButton(toolPlayButtonClick);

	return (
		<div className={wrapperClasses}>
			<video ref={videoRef}
				   src={props.src}
				   onCanPlay={videoLoad}
				   className="video__element"/>

			<div onClick={backdropClick} className="video__controls-wrapper">
				{!playing && actualInitPlayButton}

				<div className="video__tools">
					{actualToolPlayButton}
				</div>
			</div>
		</div>
	);
};
