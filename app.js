document.getElementById("pngButton").addEventListener("click", function () {
    html2canvas(document.querySelector('#timetable-canvas')).then(function (canvas) {
        saveAs(canvas.toDataURL(1), "timetable.png");
    });
});

function saveAs(url, filename) {
    var link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = url;
        link.download = filename;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    } else {
        window.open(url);
    }
}

function interact(textContent) {
    switch (textContent) {
        case "Timetabler":
            timetableEnable(true);

            customizeEnable(false);
            FAQEnable(false);
        break;

        case "Customize":
            timetableEnable(false);
            FAQEnable(false);

            customizeEnable(true);
        break;

        case "FAQ":
            timetableEnable(false);
            customizeEnable(false);

            FAQEnable(true);
        break;
    }
}

function timetableEnable(bool) {
    var timetable = document.getElementById("timetable-canvas");

    if (bool) {
        timetable.style.display = "block";
    } else if (!bool) {
        timetable.style.display = "none";
    }
}

function customizeEnable(bool) {
    var customize = document.getElementById("customize-section");

    if (bool) {
        customize.style.display = "block";
        customize.style.overflow = "visible";
    } else if (!bool) {
        customize.style.display = "none";
        customize.style.overflow = "hidden";
    }
}

function FAQEnable(bool) {
    var FAQ = document.getElementById("FAQ-section");

    if (bool) {
        FAQ.style.display = "block";
        FAQ.style.overflow = "visible";
    } else if (!bool) {
        FAQ.style.display = "none";
        FAQ.style.overflow = "hidden";
    }
}

function inputLimitCharacters(input) {
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
}

var timetable = document.querySelector(".timetable");

function saveBorderWidth(px) {
    timetable.style.borderWidth = `${px}px`;
}

function saveBorderTopPadding(px) {
    timetable.style.paddingTop = `${px}px`;
}

function saveBorderBottomPadding(px) {
    timetable.style.paddingBottom = `${px}px`;
}

function saveBorderLeftPadding(px) {
    timetable.style.paddingLeft = `${px}px`;
}

function saveBorderRightPadding(px) {
    timetable.style.paddingRight = `${px}px`;
}

function saveTitleFont(value) {
    var title = document.querySelector(".timetable-title");

    switch (value) {
        case "lora":
            title.style.fontFamily = "Lora, serif";
        break;

        case "titillium_web":
            title.style.fontFamily = "Titillium Web, sans-serif";
        break;

        case "open_sans":
            title.style.fontFamily = "Open Sans, sans-serif";
        break;

        case "old_standard_tt":
            title.style.fontFamily = "Old Standard TT, serif";
        break;

        case "pt_mono":
            title.style.fontFamily = "PT Mono, monospace";
        break;

        case "gravitas_one":
            title.style.fontFamily = "Gravitas One, cursive";
        break;
    }
}

function saveTimetableFont(value) {
    var timetable = document.getElementsByClassName("timetable-input");
    var weekdays = document.getElementsByTagName("b");

    switch (value) {
        case "lora":
            for (i = 0; i < timetable.length; i++) {
                timetable[i].style.fontFamily = "Lora, serif";
            }

            for (i = 0; i < weekdays.length; i++) {
                weekdays[i].style.fontFamily = "Lora, serif";
            }
        break;

        case "titillium_web":
            for (i = 0; i < timetable.length; i++) {
                timetable[i].style.fontFamily = "Titillium Web, sans-serif";
            }

            for (i = 0; i < weekdays.length; i++) {
                weekdays[i].style.fontFamily = "Titillium Web, sans-serif";
            }
        break;

        case "open_sans":
            for (i = 0; i < timetable.length; i++) {
                timetable[i].style.fontFamily = "Open Sans, sans-serif";
            }

            for (i = 0; i < weekdays.length; i++) {
                weekdays[i].style.fontFamily = "Open Sans, sans-serif";
            }
        break;

        case "old_standard_tt":
            for (i = 0; i < timetable.length; i++) {
                timetable[i].style.fontFamily = "Old Standard TT, serif";
            }

            for (i = 0; i < weekdays.length; i++) {
                weekdays[i].style.fontFamily = "Old Standard TT, serif";
            }
        break;

        case "pt_mono":
            for (i = 0; i < timetable.length; i++) {
                timetable[i].style.fontFamily = "PT Mono, monospace";
            }

            for (i = 0; i < weekdays.length; i++) {
                weekdays[i].style.fontFamily = "PT Mono, monospace";
            }
        break;

        case "gravitas_one":
            for (i = 0; i < timetable.length; i++) {
                timetable[i].style.fontFamily = "Gravitas One, cursive";
            }

            for (i = 0; i < weekdays.length; i++) {
                weekdays[i].style.fontFamily = "Gravitas One, cursive";
            }
        break;
    }
}

function saveColumnSize(value) {
    if (value < 2 || value >= 10) {
        value = 2;
    } else {
        // Below is the cleanest & complicated JS code that I've ever written in 2020 LOL.
        var tr = document.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            var td = tr[i].children;

            var newColumn = document.createElement("td");
            var newInput = document.createElement("input");

            if (value < td.length) {
                var removeAmount = td.length - value;

                for (x = 0; x < removeAmount; x++) {
                    tr[i].removeChild(td[td.length - 1]);
                }
            } else if (value > td.length) {
                var addAmount = value - td.length;

                for (x = 0; x < addAmount; x++) {
                    tr[i].appendChild(newColumn);
                    newColumn.appendChild(newInput);

                    newInput.classList.add("timetable-input");
                }
            }
        }
    }
}