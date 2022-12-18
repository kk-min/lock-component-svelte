<script lang="ts">
	import Lock from '../components/Lock.svelte';
	import Unlocker from '../components/Unlocker.svelte';
	import ResetButton from '../components/ResetButton.svelte';
	export let reset: boolean = false;
</script>

<div class="container">
	{#key reset}
		<Lock />
		<Unlocker />
	{/key}
	<ResetButton bind:resetToggle={reset} />
</div>

<style>
	.container {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
