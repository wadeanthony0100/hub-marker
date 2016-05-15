
let ApiRoot = 'https://api.github.com/'
let AuthedUsername = 'wadeanthony0100'
let AuthedUser = {}

function getGithubUserJson(callback){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", ApiRoot + 'users/' + AuthedUsername, true); // true for asynchronous
  xmlHttp.send(null);
}

getGithubUserJson((val) => {
  AuthedUser = JSON.parse(val);
  //console.log(AuthedUser['name']);
});

function emptyField(){
  document.getElementById('authed-user').value = '';
}
