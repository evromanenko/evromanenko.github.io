document.addEventListener("DOMContentLoaded", function () {

    var links = document.querySelectorAll('tr.summary p');
    Array.from(links).forEach(link => {
        link.addEventListener('click', function (e) {
            var div = this.nextElementSibling;
            console.log(div);
            if (div.classList.contains('show')) {
                div.classList.remove('show');
                this.classList.remove('icon-angle-double-up');
                this.classList.add('icon-angle-double-down');
            } else {
                div.classList.add('show');
                this.classList.remove('icon-angle-double-down');
                this.classList.add('icon-angle-double-up');
            }
            e.preventDefault();
        });
    });

});