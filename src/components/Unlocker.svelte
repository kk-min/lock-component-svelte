<script lang="ts">
	import UnlockerPad from './UnlockerPad.svelte';
	import { secret } from '$lib/stores/SecretStore';
	import { onMount } from 'svelte';
	import { animationLock } from '$lib/stores/AnimationStore';

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
		animationLock.set(true);
		for (let i = 0; i < $secret.length; i++) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			let padId = $secret[i];
			animate(padId);
		}
		animationLock.set(false);
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
