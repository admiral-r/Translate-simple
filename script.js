var sourceLang = 'en';
var targetLang = 'fa';
document.getElementById("english").innerHTML = 'English';
document.getElementById("persian").innerHTML = 'Persian';

window.addEventListener('load', function () {
    if (navigator.onLine) {
        document.getElementById("btn-menu1t").style.visibility = 'visible';
    } else {
        document.getElementById("btn-menu1t").style.visibility = 'hidden';
        document.getElementById("btn-menu1f").style.visibility = 'visible';
    }
});
window.addEventListener('offline', function () {
    document.getElementById("btn-menu1t").style.visibility = 'hidden';
    document.getElementById("btn-menu1f").style.visibility = 'visible';
});
window.addEventListener('online', function () {
    document.getElementById("btn-menu1t").style.visibility = 'visible';
    document.getElementById("btn-menu1f").style.visibility = 'hidden';
});

function runningTranslate1() {
    translate();
    runningTranslate2();
    var colsSource1 = document.getElementById("sourceText").value;
    if (colsSource1.length < 36) {
        document.getElementById("sourceText").rows = 1;
    };
    if (colsSource1.length > 35) {
        document.getElementById("sourceText").rows = 2;
    };
};

function runningTranslate2() {
    var colsSource2 = document.getElementById("resultText").value;
    if (colsSource2.length < 80) {
        document.getElementById("resultText").rows = 2;
    };
    if (colsSource2.length > 79) {
        document.getElementById("resultText").rows = 3;
    };
};

function translate() {
    var sourceText = $('textarea#sourceText').val();
    var sourceText = sourceText.replaceAll('.', '');
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
    $.getJSON(url, function (data) {
        $('textarea#resultText').val(data[0][0][0]);
    });
};

function changeLanguage() {
    var colsSource1 = document.getElementById("sourceText").value;
    var colsSource2 = document.getElementById("resultText").value;
    document.getElementById("resultText").value = colsSource1;
    document.getElementById("sourceText").value = colsSource2;
    if (sourceLang === 'fa') {
        sourceLang = 'en';
        targetLang = 'fa';
        document.getElementById("sourceText").style.textAlign = 'left';
        document.getElementById("sourceText").style.direction = 'ltr';
        document.getElementById("resultText").style.textAlign = 'right';
        document.getElementById("english").innerHTML = 'English';
        document.getElementById("persian").innerHTML = 'Persian';
    } else {
        sourceLang = 'fa';
        targetLang = 'en';
        document.getElementById("sourceText").style.textAlign = 'right';
        document.getElementById("sourceText").style.direction = 'rtl';
        document.getElementById("resultText").style.textAlign = 'left';
        document.getElementById("english").innerHTML = 'Persian';
        document.getElementById("persian").innerHTML = 'English';
    };
}
