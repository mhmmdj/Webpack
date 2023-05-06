import Image from './components/Image/Image.js'
import Button from './components/Button/Button.js'
import setFavicon from './setFavicon.js'
import './style.css'

setFavicon()

const divBtnImg = document.createElement('div')
divBtnImg.innerHTML = Button('btn-image', 'Add image')
document.body.appendChild(divBtnImg)

//#region Creating images container div 
const imagesContainer = document.createElement('div')
imagesContainer.classList.add('images-container')
imagesContainer.style.display = 'flex'
document.body.appendChild(imagesContainer)
//#endregion

document.querySelector('.btn-image').onclick = () => {
	const divImg = document.createElement('div')
	divImg.innerHTML = Image()
	document.querySelector('.images-container').appendChild(divImg)
}