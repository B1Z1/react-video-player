export function cssClassesConverter(...cssClasses: Array<string>): string {
	return cssClasses.join(' ');
}
