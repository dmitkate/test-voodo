const select = function() {
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(i => {
        i.addEventListener('click', toggleS)
    });
      selectItem.forEach(i => {
        i.addEventListener('click', chooseS)
      });
    function toggleS() {
        this.parentElement.classList.toggle('is-active');
    }
    function chooseS() {
        let text = this.innerText
        let select = this.closest('.select')
        let currentText = select.querySelector('.select__current')
        currentText.innerText = text;
        select.classList.remove('.is-active')
    }
}
select();