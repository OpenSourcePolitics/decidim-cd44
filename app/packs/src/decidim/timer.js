$(document).ready(function () {
    let formInitializationTime = 0;
    const registrationForm = document.querySelector('#registration_user_name');

    if (registrationForm != null) {
        registrationForm.addEventListener('change', function () {
            if (!formInitializationTime) formInitializationTime = new Date();
        });
        $("#register-form").on("submit", (event) => {
            if (new Date() - formInitializationTime < parseInt(document.querySelector("input[name='minimum_time_to_sign_up']")) * 1000) {
                event.preventDefault();
                $("#too-fast-modal").foundation("open");
            }
        });
    }
})
