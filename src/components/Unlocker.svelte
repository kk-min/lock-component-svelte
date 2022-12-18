<script lang="ts">
	import UnlockerPad from './UnlockerPad.svelte';
	import { secret } from '$lib/stores/SecretStore';
	import { onMount } from 'svelte';

	let unlockers: string[] = ['0', '1', '2', '3'];
	let locked = false;
	function animate(padId: string) {
		let pad = document.getElementById(padId);
		if (pad) {
			pad.classList.add('pressed');
			setTimeout(() => {
				if (pad) {
					pad.classList.remove('pressed');
				}
			}, 500);
		}
	}

	async function animateSecret() {
		locked = true;
		for (let i = 0; i < $secret.length; i++) {
			let padId = $secret[i];
			animate(padId);
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
		locked = false;
	}

	onMount(animateSecret);
</script>

<div class="unlocker-container">
	{#each unlockers as code (code)}
		<UnlockerPad padId={code} {locked} />
	{/each}
</div>

<style>
	.unlocker-container {
		display: flex;
		gap: 1rem;
	}
</style>
