// Аналог $.ready
document.addEventListener('DOMContentLoaded', function() {
	const ACTIVE_CLASS = 'is-active'
	const tabs = [].slice.call(document.querySelector('.ourproducts-flexbox__nav').children, 0)
	const contentSections = [].slice.call(document.querySelector('.ourproducts-content').children, 0)

	const selectSection = function(id) {
		contentSections.forEach(function(section) {
			section.classList.remove(ACTIVE_CLASS)
		})

		document.getElementById(id).classList.add(ACTIVE_CLASS)
	}

	const onClick = function(event) {
		// Предотвращаем дефолтное действие для ссылки, то есть переход по ссылке
		event.preventDefault()

		tabs.forEach(function(tab) {
			tab.classList.remove(ACTIVE_CLASS)
		})
		
		// #t1 -> t1
		selectSection(event.currentTarget.hash.slice(1))
		event.currentTarget.parentNode.classList.add(ACTIVE_CLASS)
	}

	// Навешиваем обработчики клика
	tabs.forEach(function(tab) {
		tab.querySelector('a').addEventListener('click', onClick)
	})
})