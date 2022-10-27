$( document ).ready(function() {
    let formInitializationTime = 0;
    document.querySelector('#registration_user_name').addEventListener('change', function () {
        if (!formInitializationTime) formInitializationTime = new Date();
    });
    $("#register-form").on("submit", (event) => {
        if (new Date() - formInitializationTime < 1000) {
            event.preventDefault();
            $("#too-fast-modal").foundation("open");
        }
    });
})
