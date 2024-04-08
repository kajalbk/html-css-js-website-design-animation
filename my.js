let slide = 1;
showDivs(slide);
function plusDivs(n) {
    showDivs(slide += n);
}
function currentDiv(n) {
    showDivs(slide = n);
}
function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("slider");
    let y = document.getElementsByClassName("demo");
    if (n > x.length) {
        slide = 1
    }
    if (n < 1) {
        slide = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < y.length; i++) {
        y[i].className = y[i].className.replace(" dred", "");
    }
    x[slide - 1].style.display = "inline";
    y[slide - 1].className += " demodred";
}