let count = 1
document.getElementById("item1").checked = true;

setInterval( function() {
    nextImage();
}, 6000)

function nextImage() {
    count++;
    if(count > 3){
        count = 1;
    }

    document.getElementById("item" + count).checked = true;

}