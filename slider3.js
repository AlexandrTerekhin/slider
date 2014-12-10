var wrapper = document.getElementsByClassName("slidewrapper");
for (var i = 0; i < wrapper.length; i++) {
    createSlider(wrapper[i]);
}

function hidePictures (images){ // прячем картинки для слайдера
    for (var i = 0; i < images.length; i++){
        images[i].style.display = 'none';
    }
}

function createButton (name, innerText, parent){ // создаем кнопки слайдера

    if (name === 'prevpict') {
        var leftButton = document.createElement('div'); //создаем элемент
        leftButton.id = name+i; //присваиваем ID
        leftButton.className = name; //присваиваем класс
        leftButton.innerHTML = innerText;
        leftButton.addEventListener("click", function() { prevImage(0);});
        parent.appendChild(leftButton);
        return 'leftButton';

    } else if(name === 'nextpict') {
        var rightButton = document.createElement('div'); //создаем элемент
        rightButton.id = name+i; //присваеваем ID
        rightButton.className = name; //присваеваем класс
        rightButton.innerHTML = innerText;
        rightButton.addEventListener("click", function() { naxtImage(0);});
        parent.appendChild(rightButton);
        return 'rightButton';
    }
}

function createImage (images, currentImage, parent){ // создаем изображение в слайдере
    var image = document.createElement('img');
    image.id = 'image'+i;
    image.className = 'image';
    image.src = images[currentImage].src;
    parent.appendChild(image);

}

function createSlider (wrapper){ // создаем слайдер
    var images = wrapper.getElementsByTagName("img");
    var currentImage = 0;
    hidePictures(images);

    var newDiv = document.createElement('div');
    newDiv.id = 'slider'+i;
    newDiv.className = 'slider';
    wrapper.appendChild(newDiv);
    createButton('prevpict', 'prev', newDiv);
    createImage(images, currentImage, newDiv);
    createButton('nextpict', 'next', newDiv);

}


