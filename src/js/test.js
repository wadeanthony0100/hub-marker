
//start by dropping all persistent data
dropAllBookmarks(function(){

 storeUserData("wadeanthony0100", function(){
    getUsername(function(val){
      console.log('got username: ' + val);
    });
  });

  getAllBookmarks(function(val){console.log("val before insertions is: "+val);});

  addRepoToBookmarks(new repository('Holo Desk', 'https://github.com/rit-sse/holo-desk', 'rit-sse'), function(){
    addRepoToBookmarks(new repository('Richland Borough', 'https://github.com/wadeanthony0100/Richland-Borough-dot-org', 'wadeanthony0100'), function(){
      addRepoToBookmarks(new repository('QDB 3.0', 'https://github.com/rit-sse/qdb-3.0', 'rit-sse'), function(){
        getAllBookmarks(function(val){console.log(val);});
      });
    });
  });

});

