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
document.getElementById('call-1').addEventListener('click', function() {
    alert('Calling...');
});
