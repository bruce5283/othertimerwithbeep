// https://www.chartjs.org/


window.function = function (time, fweight, align, fsize, width, height) {

  // data
  time = time.value ?? "";
  fweight = fweight.value ?? "600";
  align = align.value ?? "center";
  fsize = fsize.value ?? "20";
  width = width.value ?? "100";
  height = height.value ?? "100";

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
  </head>
  <body>
   <!-- Display the countdown timer in an element -->
<input type="button" value="start countdown" id="start" />
<input type="button" value="stop countdown" id="stop" />
<div id="countdown_text"></div>
<style>

.container {
text-align: center;
width: ${width}vw;
height: ${height}vh;
}

#btn {
text-align: center;
font-family: verdana;
color: white;
font-size: 15px;
width: 200px;
background-color: #12A89E;
padding: 10px 24px;
border: none;
border-radius: 8px;
}

#pre {
font-weight: ${fweight};
text-align: ${align};
font-family: verdana;
font-size: ${fsize}px;
}

@media (prefers-color-scheme: dark) {

#pre {
color: #12A89E;
}
}

@media (prefers-color-scheme: light) {

#pre {
color: #12A89E;
}
}

</style>
<script>
var countdown;
var countdown_number;
var audio = new Audio('http://www.freshly-ground.com/misc/music/20060826%20-%20Armstrong.mp3');

function countdown_trigger() {
    if (countdown_number > 0) {
        countdown_number--;
        document.getElementById('countdown_text').innerHTML = countdown_number;
        if (countdown_number > 0) {
            countdown = setTimeout(countdown_trigger, 1000);
        }

        if (countdown_number === 0) {
            audio.play()
        }
    }
}

function countdown_clear() {
    clearTimeout(countdown);
}

function countdown_init() {
    countdown_number = 11;
    countdown_trigger();
}

document.getElementById('start').onclick = countdown_init;
document.getElementById('stop').onclick = countdown_clear;
</script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
