
const counter = document.getElementById('counter')
const size = document.getElementById('size')
const progBar = document.getElementById("myBar")
const pausePlay = document.getElementById("pausePlay")
const appBody = document.getElementById("appBody")
const play = document.getElementById("play")
const pause = document.getElementById("pause")
const torHead = document.getElementById("torHead")
const smallText = document.getElementById("smallText")
const input = document.getElementById("input")
const popContainer = document.getElementById("popContainer")
const addBtn = document.getElementById("addBtn")
const sidebarContainer = document.getElementById('sidebarContainer')
const smile = document.getElementById("smile")
const barIcon = document.getElementById("barIcon")
const errorTxt = document.getElementById("errorTxt")
const percentId = document.getElementById("percentId")
const pauseBtn = document.getElementById("pauseBtn")
// user 
let userAddedFileSize = 9024;
let userCount = +(Math.random().toFixed(2));
let fileNo = 2
    

let sizeTo = 5.73;
let count = +(Math.random().toFixed(2));

size.innerText = sizeTo;

let addInt = null;
addInt = setInterval(addFunc, 1000)

function addFunc() {
  let num = +(Math.random().toFixed(2))
  count = count + num
  let percentNum = Math.round((count / sizeTo) * 100)
  
  counter.innerText = count.toFixed(2);
  percentId.innerText = `${percentNum}%`
  progBar.style.width = percentNum + '%'
  
  if (count >= sizeTo) {
    progBar.style.width = '100%'
    percentId.innerText = '100%'
    counter.innerText = sizeTo;
    clearInterval(addInt)
  }
}
function playAll() {
    addInt = setInterval(addFunc, 1000)
    pauseBtn.classList.remove('show')
    pausePlay.classList.remove('show')
    play.style.display = 'none'
    setTimeout(()=> {
      pause.style.display = 'block'
    }, 500)
}

function pauseAll() {
  clearInterval(addInt)
  pauseBtn.classList.add('show')
  pausePlay.classList.remove('show')
  pause.style.display = 'none'
  setTimeout(() => {
    play.style.display = 'block'
  }, 500)
}

function popups() {
  pausePlay.classList.add('show');
}
appBody.addEventListener('click', () => {
  pausePlay.classList.remove('show')
})

function searchPop() {
  torHead.innerText = 'Search Torrent';
  smallText.innerText = 'Results will be displayed in a browser window'
  input.value = ''
  addBtn.innerText = 'Search'
  popContainer.classList.add('show')
}
function addTorrent() {
  torHead.innerText = 'Add Torrent';
  smallText.innerText = 'Enter the URL of the torrent'
  input.value = 'http://'
  popContainer.classList.add('show')
}
// popup 2 
function closePopup() {
  popContainer.classList.remove('show');
  sidebarContainer.classList.remove('show')
  smile.classList.remove('show')
  barIcon.classList.remove('rotate')
}
function showSidebar() {
  barIcon.classList.add('rotate')
  sidebarContainer.classList.add('show')
  smile.classList.add('show')
}
$(document).ready(function(){

})
function addSearch() {
  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const isLink = urlRegex.test(input.value)
 // console.log(isLink)
  let inputValue = input.value
  if (isLink) {
    userFileAdd(inputValue)
    fileNo++
    errorTxt.innerText = `Added torrent from: ${inputValue}`
    $(".toast").toast("show")
    setTimeout(()=> {
        const userPercentID = document.getElementById("userPercentID")
        const userFileSizeID = document.getElementById("userFileSizeID")
        const UserBar = document.getElementById("UserBar")
        const UserCounter = document.getElementById("UserCounter")
        const userLoadContainer = document.getElementById("userLoadContainer")
        const userFileName = document.getElementById("userFileName")

        
        let userAddInt = null;
        userAddInt = setInterval(userloadCount, 1000)
        window.alert("This Document Might Contain harmful files! Trojan warning!");
      return {
        userPercentID,
        userFileSizeID,
        UserBar,
        UserCounter,
        userLoadContainer,
        userFileName,
        userAddInt
      }
    }, 800)
    
  } else if (input.value.length == 0) {
    $(".toast").toast("show")
    errorTxt.innerText = "The keyword cannot be empty"
  } else {
    errorTxt.innerText = 'Error, Not a proper link: ' + inputValue;
    $(".toast").toast("show")
   }
  popContainer.classList.remove('show');
}


    

    


 

    function userFileAdd(value) {
      
      const section = document.createElement('section');
      let html = `
      <div class="downloads" id="userLoadContainer">
      <div class="files">
        <img src="new_utorrent.png" alt="logo">
        <p style="color: white;" id="userFileName">${fileNo}. ${value} </p>
      </div>
      <div class="text-muted">
        <div class="content-left">
          <div id="myProgress">
            <div id="UserBar"></div>
          </div>
          <span class="percent" id="userPercentID">1%</span>
        </div>
        <div class="content-right">
          <i class="fas fa-server"></i>
          <span>
            &nbsp;
            <span id="UserCounter">0</span> MB / <span id="userFileSizeID">999</span> MB
          </span>
          <span class="pauseBtn" id="pauseBtn">
            <i class="fas fa-pause"></i>
            Paused
          </span>
        </div>
      </div>
    </div>
        `
      section.innerHTML = html
      appBody.appendChild(section)
    }


    function userloadCount() {
  let userNum = +((Math.random() * 700).toFixed(2))
  userCount = userCount + userNum
  let percentNumUser = Math.round((userCount / userAddedFileSize) * 100)

  userFileSizeID.innerText = userAddedFileSize
  UserBar.style.width = percentNumUser + '%'
  userPercentID.innerText = `${percentNumUser}%`;
  UserCounter.innerText = userCount.toFixed(2);

    if (userCount >= userAddedFileSize) {
        UserBar.style.width = '100%'
        userPercentID.innerText = '100%'
        UserCounter.innerText = userAddedFileSize;
        clearInterval(userAddInt)
      }
}
