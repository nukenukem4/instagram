@@ -0,0 +1,49 @@
var content = document.getElementsByName(".content");

function createItem(lorem, lorem, ...) {
	var feed = document.createElement("div");
	feed.setAttribute("class", "feed");

    var head = document.createElement("div");
    head.setAttribute("class", "head");
    
	var profile = document.createElement("a");
    
    var photosq = document.createElement("div");
    photosq.setAttribute("class", "photosq");
    
    var profilePhoto = document.createElement("img");
    profilePhoto.setAttribute("src", "../img/girlsq.jpg");
    
    var profileName = document.createElement("h3");
    
    var date = document.createElement("date");
  
	var photo = document.createElement("img");
	img.setAttribute("src", "../img/girl.jpg");
    
    var text = document.createElement("div");
    text.setAttribute("class", "text");
    
    var Coments = document.createElement("ul");
    coments.setAttribute("class", "coments");
    
    
    var likes = document.createElement("li");
    like.setAttribute("id", "likes");
    likes.textContent ="<b>" + likesNum + "likes </b>";
    
    var com = document.createElement("li")
    
    var form = document.createElement("form")
    
    var like = Document.createElement("input")
    like.setAttribute("type","checkbox")
    like.setAttribute("id","like")
    
    var likel = document.createElement("label")
    likel.setAttribute("for","like")

	content.appendChild(feed);
	
};