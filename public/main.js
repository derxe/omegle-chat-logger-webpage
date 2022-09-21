let chats = {}

function loadAllChats() {
  firebase.database().ref('chats').once('value', (snap)=> {
    var totalRecord =  snap.numChildren();
    console.log("Number of chats: " + totalRecord);
    chats = snap;
  });
}

function drawChats() {

}



document.addEventListener('DOMContentLoaded', function() {
  const loadEl = document.querySelector('#debuginfo');
  try {
    let app = firebase.app();
    let features = [
      'auth', 
      'database'
    ].filter(feature => typeof app[feature] === 'function');

    loadAllChats();
    loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
  } catch (e) {
    console.error(e);
    loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
  }
});
