export default function (context) {
  if (process.browser) {
    const mobileNav = document.querySelector('.mobile-nav')
    if (mobileNav) {
      mobileNav.classList.add('closed')
    }
  }
}
