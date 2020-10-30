let drawerOpen = false;

class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.header__menu-icon');
    this.drawerBg = document.querySelector('.header__drawer__bg');
    this.menuContent = document.querySelector('.header__drawer');
    this.menuLink = document.querySelectorAll('.header__drawer__item');
    this.body = document.body;
    this.events();
  }
  events() {
    this.menuIcon.addEventListener('click', () => this.toggleTheMenu());
    this.drawerBg.addEventListener('click', () => this.closeTheMenu());
    this.menuLink.forEach((e) =>
      e.addEventListener('click', () => this.closeTheMenu())
    );
  }

  toggleTheMenu() {
    // スクロールを止める
    this.body.classList.toggle('stop-scrolling');
    //　ドロワーを開閉
    this.menuContent.classList.toggle('header__drawer--visible');
    this.drawerBg.classList.toggle('header__drawer__bg--visible');
    this.menuIcon.classList.toggle('header__menu-icon--close');
    drawerOpen = true;
  }
  closeTheMenu() {
    if (drawerOpen === true) {
      this.body.classList.remove('stop-scrolling');
      this.menuContent.classList.remove('header__drawer--visible');
      this.drawerBg.classList.toggle('header__drawer__bg--visible');
      this.menuIcon.classList.remove('header__menu-icon--close');
      drawerOpen = false;
    }
  }
}

export default MobileMenu;
