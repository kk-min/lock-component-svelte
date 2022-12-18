<script lang="ts">
	import { userInput } from '../lib/stores/UserStore';
	export let padId: string;
	export let locked: boolean = false;
	let pressed: boolean = false;
	function onClick(value: String) {
		if (locked || pressed) {
			return;
		}
		pressed = true;
		userInput.update((prev) => prev + value);
		console.log($userInput);
	}
</script>

<button id={padId} class="unlocker" class:pressed on:click={() => onClick(padId)} disabled={locked}
	>{padId}</button
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
		cursor: not-allowed;
		background-color: lightskyblue;
	}

	.locked {
		cursor: not-allowed;
	}
</style>
