const Nav = {
  init() {
    this.$btnNav = $(".js-nav-btn");
    this.$nav = $(".js-nav-mobile");
    this.$navBackdrop = $(".js-nav-backdrop");

    this.btnClickHandler();
    this.clickOutsideHandler();
  },

  btnClickHandler() {
    const self = this;

    this.$btnNav.click(() => {
      self.$nav.toggleClass("open");
    });
  },

  clickOutsideHandler() {
    const self = this;

    this.$navBackdrop.click(() => {
      self.$nav.removeClass("open");
    });
  },
};

export default Nav;
