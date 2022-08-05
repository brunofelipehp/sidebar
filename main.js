const sidebar = document.querySelector('.sidebar')
const toggle = document.querySelector('#toggle')
const buscar = document.querySelector('#search')

/* =============== CLOSE ======================== */
  toggle.addEventListener('click', function () {
    sidebar.classList.toggle('close')
  }
  )

  /* ============ SEARCH ====================== */
buscar.addEventListener('input', function() {
  sidebar.classList.remove('close')
})