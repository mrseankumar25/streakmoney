if(typeof BannerForm !== "function") {
  class BannerForm extends HTMLElement {
    constructor() {
      super()

      this.querySelector('.form-container .showForm').addEventListener('click', () => this.toggleForm(true))
      this.querySelector('.form-container .logo-container svg').addEventListener('click', () => this.toggleForm(false))
    }
    toggleForm(bol) {
      if(bol)
        this.setAttribute('open', true)
      else
        this.removeAttribute('open')
    }
  }

  customElements.define('banner-form', BannerForm)
}