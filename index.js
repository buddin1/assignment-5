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
     

// history 
function setupCallButton(Id1, Id2, Id3) { 
    document.getElementById(Id1).addEventListener('click', function() {
        let destination = document.getElementById(Id2).innerText;
        let destinationNumber = document.getElementById(Id3).innerText;
        const now = new Date();
        const time = now.toLocaleTimeString();
        const historyDiv =document.createElement('div');
        historyDiv.classList.add('flex', 'justify-between', 'items-center', 'p-3','bg-[#fafafa]', 'rounded-lg', 'shadow-md');
        historyDiv.innerHTML = `
          <div class="flex flex-col">
            <p class="text-sm font-semibold text-gray-900">${destination}</p>
            <p class="text-sm text-gray-500 mt-1">${destinationNumber}</p>
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-900">${time}</p>
          </div>`;
     document.getElementById('call-history').prepend(historyDiv);

        
    });}

    setupCallButton('call-1', 'call-destination1', 'call-num1');
    setupCallButton('call-2', 'call-destination2', 'call-num2');
    setupCallButton('call-3', 'call-destination3', 'call-num3');
    setupCallButton('call-4', 'call-destination4', 'call-num4');
    setupCallButton('call-5', 'call-destination5', 'call-num5');
    setupCallButton('call-6', 'call-destination6', 'call-num6');
    setupCallButton('call-7', 'call-destination7', 'call-num7');
    setupCallButton('call-8', 'call-destination8', 'call-num8');
    setupCallButton('call-9', 'call-destination9', 'call-num9');

    document.getElementById('clear-btn').addEventListener('click', function() {
document.getElementById('call-history').innerHTML = '';
    });


