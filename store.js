
function storeUserData(username, callback){
  chrome.storage.sync.set({'username':username}, function(){
    console.log("username stored.");
    callback();
  });
}

function getUsername(callback){
  chrome.storage.sync.get('username', function(val){
    console.log('got username.');
    callback(val.username);
  });
}
