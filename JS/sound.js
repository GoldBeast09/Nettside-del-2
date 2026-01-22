
export function playAudio(audioName){
    const audio = new Audio (`../Sounds/${audioName}`);
    audio.play();
}