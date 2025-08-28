// heart-button click js
function heartClick(id) {
 document.getElementById(id).addEventListener('click', function() {
    heartElement = document.getElementById(id);
    heartCountElement = document.getElementById('heart-count'); 
    let count = parseInt(heartCountElement.innerText);
    count += 1;
    heartCountElement.innerText = count;
    
});   
}
heartClick('heart1');
heartClick('heart2');
heartClick('heart3');
heartClick('heart4');   
heartClick('heart5');
heartClick('heart6');
heartClick('heart7');
heartClick('heart8');
heartClick('heart9');

// call js 
function callClick(id1, id2, id3) {
    document.getElementById(id1).addEventListener('click', function() {
let destination = document.getElementById(id2).innerText;
let destinationNumber = document.getElementById(id3).innerText;
let coin = document.getElementById('coin');
let coinCount = parseInt(coin.innerText);

 if(coinCount >=20){
     coinCount -= 20;
 coin.innerText = coinCount;
    alert('📞'+'Calling to ' + destination  +' ' + destinationNumber + ' ...');
 }
 else{
    alert('❌ You have no enough coin to make a call. Please buy more coin.');
 }
});
}
callClick('call-1', 'call-destination1', 'call-num1');
callClick('call-2', 'call-destination2', 'call-num2');
callClick('call-3', 'call-destination3', 'call-num3');  
callClick('call-4', 'call-destination4', 'call-num4');
callClick('call-5', 'call-destination5', 'call-num5');
callClick('call-6', 'call-destination6', 'call-num6');
callClick('call-7', 'call-destination7', 'call-num7');
callClick('call-8', 'call-destination8', 'call-num8');
callClick('call-9', 'call-destination9', 'call-num9');
// copy btn 
function copyClick(id1, id2) {
    document.getElementById(id1).addEventListener('click', function() {
    let copyText = document.getElementById(id2).innerText;
    let copyCountElement = document.getElementById('copy-count');
    let count = parseInt(copyCountElement.innerText);
    count += 1;
    copyCountElement.innerText = count;
    alert('Number Copied : ' + copyText);
    navigator.clipboard.writeText(copyText);
});
}
copyClick('copy-btn-1', 'call-num1')
copyClick('copy-btn-2', 'call-num2')
copyClick('copy-btn-3', 'call-num3')
copyClick('copy-btn-4', 'call-num4')
copyClick('copy-btn-5', 'call-num5')    
copyClick('copy-btn-6', 'call-num6')
copyClick('copy-btn-7', 'call-num7')
copyClick('copy-btn-8', 'call-num8')
copyClick('copy-btn-9', 'call-num9')




// document.getElementById('call-destination1').addEventListener('click', function() {
// let destination = document.getElementById('call-destination1').innerText;
// let destinationNumber = document.getElementById('call-num-1').innerText;  
// const div = document.createElement('div');
// div.innerText = 

// });


// history 
document.getElementById('history-btn').addEventListener('click', function() {
    const historySection = document.getElementById('history-section');
    historySection.classList.remove('history-section');
    
});