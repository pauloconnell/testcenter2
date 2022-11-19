// declare var to hold data/code for brands models and welcome page txt below
var welcome =
  "<center><div id='gold'><br><span class='bold'><strong>Try Before you Buy @ The Test Center </strong><br><span class='small'>Presented by:</span><strong> Can Ski</strong> and <strong>Showcase Snowboards</strong><br></span> <br><br>* Mountain Top Ski/Board Testing Locations* <br><b>Test Center</b> provides you the best knowledge through first hand experience.<br>   <br><b>Test Centres are located on either side of the Peak to Peak gondola on both Whistler and Blackcomb.</b><br><br></div><center>";

const headLogoImage = `http://www.completeoutdoors.co.nz/image/catalog/Brand%20Logos/Head-Logo.jpg`;
const blizzardLogoImage = `https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0013/8897/brand.gif?itok=m0mH7kUJ`;
// Image button data for all of our brand lists for skis
var brandLogos =
  '<div class="btnTab"><button id="head"><img class="linkImg" width="70px" height="60px" src="https://www.completeoutdoors.co.nz/image/catalog/Brand%20Logos/Head-Logo.jpg" /></button><button id="blizzard"><img class="linkImg"width="75px" height="75px" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/0013/8897/brand.gif?itok=m0mH7kUJ" /></button><button id="salomon"><img class="linkImg" width="70px" height="60px" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052016/untitled-1_305.png?itok=B3IG8RdO" /></button><button id="rosignol"><img class="linkImg" width="125px" height="50px" src="https://logos-download.com/wp-content/uploads/2019/01/Rossignol_Logo.png" /></button><button id="stockli"><img class="linkImg" width="120px"src="https://i.pinimg.com/originals/ea/5c/56/ea5c56054093bc99e220278e65189d66.jpg" /></button><button id="atomic"><img class="linkImg" src="https://www.sefiles.net/merchant/2362/images/site/atomic-slimC.png?t=1512780708875" /></button><button id="volkl"><img class="linkImg" width="120px" src="https://i.pinimg.com/originals/6c/7a/78/6c7a78139001ddf5e29bac7a6814dfda.png" /></button><button id="k2"><img class="linkImg"  src="https://i1.adis.ws/i/k2/k2-logo" /></button><button id="nordica"><img class="linkImg" width="120px" src="https://api.kicker.de/live/Media.svc/GetMedia/mediaId/442459/width/1012/height/405" /></button></div>';

// Image Button data for all of our brand lists for boards
var brandLogosBoards =
  '<div class="btnTab"><button id="burton"><img class="linkImg" width="80px" height="50px" src="https://2.bp.blogspot.com/-EquuP1ZW-GY/VHOUYDYkeyI/AAAAAAAAGzs/yAtxL1m1ABQ/s1600/Logo%2BBurton.png" /></button><button id="jones"><img class="linkImg" width="75px" height="75px" src="https://www.logolynx.com/images/logolynx/0d/0df799765a74d65c6fdc22e27b911ec3.jpeg" /></button><button id="salomonSB"><img class="linkImg" width="70px" height="60px" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052016/untitled-1_305.png?itok=B3IG8RdO" /></button><button id="libTech"><img class="linkImg" width="100px" height="40px" src="https://cdn.shopify.com/s/files/1/0031/3532/files/lib-tech-snowboards.jpg?11661859022071001809" /></button><button id="gnu"><img class="linkImg" src="https://s7d5.scene7.com/is/image/SummitSports/gnu" /></button><button id="ride"><img class="linkImg" src="https://i1.adis.ws/i/ride/ride_logo" /></button></div>';

var brandSKI =
  "<h2>Ski Brands:</h2><center><div class='btnTab detailWindow'>" +
  brandLogos +
  "<button class='btn-primary' id='head'>Head</button><button class=btn-primary id='blizzard'>Blizzard</button><button class='btn-primary' id='salomon'>Salomon</button><button class = btn-primary id='rosignol'>Rosignol</button><button class='btn-primary' id= 'stockli'>Stockli<button class='btn-primary' id='atomic'>Atomic </button><button class='btn-primary' id='volkl'>Volkl</button><button class=btn-primary id='k2'>K2</button><button class='btn-primary' id='nordica'>Nordica</button></div></center>";

// detailed data on each vendor

var blizzardButtons =
  " <div class='detailWindow'><button class='btn-primary' id='bonifide'>Bonifide</button> <button class='btn-primary' id='brahma'>Brahma</button> <button class='btn-primary' id='rustler9'>Rustler 9</button> <button class='btn-primary' id='rustler10'>Rustler 10</button><button class='btn-primary' id='rustler11'>Rustler 11</button></div><div class='detailWindow'><button class='btn-primary' id='sheeva9'>Sheeva9</button><button class='btn-primary' id='sheeva10'>Sheeva10</button><button class='btn-primary' id='blackPearl'>Black Pearl</button></div>";
var blizzard =
  "<div class='btnTab detailWindow'><h2> Blizzard</h2><BR>Choose a model:<br><small>Click link twice if first request</small>" +
  blizzardButtons +
  "</div><br>";

var rosignolButtons =
  "<div class='detailWindow'><button class='btn-primary' id='e94'>Experience 94</button><button class='btn-primary' id='e88'>Experience 88</button><button class='btn-primary' id='e84vas'>E84?</button><button class='btn-primary' id='sky7'>Sky 7</button><button class='btn-primary' id='soul7'>Soul 7</button><button class='btn-primary' id='soul7W'>Soul 7 W</button></div>";
var rosignol =
  "<div class='btnTab detailWindow'><h2> Rosignol</h2><BR>Choose a model:<br><small>Click link twice if first request</small>" +
  rosignolButtons +
  " </div><br>";

var headButtons =
  "<div class='detailWindow'><button class='btn-primary' id='kore93'>Kore 93</button><button class='btn-primary' id='kore99'>Kore 99</button><button class='btn-primary' id='kore105'>Kore 105</button><button class='btn-primary' id='wildJoy'>Wild Joy</button></div>";
var head =
  "<div class='btnTab detailWindow'><h2>Head</h2><BR>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  headButtons +
  "</div><br>";
var headSuperShape =
  "<a href='https://www.blizzardsports.com/canada/products/rustler-10-flat/' target:_blank><button class='btn-primary' id='rustler10'>Rustler 10</button></a>< href='https://www.blizzardsports.com/canada/products/rustler-11-flat/' target:_blank><button class='btn-primary' id='rustler11'>Rustler 11</button><button class='btn-primary' id='sheeva9'>Sheeva9</button></div><br>";

var k2Buttons =
  "<div class='detailWindow'><button class='btn-primary' id='mindBender108'>Mind Bender 108</button><button class='btn-primary' id='mindBender99'>MindBender 99</button><button class='btn-primary' id='mindBender90'>MindBender 90</button></div><div class='detailWindow'><button class='btn-primary' id='mindBender98'>Mindbender 98 Alliance </button><button class='btn-primary' id='mindBender88'>Mindbender 88 Alliance</button></div>";
var k2 =
  "<div class='btnTab detailWindow'><h2>K2  </h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  k2Buttons +
  "</div><br>";

var salomonButtons =
  "<div class='detailWindow'><button class='btn-primary' id='qst92'>QST 92</button><button class='btn-primary' id='qst99'>QST 99</button><button class='btn-primary' id='qst106'>QST 106</button></div>";
var salomon =
  "<div class='btnTab detailWindow'><h2>Salomon:</h2><BR>Choose a model: <br><small>Click link twice if first request is blocked.</small>" +
  salomonButtons +
  " </div><br>";

var atomicButtons =
  "<div class='detailWindow'><button class='btn-primary' id='bentChetler120'>Bent Chetler 120</button> <button class='btn-primary' id='bentChetler100'>Bent Chetler 100</button> <button class='btn-primary' id='vantage90'>Vantage 90</button></div>";
var atomic =
  "<div class='btnTab detailWindow'><h2>Atomic:</h2><br>Choose a model: <br><small>Click link twice if first request is blocked.</small>" +
  atomicButtons +
  "</div><br>";

var stockliImage = "";
var stockliButtons =
  "<div class='detailWindow'><button class='btn-primary' id=stormRider85>Storm Rider 85</button><button class='btn-primary' id='stormRider88'>Storm Rider 88</button><button class='btn-primary' id=stormRider95>Storm Rider 95</button><button class='btn-primary' id='lazerAx'>Lazer Ax</button><button class='btn-primary' id='lazerAr'>Lazer Ar D30</button></div>";
var stockli =
  "<div class='btnTab detailWindow'><h2>Stockli:</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  stockliButtons +
  "</div><br>";

var volklButtons =
  "<div class='detailWindow'><button class='btn-primary' id='mantra102'>Mantra 102</button> <button class='btn-primary' id='mantra'>Mantra</button><button class='btn-primary' id='kendo'>Kendo 88</button> <button class='btn-primary' id='secret92'>Secret 92</button><button class='btn-primary' id='kenja'>Kenja 88</button><button class='btn-primary' id='yumi'>Yumi</button></div>";
var volkl =
  "<div class='btnTab detailWindow'><h2>Volkl:</h2><BR>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  volklButtons +
  "</div><br>";

var nordicaButtons =
  "<div class='detailWindow'><button class='btn-primary' id='enforcer93'>Enforcer 93</button><button class='btn-primary' id='enforcer100'>Enforcer 100</button> <button class='btn-primary' id='santa88'>Santa Ana 88</button><button class='btn-primary' id='santa93'>Santa Ana 93</button></div>";
var nordica =
  "<div class='btnTab detailWindow'><h2>Nordica</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  nordicaButtons +
  "</div><br>";
// categoryData contains the links to choose by category

var categoryData =
  "<div class='detailWindow btnTab'><h2>Skis</h2><br><button class='btn-primary' id='allMt'>All Mountain Skis </button><button class = 'btn-primary' id='carving'>Carving Skis</button><button class='btn-primary' id='powderSkis'>Powder Skis</button><br></div><div class='detailWindow btnTab'><h2>Snowboards</h2><button class='btn-primary' id='allMtBoard'>All Mountain Boards</button><button class='btn-primary' id='parkBoard'>Park Boards</button><button class='btn-primary' id='powBoard'>Powder Boards</button><button class='btn-primary' id='twin'>Twin Boards</buton><button class='btn-primary' id='asym'>Asymetrical Boards</button></div><br>";

var brandSB =
  "<h2>Snowboard Brands:</h2><div class='btnTab detailWindow'>" +
  brandLogosBoards +
  "<button class='btn-primary' id='burton'>Burton</button><button class='btn-primary' id='jones'>Jones</button><button class=btn-primary id='salomonSB'> Salomon</button><button class='btn-primary' id='libTech'>Lib Tech</button><button class='btn-primary' id='gnu'>Gnu</button><button class='btn-primary' id='ride'>Ride</button><br></div>";

var burtonImage =
  "https://www.boarderline.co.uk/images/brands/1476389456burton.jpg";
var burtonButtons =
  "<div class='detailWindow btnTab'><button class='btn-primary' id='process'>Process</button><button class='btn-primary' id='deepThinker'>Deep Thinker</button><button class='btn-primary' id='freeThinker'>Free Thinker</button><button class='btn-primary' id='paramount'>Paramount</button><button class='btn-primary' id='flightAttendent'>Flight Attendent</button><button class ='btn-primary' id='yeaSayer'>Yea Sayer</button><button class='btn-primary' id='talentScout'>Talent Scout</button><button class='btn-primary' id='storyBoard'>Story Board</button><button class='btn-primary' id='rewind'>Rewind</button></div>";
var burton =
  "<div class='btnTab detailWindow'><h2>Burton</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  burtonButtons +
  "</div><br>";

var salomonSBButtons =
  "<div class='btnTab detailWindow'><button class='btn-primary' id='sickStick'>Sick Stick</button><button class='btn-primary' id='pillowTalk'>PillowTalk</button><button class='btn-primary' id='assassin'>Assassin</button><button class='btn-primary' id='firstCall'>First Call</button><button class='btn-primary' id='rumbleFish'>Rumble Fish</button><button class='btn-primary' id='bellevue'>Bellevue</button></div>";
var salomonSB =
  "<div class='btnTab detailWindow'><h2>Salomon Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  salomonSBButtons +
  "</div>";

var jonesButtons =
  "<div class='detailWindow btnTab'><button class='btn-primary' id='flagShip'>Flagship</button><button class='btn-primary' id='ultraMindExpander'>Ultra Mind Expander</button><button class='btn-primary' id='mindExpander'>Mind Expander</button><button class='btn-primary' id='dreamCatcher'>Dream Catcher</button><button class='btn-primary' id='mindExpanderWomen'>Women's Mind Expander</button></div>";
var jones =
  "<div class='btnTab detailWindow'><h2>Jones Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  jonesButtons +
  "</div>";

var rideButtons =
  "<div class='detailWindow btnTab'><button class='btn-primary' id='berzerker'>Berzerker</button><button class='btn-primary' id='warPig'>War Pig</button><button class='btn-primary' id='twinPig'>Twin Pig</button><button class='btn-primary' id='psychoCandy'>Psycho Candy</button></div>";
var ride =
  "<div class='btnTab detailWindow'><h2>Ride Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  rideButtons +
  "</div>";

var libTechButtons =
  "<div class='detailWindow btnTab'><button class='btn-primary' id='tRiceGold'>Travice Rice Gold Member HP C2Pro</button><button class='btn-primary' id='tRiceOrca'>Travice Rice Orca</button><button class='btn-primary' id='tRas'>T Ras C2</button><button class='btn-primary' id='eJack'>E-Jack C3</button><button class='btn-primary' id='dynaMiss'>Dynamiss C3 WMNS</button></div>";
var libTech =
  "<div class='btnTab detailWindow'><h2>Lib Tech Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  libTechButtons +
  "</div>";

var gnuButtons =
  "<div class='detailWindow btnTab'><button class='btn-primary' id='mullair'>Mullair C3</button><button class='btn-primary' id='ridersChoice'>Riders Choice C2X</button><button class='btn-primary' id='ladiesChoice'>Asym Ladies Choice C2X</button><button class='btn-primary' id='proChoice'>Asym Pro Choice</button></div>";
var gnu =
  "<div class='btnTab detailWindow'><h2>Gnu Snowboards</h2><br>Choose a model:<br><small>Click link twice if first request is blocked.</small>" +
  gnuButtons +
  "</div>";

console.log("started Script");

function startPage() {
  document
    .querySelector("#content")
    .innerHTML=
      '<img class="linkImg" id="wbImage" src="https://images.all-free-download.com/images/graphicthumb/whistler_blackcomb_74144.jpg"><br>';
  document
    .querySelector("#target")
    .innerHTML=brandLogos + welcome + brandLogosBoards;
}

startPage();
//Note  only Brand has 'Class' button-others are id's
// target '.' for class (# for id)

// click on top banner returns to home page:
document.querySelector("#label").addEventListener("click", startPage());

  

