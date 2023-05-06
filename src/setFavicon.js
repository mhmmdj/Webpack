import favicon from '../img/favicon.svg'

export default () => {
	const linkFavicon = document.createElement('link')
	linkFavicon.rel = 'shortcut icon'
	linkFavicon.type = 'image/x-icon'
	linkFavicon.href = favicon
	document.head.appendChild(linkFavicon)
}