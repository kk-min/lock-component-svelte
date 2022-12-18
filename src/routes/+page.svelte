<script>
	import Lock from '../components/Lock.svelte';
	import Unlocker from '../components/Unlocker.svelte';
</script>

<div class="container">
	<Lock />
	<Unlocker />
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
