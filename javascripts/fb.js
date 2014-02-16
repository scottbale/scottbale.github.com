
window.fbAsyncInit = function() {
    FB.init({
        appId      : "153693303582",
        status     : true,
        xfbml      : true
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); 
    js.id = id;
    js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1&appId=153693303582";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function share(s){
    FB.ui({
        method: 'feed',
        link: 'https://developers.facebook.com/docs/dialogs/',
        app_id: "153693303582",
        name: 'I got ' + s + '. Which industrial solvent are you?',
        link: 'http://balehaus.org/fb.html',
        picture: 'http://balehaus.org/images/TolueneBromination2006.png'
    }, function(response){});
}

$(document).ready(function(){
    $("a.list-group-item").click(function(e) {
        console.log("click");
        e.preventDefault();
        e.stopPropagation();
        $("div.solvent").hide();
        $("div.solvent", e.target ).show( "fold", 1000 );
    });

    $("div.fb-share-button").click(function(e) {
        share(e.target.data("solvent"));
    });
});

