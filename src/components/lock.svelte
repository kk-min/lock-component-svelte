<script lang="ts">
	import { onMount } from 'svelte';
	let secret: String;
	let open: boolean;

	function randomNumber(max: number, min: number): number {
		return Math.random() * (max - min) + min;
	}

	function generateSecret(length: number): String {
		let result: String = '';
		let numbers: number[] = Array.from(Array(length).keys());
		while (numbers.length > 0) {
			let randomIndex: number = randomNumber(0, numbers.length);
			result += String(numbers[randomIndex]);
			numbers.splice(randomIndex, 1);
		}
		return result;
	}

	onMount(() => {
		secret = generateSecret(4);
	});
</script>
