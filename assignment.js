const copyBtns = document.getElementsByClassName('copy-btn')
for(let copyBtn of copyBtns){
  copyBtn.addEventListener('click',function () {
    const callNumber = copyBtn.parentNode.parentNode.children[2].children[0].innerText
    navigator.clipboard.writeText(callNumber)
      .then(function() {
        alert('Your number copied to clipboard : ' + callNumber);
      })
       const counts = parseInt(document.getElementById('copy-counts').innerText)
    const count = counts + 1
    document.getElementById('copy-counts').innerText = count
  })
}



const favoriteBtns = document.getElementsByClassName('favorite-btn');
 for (let favoriteButton of favoriteBtns){
  favoriteButton.addEventListener('click', 
    function(){
    const favoriteCounts = parseInt(document.getElementById("favorite").innerText)
    const favoriteCount = favoriteCounts + 1
    document.getElementById('favorite').innerText = favoriteCount
}
)} 




const callBtns = document.getElementsByClassName('call-btn'); 
for(let callBtn of callBtns){
  callBtn.addEventListener('click',function(){
    const coins = parseInt(document.getElementById('coins').innerText)
    if(coins < 20  ){
      alert('');
      return;
    }
    document.getElementById('coins').innerText = coins - 20
    const number = callBtn.parentNode.parentNode.children[2].children[0].innerText
    const helplineName = callBtn.parentNode.parentNode.children[1].children[0].innerText
     document.getElementById('coins').innerText = coins - 20
        alert('Calling '+ helplineName+' : ' + number);
    
  })
}






