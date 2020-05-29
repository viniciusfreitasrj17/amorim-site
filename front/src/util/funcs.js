const toTop = (effect) => {
  return window.scrollTo({
      top: 0,
      behavior: effect ? 'smooth' : 'auto'
    })
}

const onScroll = (state, setState) => {
  window.addEventListener("scroll", Hand, false);

  function Hand() {
    const currentPos = window.scrollY
    setState(currentPos)
  }

  return () => {
    window.removeEventListener("scroll", Hand, false);
  };
};

const getHeightComponent = (component, state, setState) => {
  const heightEach = component.map(
    c => document.getElementById(c).clientHeight
  )

  let f = 0;

  const hOnPage = heightEach.map(a => {
    f += a;
    return f;
  })

  setState(hOnPage)

};

const navbarEffectSize = () => {
  const $nav = document.querySelector('nav')
  const $logo = document.querySelectorAll('.navbar-logo')[0]
  const $logoImg = document.querySelectorAll('.navbar-imglogo')[0]
  const $toggler = document.querySelectorAll('.navbar-toggler')[0]
  const $group = document.querySelectorAll('.navbar-group-itens')[0]
  window.addEventListener('scroll', toggleNav, false)
  function toggleNav() {
    if (window.pageYOffset > 98 && $nav.classList.contains('max-navbar')) {
      $nav.classList.remove('max-navbar')
      $nav.classList.add('min-navbar')
      // $logo.firstElementChild.setAttribute('src', 'imgs/omnitech-logo-2.png')
      $logoImg.classList.remove('max-navbar-imglogo')
      $logoImg.classList.add('min-navbar-imglogo')
      $logo.classList.remove('max-navbar-logo')
      $logo.classList.add('min-navbar-logo')
      $toggler.classList.remove('max-navbar-toggler')
      $toggler.classList.add('min-navbar-toggler')
      $group.classList.remove('max-navbar-group-itens')
      $group.classList.add('min-navbar-group-itens')
    } else if (window.pageYOffset <= 98 && $nav.classList.contains('min-navbar')) {
      $nav.classList.add('max-navbar')
      $nav.classList.remove('min-navbar')
      // $logo.firstElementChild.setAttribute('src', 'imgs/omnitech-logo-1.png')
      $logo.classList.remove('min-navbar-logo')
      $logo.classList.add('max-navbar-logo')
      $logoImg.classList.remove('min-navbar-imglogo')
      $logoImg.classList.add('max-navbar-imglogo')
      $toggler.classList.add('max-navbar-toggler')
      $toggler.classList.remove('min-navbar-toggler')
      $group.classList.add('max-navbar-group-itens')
      $group.classList.remove('min-navbar-group-itens')
    }
  }
}

const navbarEffectLinkActive = (component, state, setState, stateHeight) => {
  setState(component[0])

  (function() {
    stateHeight.forEach((e, i) => {
      if (window.scrollY > (e - 300)) {
        setState(component[i + 1])
      }
    })
  })()

  // console.log({'c': component, 'active': state, 'setActive': setState, 'heightOnPage': stateHeight})
}

export { 
  toTop, 
  onScroll, 
  getHeightComponent, 
  navbarEffectSize, 
  navbarEffectLinkActive 
};
