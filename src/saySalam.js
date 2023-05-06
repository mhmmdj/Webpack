import Button from './components/Button/Button.js'
import setFavicon from './setFavicon.js'
import './style.css'

setFavicon()

const divBtnP = document.createElement('div')
divBtnP.innerHTML = Button('btn-p', 'Say Salam!')
document.body.appendChild(divBtnP
)

document.querySelector('.btn-p').onclick = () => {
	const divTxt = document.createElement('div')
	divTxt.innerHTML = `<p>Salam everybody! welcome to your home!</p>`
	document.body.appendChild(divTxt)
}
