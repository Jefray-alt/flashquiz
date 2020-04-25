// Single Select
export const selectManipulation = () => {
  document
    .querySelector('.custom-select-wrapper')
    .addEventListener('click', function () {
      this.querySelector('.custom-select').classList.toggle('open');
      this.querySelector('.custom-select__trigger').classList.toggle('revert');
    });

  for (const option of document.querySelectorAll('.custom-option')) {
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode
          .querySelector('.custom-option.selected')
          .classList.remove('selected');
        this.classList.add('selected');
        this.closest('.custom-select').querySelector(
          '.custom-select__trigger span'
        ).textContent = this.textContent;
      }
    });
  }
};

// Multiple Select
export const selectMultipleManipulation = () => {
  for (const option of document.querySelectorAll('.custom-option')) {
    option.addEventListener('click', function () {
      if (!this.classList.contains('selected')) {
        this.parentNode
          .querySelector('.custom-option.selected')
          .classList.remove('selected');
        this.classList.add('selected');
        this.closest('.custom-select').querySelector(
          '.custom-select__trigger span'
        ).textContent = this.textContent;
      }
    });
  }
  for (const dropdown of document.querySelectorAll('.custom-select-wrapper')) {
    dropdown.addEventListener('click', function () {
      this.querySelector('.custom-select').classList.toggle('open');
      this.querySelector('.custom-select__trigger').classList.toggle('revert');
      this.querySelector('.custom-options').classList.toggle('d-none');
    });
  }
  window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
      if (!select.contains(e.target)) {
        select.classList.remove('open');
        select
          .querySelector('.custom-select__trigger')
          .classList.remove('revert');
      }
    }
  });
};

export const getSelectValue = (key) => {
  const value = document
    .querySelector(
      `div.custom-options[data-key='${key}'] .custom-option.selected`
    )
    .getAttribute('data-value');
  return value;
};

export const decodeHTML = (text) => {
  var txt = document.createElement('textarea');
  txt.innerHTML = text;
  return txt.value;
};
