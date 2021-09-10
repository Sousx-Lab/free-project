export default function disableSubmit() {

    let form = document.getElementById('contact_form')
    if (form) {
        let btnSubmit = form.querySelector('button[type="submit"]')
        form.addEventListener('submit', function () {
            btnSubmit.disabled = true
        })
    }
}