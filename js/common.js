var content = document.getElementsByClassName("content");

function createItem() {
	var feed = document.createElement("div");
	feed.setAttribute("class", "feed");

    var head = document.createElement("div");
    head.setAttribute("class", "head");
    
	var profile = document.createElement("a");
    
    var photosq = document.createElement("div");
    photosq.setAttribute("class", "photosq");
    
    var profilePhoto = document.createElement("img");
    profilePhoto.setAttribute("src", "img/girlsq.jpg");
    
    var profileName = document.createElement("h3");
    
    var date = document.createElement("date");
  
	var photo = document.createElement("img");
	photo.setAttribute("src", "img/girl.jpg");
    
    var text = document.createElement("div");
    text.setAttribute("class", "text");
    
    var Coments = document.createElement("ul");
    Coments.setAttribute("class", "coments");
    
    var likes = document.createElement("li");
    likes.setAttribute("id", "likes");
    likes.textContent ="<b> 33 likes </b>";
    
    var Com = document.createElement("li")
    Com.textContent = "<a href='#'><b> nukenukem </b></a> Крутое фото!!! "; 
    
    var form = document.createElement("form");
    
    var like = document.createElement("input");
    like.setAttribute("type","checkbox");
    like.setAttribute("id","like");
    
    var likel = document.createElement("label");
    likel.setAttribute("for","like");;
    
    var commentInput = document.createElement("input");
    commentInput.setAttribute("placeholder", "Add a comment");

    feed.appendChild(head);
        head.appendChild(profile);
            profile.appendChild(photosq);
                photosq.appendChild(profilePhoto);
            profile.appendChild(profileName);
        head.appendChild(date);
    feed.appendChild(photo);
    feed.appendChild(text);
        text.appendChild(Coments);
            Coments.appendChild(likes);
            Coments.appendChild(Com);
    feed.appendChild(text);
        text.appendChild(form);
            form.appendChild(like);
            form.appendChild(likel);
            form.appendChild(commentInput);

    return feed
                
};

content.appendChild(createItem());



