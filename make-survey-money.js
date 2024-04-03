if(typeof OfferTabs !== 'function') {
  class OfferTabs extends HTMLElement {
    constructor() {
      super()

      this.links = this.querySelectorAll('.tabs-link')
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
          if(this.querySelector(link.dataset.link)) this.querySelector(link.dataset.link).classList.add('tab-active')
        })
      })
    }
  }

  customElements.define('offer-tabs', OfferTabs)
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