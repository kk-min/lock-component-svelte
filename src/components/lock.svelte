<script lang="ts">
	import { secret } from '../lib/stores/SecretStore';
	import { userInput } from '../lib/stores/UserStore';
</script>

<img
	class="lock"
	src={$secret === $userInput
		? '/images/unlocked.png'
		: $userInput.length >= 4
		? '/images/failed.png'
		: '/images/locked.png'}
	alt="lock"
/>

<style>
	.lock {
		width: 20rem;
		height: auto;
		margin: 2rem;
	}
</style>
