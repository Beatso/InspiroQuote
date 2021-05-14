const image = document.createElement('img')
document.body.appendChild(image)

const updateQuote = async () =>
	image.setAttribute('src', (await (await fetch('https://inspirobot.me/api?generate=true')).text()))

updateQuote()

document.getElementById('html').onclick = updateQuote
