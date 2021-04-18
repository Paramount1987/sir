$(document).ready(() => {
  $("select").niceSelect();

  // Цена
  const locality = "en-EN";

  $("#price-range").slider({
    range: true,
    min: 150000,
    max: 15000000,
    values: [150000, 5000000],
    slide(_, ui) {
      let p0 = ui.values[0];
      let p1 = ui.values[1];
      p0 = p0.toLocaleString(locality, { minimumFractionDigits: 0 });
      p0 = p0.replace(",", ".");
      p0 = p0.replace(",", ".");
      p1 = p1.toLocaleString(locality, { minimumFractionDigits: 0 });
      p1 = p1.replace(",", ".");
      p1 = p1.replace(",", ".");
      $("#price-amount").val(`от ${p0} - до ${p1}`);
    },
  });

  let p0 = $("#price-range").slider("values", 0);
  let p1 = $("#price-range").slider("values", 1);
  p0 = p0.toLocaleString(locality, { minimumFractionDigits: 0 });
  p0 = p0.replace(",", ".");
  p0 = p0.replace(",", ".");
  p1 = p1.toLocaleString(locality, { minimumFractionDigits: 0 });
  p1 = p1.replace(",", ".");
  p1 = p1.replace(",", ".");
  $("#price-amount").val(`от ${p0} - до ${p1}`);

  // Площадь
  $("#room-size-range").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [30, 500],
    slide: (_, ui) => {
      $("#room-size").val(`от ${ui.values[0]} - до ${ui.values[1]}`);
    },
  });

  $("#room-size").val(
    `от ${$("#room-size-range").slider("values", 0)} - до ${$(
      "#room-size-range"
    ).slider("values", 1)}`
  );

  //  Напишите нам
  $(".js-link-feedback").click(function () {
    $(".js-nav-mobile").removeClass("open");
    $("html, body").animate(
      {
        scrollTop: $(".js-feedback").offset().top,
      },
      1500
    );
  });
});
