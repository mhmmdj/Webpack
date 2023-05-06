import image from '../../../img/pic.jpg'
import altImg from '../../../src/imgAlt.txt'
import './image.css'

function Image() {
	return `<img src="${image}" alt="${altImg}">`
}

export default Image
