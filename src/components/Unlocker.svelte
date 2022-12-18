<script lang="ts">
	import { userInput } from "src/lib/stores/UserStore";
	let locked: Boolean = true;
	let unlockers: String[] = ['0', '1', '2', '3']

	function onClick(value: String){
		if(locked){
			return;
		}
		userInput.update(prev => prev+value);
	} 
</script>

{#each unlockers as input (input)}
	<button on:click={(input) => onClick(input)}>input</button>
{/each}
