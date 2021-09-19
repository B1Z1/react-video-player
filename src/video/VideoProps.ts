import { HTMLAttributes, MouseEventHandler } from 'react';

export interface VideoProps extends HTMLAttributes<HTMLDivElement> {
	src: string;

	initPlayButton?: JSX.Element;
	toolPlayButton?: (toolPlayButtonClick: MouseEventHandler<HTMLElement>) => JSX.Element;
}
