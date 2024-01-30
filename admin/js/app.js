if(typeof ContentTabs !== 'function') {
  class ContentTabs extends HTMLElement {
    constructor() {
      super()

      this.links = this.querySelectorAll('.nav-link')
      this.tabs = this.querySelectorAll('.tab-content')

      this.init()
      if(this.links) this.links[0].click()
    }

    init() {
      Array.from(this.links).forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault()

          if(this.querySelector('.active')) this.querySelector('.active').classList.remove('active')
          link.classList.add('active')
        
          if(this.querySelector('.tab-active')) this.querySelector('.tab-active').classList.remove('tab-active')
          this.querySelector(link.dataset.target).classList.add('tab-active')
        })
      })
    }
  }

  customElements.define('content-tabs', ContentTabs)
}

const btnDialogs = document.querySelectorAll('.btn-dialog')
Array.from(btnDialogs).forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    const dialog = btn.closest('form').querySelector(`#${ btn.dataset.target }`)
    if(dialog) {
      dialog.showModal()
    }
  })
})
const closeDialogs = document.querySelectorAll('.closeDialog')
Array.from(closeDialogs).forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    const dialog = btn.closest('dialog')
    if(dialog) {
      dialog.close()
    }
  })
})

const logoContent = document.querySelector('.logoContent')
const logoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => document.body.classList.toggle('scrolled', !entry.isIntersecting))
})
if(logoContent) logoObserver.observe(logoContent)