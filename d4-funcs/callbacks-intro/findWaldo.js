const findWaldo = function(names, found) {
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name === "Waldo") {
        found(name , i);   // execute callback
      }
    }
  }
  
  const actionWhenFound = function(name ,index) {
    console.log("Found " + name + " " + "on index " + index );
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
  