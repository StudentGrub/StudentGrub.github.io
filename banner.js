
var dropclosebanner = true; // false disables the closebanner, allowing you to style the banner
var closebannerDuration = 14; // Number of days before the closebanner expires, and the banner reappears
var closebannerName = 'closebanner'; // Name of our closebanner
var closebannerValue = 'on'; // Value of closebanner
function createDiv(){
var bodytag = document.getElementsByTagName('body')[0];
var div = document.createElement('div');
div.setAttribute('id','closebanner');
div.innerHTML = '<p>This website is still under contruction.</a>. <a class="close-closebanner-banner" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></p>';
// Be advised the Close Banner 'X' link requires jQuery
// bodytag.appendChild(div); // Adds the closebanner  Banner just before the closing </body> tag
// or
bodytag.insertBefore(div,bodytag.firstChild); // Adds the closebanner  Banner just after the opening <body> tag
document.getElementsByTagName('body')[0].className+=' closebannerbanner'; //Adds a class tothe <body> tag when the banner is visible
createclosebanner(window.closebannerName,window.closebannerValue, window.closebannerDuration); // Create the closebanner
}
function createclosebanner(name,value,days) {
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
if(window.dropclosebanner) {
document.closebanner = name+"="+value+expires+"; path=/";
}
}
function checkclosebanner(name) {
var nameEQ = name + "=";
var ca = document.closebanner.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
function eraseclosebanner(name) {
createclosebanner(name,"",-1);
}
window.onload = function(){
if(checkclosebanner(window.closebannerName) != window.closebannerValue){
createDiv();
}
}
 
function removeMe(){
var element = document.getElementById('closebanner');
element.parentNode.removeChild(element);
}