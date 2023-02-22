class Formatter {
  //add static methods here
  static capitalize(string){
     return string.at(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string){
    let words=[];
    let exceptwords=[   
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"]
      words=string.split(' ');
       return words.map((word,i) =>
  {
     return exceptwords.includes(word) && i!=0 ? [word] : word.charAt(0).toUpperCase() + word.slice(1);

  }).join(' ');
}


  }



  

