const opcja = ["kamień", "papier", "nożyce"];

function getComputerChoice() {
	function random() {
		const randomize = Math.floor(Math.random() * 100);
		if (randomize <= 33) {
			return opcja[0];
		} else if (randomize > 33 && randomize <= 66) {
			return opcja[1];
		} else {
			return opcja[2];
		}
	}
	return random();
}
function getPlayerChoice() {
	const select = prompt("Kamień papier nożyce");
	return select.toLowerCase();
}
function playRound(playerSelection, computerSelection) {
	playerSelection = getPlayerChoice();
	computerSelection = getComputerChoice();
	function gameRules() {
		if (playerSelection === computerSelection) {
			return playerSelection + " = " + computerSelection + " = remis";
		} else if (playerSelection === "nożyce" && computerSelection === "kamień") {
			return (
				playerSelection + " < " + computerSelection + " = wygrał komputer!"
			);
		} else if (playerSelection === "nożyce" && computerSelection === "papier") {
			return playerSelection + " > " + computerSelection + " = wygrałeś!";
		} else if (playerSelection === "papier" && computerSelection === "kamień") {
			return playerSelection + " > " + computerSelection + " = wygrałeś!";
		} else if (playerSelection === "kamień" && computerSelection === "papier") {
			return (
				playerSelection + " < " + computerSelection + " = wygrał komputer!"
			);
		} else if (playerSelection === "kamień" && computerSelection === "nożyce") {
			return playerSelection + " > " + computerSelection + " = wygrałeś!";
		} else {
			return "błąd";
		}
	}
	return gameRules();
}
function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound());
	}
}
console.log(game());
