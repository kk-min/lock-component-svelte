<script lang="ts">
	import { userInput } from '../lib/stores/UserStore';
	let locked: boolean = false;
	let unlockers: String[] = ['0', '1', '2', '3'];

	$: if ($userInput.length === 4) {
		locked = true;
	}

	function onClick(value: String) {
		if (locked) {
			return;
		}
		userInput.update((prev) => prev + value);
		console.log($userInput);
	}
</script>

<div class="unlocker-container">
	{#each unlockers as code (code)}
		<button class="unlocker" on:click={() => onClick(code)} disabled={locked}>{code}</button>
	{/each}
</div>

<style>
	.unlocker-container {
		display: flex;
		gap: 1rem;
	}

	.unlocker {
		border: 1px solid black;
		padding: 10px;
		font-size: 1.5rem;
		background-color: white;
	}
</style>
