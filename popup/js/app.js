const modal = document.getElementById('popup-dialog')

if (modal) {
  const modalCloses = modal.querySelectorAll('.popup__dialog-close')

  Array.from(modalCloses).forEach(modalClose => {
    modalClose.addEventListener('click', () => (modal.dataset.schema = '', modal.querySelector('.popup__dialog-body').innerHTML = '', modal.close()))
  })

  modal.addEventListener('click', e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
      modal.querySelector('.popup__dialog-body').innerHTML = '';
      modal.close()
    }
  })
}

const cardPopups = document.querySelectorAll('.card-popup')
Array.from(cardPopups).forEach(cardPopup => {
  cardPopup.addEventListener('click', () => {
    const template = cardPopup.querySelector('template').content.cloneNode(true)
    if (modal) {
      if (cardPopup.querySelector('template')) modal.querySelector('.popup__dialog-body').append(template)

      modal.dataset.schema = cardPopup.dataset.popupSchema
      modal.showModal()
    }
  })
})