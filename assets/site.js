// J.A.R.V.I.S. public site — small progressive enhancements only. No tracking, no external requests.
(function () {
  document.documentElement.classList.add('js')

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle')
  var nav = document.getElementById('site-nav')
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open')
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
    })
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open')
        toggle.setAttribute('aria-expanded', 'false')
      }
    })
  }

  // Gentle reveal as sections scroll into view
  var items = document.querySelectorAll('.reveal')
  if ('IntersectionObserver' in window && items.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    items.forEach(function (el) {
      io.observe(el)
    })
  } else {
    items.forEach(function (el) {
      el.classList.add('is-in')
    })
  }

  // Current year in the footer
  var year = document.querySelectorAll('[data-year]')
  year.forEach(function (el) {
    el.textContent = String(new Date().getFullYear())
  })
})()
