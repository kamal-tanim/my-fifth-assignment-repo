// function for copy buttons 

const copyBtns = document.getElementsByClassName('copy-btn')
for (let copyBtn of copyBtns) {
  copyBtn.addEventListener('click', function () {
    const callNumber = copyBtn.parentNode.parentNode.children[2].children[0].innerText
    navigator.clipboard.writeText(callNumber)
      .then(function () {
        alert('Your number copied to clipboard : ' + callNumber);
      })
    const counts = parseInt(document.getElementById('copy-counts').innerText)
    const count = counts + 1
    document.getElementById('copy-counts').innerText = count
  })
}


// function for favorite buttons 

const favoriteBtns = document.getElementsByClassName('favorite-btn');
for (let favoriteButton of favoriteBtns) {
  favoriteButton.addEventListener('click',
    function () {
      const favoriteCounts = parseInt(document.getElementById("favorite").innerText)
      const favoriteCount = favoriteCounts + 1
      document.getElementById('favorite').innerText = favoriteCount
    }
  )
}


// function for history section 

const callBtns = document.getElementsByClassName('call-btn');
for (let callBtn of callBtns) {
  callBtn.addEventListener('click', function () {
    const coins = parseInt(document.getElementById('coins').innerText)
    if (coins < 20) {
      alert('Do not have enough coin ');
      return;
    }
    document.getElementById('coins').innerText = coins - 20
    const number = callBtn.parentNode.parentNode.children[2].children[0].innerText;
    const helplineName = callBtn.parentNode.parentNode.children[1].children[0].innerText
    document.getElementById('coins').innerText = coins - 20
    alert('Calling ' + helplineName + ' : ' + number);
    const localTime = new Date().toLocaleTimeString();
console.log(localTime);

    const history = document.getElementById('call-history')
   const callHistory = document.createElement('div');
    callHistory.innerHTML = ` 
    <ul>
      <li class=" bg-[#F2F2F2] rounded-md p-2  flex justify-between items-center ">
      <div class="w-3/4"><p class="font-semibold"> ${helplineName} </p>
      <span class="text-[#5C5C5C]"> ${number} </span></div>
      <div class="font-bold" > ${localTime} </div>
    </li>
    </ul>
    `;
    history.appendChild(callHistory)
  })
}

document.getElementById('clear-btn').addEventListener('click',function(){
  const history = document.getElementById('call-history');
  history.innerHTML = "";
})




