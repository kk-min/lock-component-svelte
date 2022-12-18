<script lang="ts">
	import { userInput } from '$lib/stores/UserStore';
	import { animationLock } from '$lib/stores/AnimationStore';

	export let resetToggle: boolean;

	function reset() {
		userInput.set('');
		resetToggle = !resetToggle;
	}
</script>

<button class="button" on:click={reset} disabled={$animationLock}>Reset</button>

<style>
	.button {
		cursor: pointer;
		margin: 1rem;
		font-size: 1.5rem;
		background-color: lightskyblue;
		border: 1px solid black;
		padding: 0.5rem;
	}

	.button:disabled {
		cursor: not-allowed;
		background-color: white;
	}
</style>
