import toastr from "toastr"

export default function notify()
{
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    
    let message = document.querySelectorAll('.flashes')
    message.forEach(item => {
        let type = item.dataset.errorType
        toastr[type](item.innerText, type.charAt(0).toUpperCase() + type.slice(1));
    })
}