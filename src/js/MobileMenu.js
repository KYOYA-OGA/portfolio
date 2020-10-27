// class MobileMenu {
//   constructor() {
//     this.menuIcon = document.querySelector('.header__menu-icon');
//     // this.menuContent = document.querySelector('.header__drawer');
//     // this.drawerBg = document.querySelector('.header__drawer__bg');
//     this.preventScroll = document.body;
//     this.events();
//   }

//   events() {
//     this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
//     // this.drawerBg.addEventListener('click', () => this.removeDrawer());
//   }

//   toggleTheMenu(e) {
//     this.preventScroll.classList.toggle('stop-scrolling');
//     this.menuContent.classList.toggle('header__drawer--visible');
//     this.drawerBg.classList.toggle('header__drawer__bg--visible');
//     this.menuIcon.classList.toggle('header__menu-icon--close');
//   }

//   removeDrawer() {
//     this.drawerBg.classList.remove('header__drawer__bg--visible');
//     this.menuContent.classList.remove('header__drawer--visible');
//     this.menuIcon.classList.remove('header__menu-icon--close');
//     this.preventScroll.classList.remove('stop-scrolling');
//   }
// }

// new MobileMenu();
