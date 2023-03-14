const opcja = ["kamień", "papier", "nożyce"];

const btnKamien = document.querySelector(".kamien");
const btnPapier = document.querySelector(".papier");
const btnNozyce = document.querySelector(".nozyce");
const btnZagraj = document.querySelector(".play");
const buttons = document.querySelectorAll("button");

const gameText = document.querySelector(".game-text");
const span = document.createElement("span");
span.style.cssText = "color:red";
const reset = document.createElement("button");
reset.textContent = "reset";

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

//events
btnKamien.addEventListener("click", function (e) {
	btnKamien.classList.toggle("active");
	return opcja[0];
});
btnPapier.addEventListener("click", () => {
	btnPapier.classList.toggle("active");
	return opcja[1];
});
btnNozyce.addEventListener("click", () => {
	btnNozyce.classList.toggle("active");
	return opcja[2];
});

function getPlayerChoice() {
	if (btnKamien.classList.contains("active")) {
		return opcja[0];
	} else if (btnPapier.classList.contains("active")) {
		return opcja[1];
	} else if (btnNozyce.classList.contains("active")) {
		return opcja[2];
	}
}
btnZagraj.addEventListener("click", function () {
	btnZagraj.classList.add("active");
	gameText.appendChild(span);
});

// main game function
function playRound(playerSelection, computerSelection) {
	playerSelection = getPlayerChoice();
	computerSelection = getComputerChoice();
	function gameRules() {
		const kompwin = "wygrał komputer!";
		const playerwin = "wygrałeś!";
		if (playerSelection === computerSelection) {
			return (span.textContent =
				playerSelection + " = " + computerSelection + " = remis");
		} else if (playerSelection === "nożyce" && computerSelection === "kamień") {
			return (span.textContent =
				playerSelection + " < " + computerSelection + " = " + kompwin);
		} else if (playerSelection === "nożyce" && computerSelection === "papier") {
			return (span.textContent =
				playerSelection + " > " + computerSelection + " = " + playerwin);
		} else if (playerSelection === "papier" && computerSelection === "kamień") {
			return (span.textContent =
				playerSelection + " > " + computerSelection + " = " + playerwin);
		} else if (playerSelection === "kamień" && computerSelection === "papier") {
			return (span.textContent =
				playerSelection + " < " + computerSelection + " = " + kompwin);
		} else if (playerSelection === "kamień" && computerSelection === "nożyce") {
			return playerSelection + " > " + computerSelection + " = " + playerwin;
		} else {
			return (span.textContent = "błąd");
		}
	}
	return (span.textContent = gameRules());
}

function game() {
	for (let i = 0; i < 5; i++) {
		span.innerHTML += playRound() + "<br>";
		buttons.forEach(button => {
			if (btnZagraj.classList.contains("active")) {
				button.classList.remove("active");
			}
		});
		break;
	}
}

btnZagraj.addEventListener("click", game);
btnZagraj.addEventListener("click", () => {
	gameText.appendChild(reset);
});

// restart gry

reset.addEventListener("click", () => {
	gameText.innerHTML = "";
	span.innerHTML = "";
});
