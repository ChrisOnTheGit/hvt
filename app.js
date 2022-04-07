const colorChange=()=>{
const bg=document.body
bg.classList.toggle("dark-mode")
}
let guesses=0;




const getName = () => {
	let name = prompt("Enter the secret password >:(");
	if (name != "GissyBoi") {
		guesses ++;
        if(guesses<5){
            alert(`${guesses} guessed... Try again.`);
            getName();
        }else if(guesses>=5){
            alert(`You are not welcome...`);
            location.href="punishment.html";
        }
	} else {
	    alert(`You are... right??? How??? Well, you are now welcome!`);
	}
};
getName();