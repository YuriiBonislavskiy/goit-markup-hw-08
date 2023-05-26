(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal__open]"),
    closeModalBtn: document.querySelector("[data-modal__close]"),
    modal: document.querySelector("[data-modal]"),
    menuBtnHidden: document.querySelector("[data-menu-button]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menuBtnHidden.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");

  }
})();
