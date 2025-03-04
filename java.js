const canvas = document.querySelector("#confetti")

const jsConfetti = new JSConfetti();



const date = new Date();
if (date.getDay() === 5 || date.getDay() === 6) {
	svar="JA!"
	jsConfetti.addConfetti({
	emojis: ['🍾','🍻','🥂','🍸','🍺','🍷','🍹', "JA"],
	//confettiRadius: 100,
	//confettiNumber: 50,
	emojiSize: 120, 
})
	jsConfetti.addConfetti({
	confettiRadius: 6,
})
} else {
	svar="Nej"
	jsConfetti.addConfetti({
	emojis: ['NEJ', ''],
	confettiRadius: 100,
	//confettiNumber: 50,
	emojiSize: 120,
})
}
document.getElementById("svar").innerHTML = svar;
