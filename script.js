document.addEventListener('DOMContentLoaded', function () {
  
  const state = {
    number: null,
    color: ''
  };

  function paintTable() {
    const cells = document.getElementsByTagName('td');
    for (const item of cells) {
      if (item.innerHTML != state.number) {
        item.style.backgroundColor = state.color;
      }
    }
  }

  document
    .querySelector('form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      state.number = formData.get('number');
      state.color = formData.get('color');
      paintTable();
    })

})
