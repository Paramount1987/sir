$(document).ready(() => {
  $(".js-spec-link").hover(
    (e) => {
      const { rel } = e.target.dataset;

      const $target = $(`[data-target=${rel}]`);
      $target.addClass("active");
    },
    (e) => {
      const { rel } = e.target.dataset;

      const $target = $(`[data-target=${rel}]`);
      $target.removeClass("active");
    }
  );
});
