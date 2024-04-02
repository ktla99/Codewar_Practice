function isItLetter(character) {
    var letters = /^[A-Za-z]+$/;
     if(character.match(letters))
       {
        return true;
       }
     else
       {
       return false;
       }
  }