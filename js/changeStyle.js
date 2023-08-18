function change(oldID,ID) {
    document.getElementById(ID).disabled=false;
    document.getElementById(oldID).disabled=true;
}

function changeToDark() {
    change("mainLight","mainDark");
    change("navLight","navDark");
}

function changeToLight() {
    change("mainDark","mainLight");
    change("navDark","navLight");
}