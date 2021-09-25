//A FEW BOOKMARKLETS I CAME UP WITH

//SIMPLE DARK MODE

javascript: if (typeof all === 'undefined') {let all = [];}
all = document.getElementsByTagName('*');
for (let i = 0; i < all.length; i++) { if(typeof all[i].style !== 'undefined'){all[i].style.fontFamily = "Comic Sans MS";}}
document.getElementsByTagName("html")[0].style.filter = "invert()";
if (typeof elems === 'undefined') {let elems = [];}
elems = document.querySelectorAll(" a, img, video");
for (let j = 0 ; j < elems.length; j++) {
if((elems[j].nodeName == "A" && (elems[j].style.background != "" || elems[j].style.backgroundImage != "")) || elems[j].nodeName != "A"){elems[j].style.filter = "invert()";}
}
void 0;


//EDITABLE WEBSITE

javascript: 
document.body.contentEditable = true; 
let all_links = document.getElementsByTagName("a");  
for(let i=0; i<all_links.length; i++){     all_links[i].removeAttribute("href"); } 
void 0;


//ADD TO CLIPBOARD

javascript:
if(typeof clipBoard === 'undefined'){let clipBoard = "";} 
window.focus(); 
setTimeout(async () => {
clipBoard = await navigator.clipboard.readText();
navigator.clipboard.writeText(clipBoard + " | " + window.getSelection()); 
}, 500); 
void 0;


//NOTEPAD SIMPLE

data:text/html;charset=utf-8,
<html contenteditable style="background-color:%23222; padding: 5%; color: %23EEE; font-family: Courier New; font-size: 20px;"></html>


//NOTEPAD BETTER

data:text/html;charset=utf-8,
<!DOCTYPE html>
<html>
<head> <title>My text editor</title>
<style>
body{height: 80vh;background:%232E2E2E;padding: 1.5rem; margin: 0;}
div:focus{ outline: none; }
.editor { background: %231E1E1E; height: 90%; width: 90%; border-radius: 10px; padding: 1rem; overflow: scroll; max-height:80%; font-family: Courier New; font-weight:bold; color:%23FFFFFF; font-size:1rem;  line-height:1.4;  max-width:90%;  height: 90%;  max-height:90%;  margin:0 auto;  }  
.editor::before { counter-reset: listing; }
.editor div { counter-increment: listing; }
.editor div::before { color: %23555; white-space: pre-wrap;  content: counter(listing) ". ";  display: inline-block;  width: 3em;  padding-left: auto;  margin-left: auto;  text-align: right; }  
.buttons {  padding-left: 5%;  padding-right: 5%;  padding-top: 0.5rem;  padding-bottom: 0.5rem;  }  
button { background: %23555;  color: %23EEE;  font-family: Courier New;  font-weight:bold;  padding: 8px 16px;  border-radius: 5px;  text-align: center;  font-size: 16px;  margin: 4px 2px;  opacity: 0.6;  transition: 0.3s;  display: inline-block;  text-decoration: none;  cursor: pointer;  }  
button:hover {opacity: 1}
::-webkit-scrollbar { height: 0px;  width: 20px;  background-color: %23222; }
::-webkit-scrollbar-thumb { background-color: %235E5E5E;  border-radius: 20px;  border: 6px solid transparent;  background-clip: content-box; }
</style>
</head>
<body>
<div class="editor" spellcheck="false"> <div contenteditable="true"> </div> </div>
<div class="buttons"> <button onclick="downloadContent(1)">Save</button> <button onclick="changeFontSize(2)">Text Size +</button> <button onclick="changeFontSize(-2)">Text Size -</button> </div>
<script>
function changeFontSize(val){ let txt = document.getElementsByClassName('editor')[0]; let style = window.getComputedStyle(txt).getPropertyValue('font-size'); let currentSize = parseFloat(style); txt.style.fontSize = (currentSize + val) + 'px'; }
function downloadContent(tmp){ let a = document.body.appendChild(document.createElement("a")); let today = new Date(); let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "-" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); a.download = "export" + date.toString() + ".txt"; let textToSave = document.getElementsByClassName("editor")[0]; a.href = "data:text/plain;charset=utf-8," + textToSave.innerText; a.click(); }
</script>
</body>
</html>


//SKIP ADS ON YOUTUBE

javascript: 
if(document.getElementsByClassName("video-ads")[0].innerHTML !==""){ 
var banner = false; 
for(var i = 0; i < document.getElementsByClassName("ytp-ad-overlay-close-button").length; i++){ document.getElementsByClassName("ytp-ad-overlay-close-button")[i].click(); banner = true;} 
if(banner === false){ document.getElementsByClassName("html5-main-video")[0].currentTime = document.getElementsByClassName("html5-main-video")[0].duration; document.getElementsByClassName("ytp-ad-skip-button")[0].click();} 
}
void 0;


//BYPASS TWITTER LOGIN

javascript: 
document.querySelectorAll('[role="dialog"]')[document.querySelectorAll('[role="dialog"]').length - 1].remove(); 
document.getElementsByTagName("html")[0].style.overflowY = "scroll";
void 0;


//BYPASS QUORA LOGIN

javascript: 
document.getElementsByClassName("qu-zIndex--blocking_wall")[0].remove(); 
document.getElementsByClassName("qu-overflow--hidden")[0].style.filter = ""; 
document.getElementsByClassName("qu-overflow--hidden")[0].classList.remove("qu-overflow--hidden"); 
void 0;


//OPEN NEW YOUTUBE CONTENT
javascript: 
document.querySelectorAll("ytd-guide-collapsible-entry-renderer > ytd-guide-entry-renderer> a")[document.querySelectorAll("ytd-guide-collapsible-entry-renderer > ytd-guide-entry-renderer> a").length-1].click();	
if (typeof channels === 'undefined') {let channels = [];}
channels = document.querySelectorAll("#newness-dot");
if (typeof newList === 'undefined') {let newList = [];}
newList = [];  
for(let i = 0; i < channels.length; i++){
 if(channels[i].parentNode.parentNode.parentNode.querySelector("a > tp-yt-paper-item > #newness-dot").offsetWidth > 0){
  newList.push(channels[i].parentNode.parentNode);
 } 
} 
console.log(newList); 
if (typeof page === 'undefined') {let page = 0;}
page = 0;
newList[page].click(); 
page++; 
if (typeof initiator === 'undefined') {let initiator = 0;} 
initiator = setTimeout(function(){ 
 let videoRows = document.querySelectorAll("ytd-item-section-renderer");
 for(let i = 0; i < videoRows.length; i++){
  if(videoRows[i].querySelector("#contents > ytd-shelf-renderer > div > div > div > h2 > #image-container > a") !== null && videoRows[i].querySelector("#contents > ytd-shelf-renderer > div > div > div > h2 > #image-container > a").title == "Uploads"){
   let link = videoRows[i].querySelector("#contents > ytd-shelf-renderer > div > #contents > yt-horizontal-list-renderer > #scroll-container > div > ytd-grid-video-renderer > div > div > div > h3 > a").href;
   if(page < newList.length){newList[page].click();}
   page++;
   window.open(link, '_blank');
   break;
  }
 }; 
 clearTimeout(initiator);
}, 1000);  
 
window.onfocus = function(){
 if(page <= newList.length){
  let videoRows = document.querySelectorAll("ytd-item-section-renderer");
  for(let i = 0; i < videoRows.length; i++){
   if(videoRows[i].querySelector("#contents > ytd-shelf-renderer > div > div > div > h2 > #image-container > a") !== null && videoRows[i].querySelector("#contents > ytd-shelf-renderer > div > div > div > h2 > #image-container > a").title == "Uploads"){               let link = videoRows[i].querySelector("#contents > ytd-shelf-renderer > div > #contents > yt-horizontal-list-renderer > #scroll-container > div > ytd-grid-video-renderer > div > div > div > h3 > a").href;
   if(page < newList.length){newList[page].click();}
   page++;
   window.open(link, '_blank');
   break;
   } 
  }
 }  
}
















