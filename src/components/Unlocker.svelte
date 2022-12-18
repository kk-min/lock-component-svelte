<script lang="ts">
	import { userInput } from "../lib/stores/UserStore";
	let locked: boolean = false;
	let unlockers: String[] = ['0', '1', '2', '3']
	
	$: if($userInput.length === 4){
		locked = true;
	} 

	function onClick(value: String){
		if(locked){
			return;
		}
		userInput.update(prev => prev+value);
		console.log($userInput);
	} 
</script>

{#each unlockers as code (code)}
	<button on:click={() => onClick(code)} disabled={locked}>{code}</button>
{/each}
