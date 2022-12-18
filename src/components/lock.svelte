<script lang="ts">
	import { secret } from '../lib/stores/SecretStore';
	import { userInput } from '../lib/stores/UserStore';
</script>

<h1>
	Placeholder:
	{$secret === $userInput
		? 'Lock is open!'
		: $userInput.length >= 4
		? 'Wrong input!'
		: 'Lock is closed!'}
</h1>
