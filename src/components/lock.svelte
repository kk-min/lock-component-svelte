<script lang='ts'>
let secret: String;

function randomNumber(max: int, min: int): int{
	return Math.random() * (max-min) + min;
}

function generateSecret(length: int): String{
	let result: String = "";
	let numbers: int[] = Array.from(Array(length).keys());
	while(numbers.length > 0){
		let randomIndex: int = randomNumber(0, numbers.length)
		result += String(numbers[randomIndex]);
		numbers.splice(randomIndex, 1);
	}
	return result;
}
</script>

<img src={}/>
