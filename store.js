
function storeUserData(username, callback){
  chrome.storage.sync.set({'username':username}, function(){
    callback();
  });
}

function getUsername(callback){
  chrome.storage.sync.get('username', function(val){
    callback(val.username);
  });
}

function addRepoToBookmarks(repo, callback){
  getAllBookmarks(function(val){
    // add to an existing list of repos
    if (val.repos){
      chrome.storage.sync.set({'repos': val.repos.concat(repo)}, function(){
        callback();
      });
    }
    // create an initial list of repos
    else{
      chrome.storage.sync.set({'repos': [repo]}, function(){
        callback();
      });
    }
  });
}

// TODO 
function removeRepoFromBookmarks(repo, callback){}

function getAllBookmarks(callback){
  chrome.storage.sync.get('repos', function(val){
    callback(val);
  });
}

function dropAllBookmarks(callback){
  chrome.storage.sync.remove('repos', function(){
    callback();
  });
}

