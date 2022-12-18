<script lang="ts">
	import {secret} from '../lib/stores/SecretStore';
	import {userInput} from '../lib/stores/UserStore'
	let open: boolean = ($secret == $userInput);
</script>

{#if open}

{:else}

{/if}
