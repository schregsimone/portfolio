// if ($(window).width() > 600) {
//   alert('Please open on mobile device!');
// }

/* Funktion um per Klick zwischen Menu und Close zu wechseln*/
function replace(hide, show) {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
}

/* Set the height of the about tab to 100% */
function openNav() {
    document.getElementById("about-tab").style.height = "100%";
    document.getElementById("social-icons").style.visibility = "visible";
}

/* Set the height of the about tab to 0 */
function closeNav() {
    document.getElementById("about-tab").style.height = "0";
    document.getElementById("social-icons").style.visibility = "hidden";
}

/* Text in About ändern */
var text = ["multimedia production","good design","creative ideas","dancing","laughing","italian food","fluffy pullovers","travelling","all things sweet","shooting stars","snowboarding","bordeaux red","music festivals","chewing gums","rabbits","fast walking","memes","friendly people","Harry Potter","summer evenings","indie music","rollercoasters","chicken nuggets","audiobooks","photo exhibitions"];
var index = 0;

$("#likes").fadeOut("slow");

setInterval(function(){
    $("#likes").stop().html(text[index]).fadeIn("slow",function(){
    	index++;
        $("#likes").delay(1000).fadeOut("slow");
    	if (index == 25) {
        	index = 0;
    	};
    });
},2400);
