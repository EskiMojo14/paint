var pictureInfo = {
    image1: {
        url: "img/1.jpg",
        name: "Abstract Pattern",
        poster: "Annie Spratt",
        discrim: "@anniespratt"
    },
    image2: {
        url: "img/2.jpg",
        name: "Sea of Marble",
        poster: "Bia Andrade",
        discrim: "@biawashere"
    },
    image3: {
        url: "img/3.jpg",
        name: "Abstract Painting",
        poster: "Laura Converse",
        discrim: "@lurm"
    }
}

var i = 1;
var t = Object.keys(pictureInfo).length;
console.log(t);

document.getElementById('position').innerHTML = i;
document.getElementById('total').innerHTML = t;

function loadImage(i, t) {
    
    var container = document.getElementById('container');
    var poster = document.getElementById('poster');
    var discrim = document.getElementById('discrim');
    var name = document.getElementById('name');
    var back = document.getElementById('back');
    var forward = document.getElementById('forward');

    if (t == 1) {
        back.classList.add('image-display__navigation--disabled');
        forward.classList.add('image-display__navigation--disabled');
    } else if (i == 1) {
        back.classList.add('image-display__navigation--disabled');
        forward.classList.remove('image-display__navigation--disabled');
    } else if (i === t) {
        back.classList.remove('image-display__navigation--disabled');
        forward.classList.add('image-display__navigation--disabled');
    } else {
        back.classList.remove('image-display__navigation--disabled');
        forward.classList.remove('image-display__navigation--disabled');
    }
    document.getElementById('position').innerHTML = i;
    poster.innerHTML = pictureInfo['image' + i].poster;
    discrim.innerHTML = pictureInfo['image' + i].discrim;
    name.innerHTML = pictureInfo['image' + i].name;
    container.style.backgroundImage = 'url(' + pictureInfo['image' + i].url + ')';

    var img = new Image();

    img.onload = function(){
        var height = img.height;
        var width = img.width;
        container.style.height = ((height / width) * container.clientWidth) + 'px';
    }

    img.src = pictureInfo['image' + i].url;
}

loadImage(i, t);

back.addEventListener("click", function (e) {
    i--;
    loadImage(i, t);
});
forward.addEventListener("click", function (e) {
    i++;
    loadImage(i, t);
});