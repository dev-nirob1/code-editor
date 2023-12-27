const textArea = document.getElementById('text-area');
const changeFontSize = document.getElementById('font-size');
changeFontSize.addEventListener('change', function () {
    const changeFont = changeFontSize.value;
    textArea.style.fontSize = changeFont + 'px';
});

const changeColor = document.getElementById('color-picker');
changeColor.addEventListener('input', function(){
    changeColorFromPicker = changeColor.value;
    textArea.style.color = changeColorFromPicker;
});

document.getElementById('bold').addEventListener('click', function () {
    if (textArea.style.fontWeight == 'bold') {
        textArea.style.fontWeight = 'normal';
    }
    else {
        textArea.style.fontWeight = 'bold';
    }
});
document.getElementById('italic').addEventListener('click', function () {
    if (textArea.style.fontStyle == 'italic') {
        textArea.style.fontStyle = 'normal';
    }
    else {
        textArea.style.fontStyle = 'italic';
    }
});
document.getElementById('underline').addEventListener('click', function () {
    if (textArea.style.textDecoration == 'underline') {
        textArea.style.textDecoration = 'normal';
    }
    else {
        textArea.style.textDecoration = 'underline';
    }
});
document.getElementById('align-left').addEventListener('click', function () {
    if (textArea.style.textAlign == 'left') {
        textArea.style.textAlign = 'normal';
    }
    else {
        textArea.style.textAlign = 'left';
    }
});
document.getElementById('align-center').addEventListener('click', function () {
    if (textArea.style.textAlign == 'center') {
        textArea.style.textAlign = 'normal';
    }
    else {
        textArea.style.textAlign = 'center';
    }
});
document.getElementById('align-right').addEventListener('click', function () {
    if (textArea.style.textAlign == 'right') {
        textArea.style.textAlign = 'normal';
    }
    else {
        textArea.style.textAlign = 'right';
    }
});
document.getElementById('align-justify').addEventListener('click', function () {
    if (textArea.style.textAlign == 'justify') {
        textArea.style.textAlign = 'normal';
    }
    else {
        textArea.style.textAlign = 'justify';
    }
});
document.getElementById('upper-lower').addEventListener('click', function () {
    if (textArea.style.textTransform == 'uppercase') {
        textArea.style.textTransform = 'lowercase';
    }
    else {
        textArea.style.textTransform = 'uppercase';
    }
});

