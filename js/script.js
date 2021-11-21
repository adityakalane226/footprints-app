var winningAudio = new Audio('/footprints app/css/winningsound.mp3')
var losingAudio = new Audio('/footprints app/css/losingsound.mp3')
function check() {
    //condition One
    let Everydaykms = document.getElementById('questionOne').value
    let plant = document.getElementById('questionThree').value
    // if (Everydaykms<10 && plant<10) {
    //     let createElement =document.createElement('div')
    //    createElement.id = "footprintsId"
    //    createElement.innerHTML = '<img src="/footprints app/css/silverfootprints.png" alt="">'
    //    let answer = document.getElementById('answer')
    //    answer.appendChild(createElement)
    //  }
    //  else if(Everydaykms<10 && plant>10){
    //     let createElement =document.createElement('div')
    //     createElement.id = "footprintsId"
    //     createElement.innerHTML = '<img src="/footprints app/css/silverfootprints.png" alt="">'
    //     let answer = document.getElementById('answer')
    //     answer.appendChild(createElement)
    //  }
    //  else if(Everydaykms>10 && plant<10){
    //     let createElement =document.createElement('div')
    //     createElement.id = "footprintsId"
    //     createElement.innerHTML = '<img src="/footprints app/css/blackfootprints.png" alt="">'
    //     let answer = document.getElementById('answer')
    //     answer.appendChild(createElement)
    //  }
    // else{
    //     let createElement =document.createElement('div')
    //    createElement.id = "footprintsId"
    //    createElement.innerHTML = '<img src="/footprints app/css/silverfootprints.png" alt="">'
    //    let answer = document.getElementById('answer')
    //    answer.appendChild(createElement) 
    //  }
    if (Everydaykms<plant) {
            let createElement =document.createElement('div')
           createElement.id = "footprintsId"
           createElement.innerHTML = '<img src="/footprints app/css/silverfootprints.png" alt=""><h1 id="winHeading">SILVER FOOTPRINTS THE MOST BEAUTIFUL FOOTPRINTS</h1>'
           let answer = document.getElementById('answer')
           answer.appendChild(createElement)
           winningAudio.play()
         }
    else if(Everydaykms>plant){
        let createElement =document.createElement('div')
        createElement.id = "footprintsId"
        createElement.innerHTML = '<img src="/footprints app/css/blackfootprints.png" alt="" id="loseImgId"><h1 id="loseHeading">MOST DIRTY FOOTPRINTS</h1>'
        let answer = document.getElementById('answer')
        answer.appendChild(createElement)
        losingAudio.play()
    }
}
function deleteValue() {
    winningAudio.pause()
    losingAudio.pause()
    document.querySelector('input#questionOne').value =""
    document.getElementById('questionThree').value=""
   let deleteCreatedElem = document.getElementById('footprintsId') 
   let answer = document.getElementById('answer')
    answer.removeChild(deleteCreatedElem)
   
}
