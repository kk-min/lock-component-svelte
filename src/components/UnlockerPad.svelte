<script lang="ts">
	import { userInput } from '../lib/stores/UserStore';
	import { animationLock } from '../lib/stores/AnimationStore';
	export let padId: string;
	let pressed: boolean = false;
	function onClick(value: String) {
		if ($animationLock || pressed) {
			return;
		}
		pressed = true;
		userInput.update((prev) => prev + value);
		console.log($userInput);
	}
</script>

<button
	id={padId}
	class="unlocker"
	class:pressed
	class:locked={$animationLock}
	on:click={() => onClick(padId)}
	disabled={$animationLock || pressed}>{padId}</button
>

<style>
	.unlocker {
		cursor: pointer;
		border: 1px solid black;
		padding: 10px;
		font-size: 1.5rem;
		background-color: white;
	}

	.pressed {
		cursor: auto;
		background-color: lightskyblue;
	}

	.locked {
		cursor: not-allowed;
	}
</style>
