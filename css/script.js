
// Каталогдон үй издөө
const search = document.getElementById("search");

if (search) {
    search.addEventListener("input", function () {
        let value = this.value.toLowerCase();

        document.querySelectorAll(".property").forEach(function (item) {
            let name = item.innerText.toLowerCase();
            item.style.display = name.includes(value) ? "" : "none";
        });
    });
}

// Ипотека калькулятору
function calculateMortgage() {
    let price = Number(document.getElementById("price").value);
    let initial = Number(document.getElementById("initial").value);
    let rate = Number(document.getElementById("rate").value);
    let years = Number(document.getElementById("years").value);

    let result = document.getElementById("result");

    if (price <= 0 || initial < 0 || initial >= price || rate < 0) {
        result.classList.remove("d-none");
        result.classList.replace("alert-success", "alert-danger");
        result.innerText = "Маалыматтарды туура киргизиңиз!";
        return;
    }

    let loan = price - initial;
    let months = years * 12;
    let monthlyRate = rate / 100 / 12;

    let payment;

    if (monthlyRate === 0) {
        payment = loan / months;
    } else {
        payment = loan * monthlyRate *
            Math.pow(1 + monthlyRate, months) /
            (Math.pow(1 + monthlyRate, months) - 1);
    }

    result.classList.remove("d-none", "alert-danger");
    result.classList.add("alert-success");

    result.innerHTML =
        "Кредит суммасы: " + loan.toLocaleString("ru-RU") + " сом<br>" +
        "Айлык төлөм: " + Math.round(payment).toLocaleString("ru-RU") + " сом";
}

// Байланыш формасы
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("message").classList.remove("d-none");

        contactForm.reset();
    });
}
