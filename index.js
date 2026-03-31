const clickMe = document.getElementById('clickme');


const farts = [
    new Audio('./freesound_community-fart-83471.mp3'),
    new Audio("./apebble-fart-5-228245.mp3"),
    new Audio("./apebble-fart-7-228247.mp3"),
    new Audio("./virtualzero-funny_fart-for-memes-hd-379346.mp3")
];


farts.forEach(sound => sound.preload = "auto");

let number = 0;
let timerStarted = false;

clickMe.onclick = (e) => {
    number++;
    
  
    const randomIndex = Math.floor(Math.random() * farts.length);
    farts[randomIndex].currentTime = 0;
    farts[randomIndex].play();

    
    clickMe.classList.remove('shake-it');
    void clickMe.offsetWidth;             
    clickMe.classList.add('shake-it');

    
    if (number === 1) {
        clickMe.innerText = "😮‍💨 Phew... you released me";
    } 
   
    else if (number === 2) { 
        clickMe.innerHTML = `
            <h4>you like that dont you? 👀</h4>
            <img src="./ben doakes.webp" alt="meme">
        `;
    }
    
    else if (number === 3) {
        
        clickMe.innerHTML = `
            <h4>Wait... why are you still clicking? 🤨</h4>
            <img src="./ben doakes.webp" alt="meme">
        `;
    }
    
    else if (number >= 4 && !timerStarted) {
        timerStarted = true;
        clickMe.innerHTML = "<h4>Seriously, at this point get some help...</h4>";

        setTimeout(() => {
            clickMe.innerHTML = `
                <video id="memeVideo" playsinline webkit-playsinline autoplay>
                    <source src='./james doakes dexter meme [kIte0CuJZ5E].webm' type='video/webm'>
                </video>
            `;
            const vid = document.getElementById('memeVideo');
            vid.play().catch(() => console.log("Video needs one more click to play sound"));
        }, 3000); 
    }
    }
