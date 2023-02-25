const myImages = [
    {
        src: "/images/0004541_orthanc_1200,png",
        description: "The tower of orthanc",
        alt: "orthanc"
    },
    {
        src: "/images/binary_14.jpg",
        description: "some meaningless binary",
        alt: "binary"
    },
    {
        src: "/images/e918806ad1952f0.png",
        description: "cute dragon",
        alt: "dragon"
    },
    {
        src: "/images/Gelatinous_cube_attack-5e.webp",
        description: "a gelatinous cube attacking an unsuspecting dwarf",
        alt: "that poor dwarf"
    }
    {
        src: "/images/sphere00.jpg",
        description: "a lonely sphere",
        alt: "sphere"
    }
];

const showcaseImageElement = document.getElementById('showcase-image');
const showcaseImageDescription = document.getElementById('showcase-description');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentIndex = 0;

showcaseImageElement.src = myImages[currentIndex].src
showcaseImageElement.alt = myImages[currentIndex].alt
showcaseImageDescription.innerText = myImages[currentIndex].description

function changeMyImage(e){
    if (e.target.id === nextButton.id) {
        if (currentIndex < myImages.length -1) {
            currentIndex += 1
        } else {
            currentIndex = 0
        } 
    }   
    if (e.target.id === prevButton.id) {
        if (currentIndex > 0) {
            currentIndex -= 1
        } else {
            currentIndex = myImages.length - 1
        }
    }
    
    showcaseImageElement.src = myImages[currentIndex].src
    showcaseImageElement.alt = myImages[currentIndex].alt
    showcaseImageDescription.innerText = myImages[currentIndex].description
}

nextButton.onclick = changeMyImage;
prevButton.onclick = changeMyImage;
