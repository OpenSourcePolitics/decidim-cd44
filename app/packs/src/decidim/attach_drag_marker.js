$(() => {
    const $map = $("#map");
    let $latFieldName = "proposal[latitude]";
    let $longFieldName = "proposal[longitude]";

    $map.data("map-controller").setEventHandler("coordinates", (ev) => {
        $(`input[name='${$latFieldName}']`).val(ev.lat);
        $(`input[name='${$longFieldName}']`).val(ev.lng);
    });
});
