//start by dropping all persistent data
dropAllBookmarks(function(){

  storeUserData("wadeanthony0100", function(){
    getUsername(function(val){
      console.log('got username: ' + val);
    });
  });

  getAllBookmarks(function(val){console.log("val before insertions is: "+val);});

  addRepoToBookmarks(new repository('wad', 'wad', 'wad'), function(){
    addRepoToBookmarks(new repository('wad1', 'wad1', 'wad1'), function(){
      addRepoToBookmarks(new repository('wad2', 'wad2', 'wad2'), function(){
        addRepoToBookmarks(new repository('wad3', 'wad3', 'wad3'), function(){
          getAllBookmarks(function(val){console.log(val);});
        });
      });
    });
  });

});

