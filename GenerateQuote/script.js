function generate() {
    var quotes = {
        "deepak chopra":"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.",

        "carrie bradshaw":"Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.",

        " Pierce Brown":"Man cannot be freed by the same injustice that enslaved it."
    }
    var authors=Object.keys(quotes);
    
    // for (let i = 0; i < authors.length; i++) {
    //     var author=authors[i];
      
        
    
  
    //console.log(authors);
    var author=authors[Math.floor(Math.random()*authors.length)];
    
   var quote=quotes[author];
   

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
    }

