function change(oldID,ID) {
    document.getElementById(ID).disabled=false;
    document.getElementById(oldID).disabled=true;
}