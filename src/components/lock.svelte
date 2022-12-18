<script lang="ts">
	import {secret} from '../lib/stores/SecretStore';
	import {userInput} from '../lib/stores/UserStore'
	let open: boolean = ($secret == $userInput);
</script>

{#if open}
<h1>Placeholder: Lock is open!</h1>
{:else}
<h1>Placeholder: Lock is closed!</h1>
{/if}
