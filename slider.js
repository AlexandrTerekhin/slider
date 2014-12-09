var wrapper = document.getElementsByClassName("slidewrapper");
//for (i = 0; i < wrapper.length; i++) {

    var images = wrapper[0].getElementsByTagName("img");
    var pointer = 0;

    for (j = 0; j < images.length; j++) {
        images[j].style.display = "none";
    }
    var newDiv = document.createElement('div');
    newDiv.id = 'slider';
    document.body.appendChild(newDiv);
    var leftButton = document.createElement('div');
    leftButton.id = 'prevImage';
    leftButton.innerHTML = 'Prev';

    var rightButton = document.createElement('div');
    rightButton.id = 'nextImage';
    rightButton.innerHTML = 'Next';

    var blockImage = document.createElement('div');
    blockImage.id = 'blockImage';
    newDiv.appendChild(leftButton);
    newDiv.appendChild(blockImage);
    newDiv.appendChild(rightButton);

    slider(images);


    var leftBut = document.getElementById('prevImage');
    var rightBut = document.getElementById('nextImage');
    leftBut.addEventListener("click", prevImage);
    rightBut.addEventListener("click", nextImage);

    function slider(imgs) {
        var picture = document.createElement('img');
        var blockImg = document.getElementById('blockImage');
        picture.id = 'mainpict';
        picture.src = imgs[0].src;
        blockImg.appendChild(picture);
    }


    function nextImage() {
        var img = document.getElementById('mainpict');
        pointer++;
        if (pointer > images.length - 1) {
            pointer = 0;
        }
        img.src = images[pointer].src;
    }

    function prevImage() {
        var img = document.getElementById('mainpict');
        pointer--;
        if (pointer < 0) {
            pointer = images.length - 1;
        }
        img.src = images[pointer].src;
    }
//}