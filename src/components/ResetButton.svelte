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
		font-size: 1.5rem;
		background-color: var(--color-primary);
		color: white;
		border: 1px solid black;
		padding: 1rem;
		width: 12%;
		margin: 1rem;
	}

	.button:disabled {
		cursor: not-allowed;
		background-color: white;
		color: black;
	}
</style>
