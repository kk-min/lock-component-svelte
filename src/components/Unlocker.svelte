<script lang="ts">
	import UnlockerPad from './UnlockerPad.svelte';
	let unlockers: string[] = ['0', '1', '2', '3'];
</script>

<div class="unlocker-container">
	{#each unlockers as code (code)}
		<UnlockerPad padId={code} />
	{/each}
</div>

<style>
	.unlocker-container {
		display: flex;
		gap: 1rem;
	}
</style>
