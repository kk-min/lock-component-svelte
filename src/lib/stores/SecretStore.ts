import { readable } from 'svelte/store';

function generateSecret(length: number): string {
	let result = '';
	const numbers: number[] = Array.from(Array(length).keys());
	while (numbers.length > 0) {
		const randomIndex: number = Math.floor(Math.random() * numbers.length);
		result += String(numbers[randomIndex]);
		numbers.splice(randomIndex, 1);
	}
	return result;
}

export const secret = readable('', function start(set) {
	set(generateSecret(4));
	return function stop() {
		set('');
	};
});
