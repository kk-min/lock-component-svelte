<script lang="ts">
	import { userInput } from '$lib/stores/UserStore';

	export let resetToggle: boolean;
	let disabled: boolean = false;

	function reset() {
		userInput.set('');
		resetToggle = !resetToggle;
	}

	function disable() {
		disabled = true;
	}

	function enable() {
		disabled = false;
	}
</script>

<button class="button" on:click={reset} {disabled}>Reset</button>

<style>
	.button {
		margin: 1rem;
		font-size: 1.5rem;
		background-color: white;
		border: 1px solid black;
		padding: 0.5rem;
	}
</style>
