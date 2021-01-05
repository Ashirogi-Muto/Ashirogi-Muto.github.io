const DARK_THEME_KEY = 'dark'
const DARK_THEME_CLASS_NAME = 'theme-dark'
const LIGHT_THEME_KEY = 'light'
const THEME_KEY = 'theme'

window.addEventListener('load', () => {
	const toggleButton = document.querySelector('.toggle-theme-switch .switch input[name=checkbox]')
	const theme = localStorage.getItem(THEME_KEY)
	if(theme && theme == DARK_THEME_KEY) {
		toggleButton.checked = true
		document.body.classList.add(DARK_THEME_CLASS_NAME)
	}
	toggleButton.addEventListener('change', () => {
		document.body.classList.toggle(DARK_THEME_CLASS_NAME)
		let theme = LIGHT_THEME_KEY
		if(document.body.classList.contains(DARK_THEME_CLASS_NAME)) {
			theme = DARK_THEME_KEY
		}
		localStorage.setItem(THEME_KEY, theme)
	})
})