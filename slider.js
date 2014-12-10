window.onload = function(){ appendSlider('slidewrapper');};



function appendSlider (classSlider) {
    var wrapper = document.getElementsByClassName(classSlider);
    for (var i = 0; i < wrapper.length; i++) {
        createSlider(wrapper[i], i);
    }
}

function hidePictures (images){ // прячем картинки для слайдера
    for (var i = 0; i < images.length; i++){
        images[i].style.display = 'none';
    }
}

function createButton (name, innerText, parent, i){ // создаем кнопки слайдера

    if (name === 'prevpict') {
        var leftButton = document.createElement('div'); //создаем элемент
        leftButton.id = name+i; //присваиваем ID
        leftButton.className = name; //присваиваем класс
        leftButton.innerHTML = innerText;
        leftButton.addEventListener("click", function() { prevImage(leftButton.id);});
        parent.appendChild(leftButton);
        return 'leftButton';

    } else if(name === 'nextpict') {
        var rightButton = document.createElement('div'); //создаем элемент
        rightButton.id = name+i; //присваеваем ID
        rightButton.className = name; //присваеваем класс
        rightButton.innerHTML = innerText;
        rightButton.addEventListener("click", function() { nextImage(rightButton.id);});
        parent.appendChild(rightButton);
        return 'rightButton';
    }
}

function createImage (images, parent, i){ // создаем изображение в слайдере
    var image = document.createElement('img');
    image.id = 'image'+i;
    image.className = 'image';
    image.currentImage = 0;
    image.src = images[image.currentImage].src;
    parent.appendChild(image);


}

function nextImage(buttonId){
    var numb = buttonId.substr(-1,1);
    var pict = document.getElementById('image'+numb);
    pict.currentImage++;
    if (pict.currentImage > images.length - 1) {
        pict.currentImage = 0;
    }
    pict.src = images[pict.currentImage].src;
}
function prevImage(buttonId){
    var numb = buttonId.substr(-1,1);
    var pict = document.getElementById('image'+numb);
    pict.currentImage--;
    if (pict.currentImage < 0){
        pict.currentImage = images.length - 1;
    }
    pict.src = images[pict.currentImage].src;
}



function createSlider (wrapper, i){ // создаем слайдер
    images = wrapper.getElementsByTagName("img");
    hidePictures(images);

    var newDiv = document.createElement('div');
    newDiv.id = 'slider'+i;
    newDiv.className = 'slider';
    wrapper.appendChild(newDiv);
    createButton('prevpict', 'prev', newDiv, i);
    createImage(images, newDiv, i);
    createButton('nextpict', 'next', newDiv, i);
}
