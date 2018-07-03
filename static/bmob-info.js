function getBrowserInfo() {
  var agent = navigator.userAgent.toLowerCase();
  var arr = [];
  var system = agent.split(' ')[1].split(' ')[0].split('(')[1];
  arr.push(system);
  var regStr_edge = /edge\/[\d.]+/gi;
  var regStr_ie = /trident\/[\d.]+/gi;
  var regStr_ff = /firefox\/[\d.]+/gi;
  var regStr_chrome = /chrome\/[\d.]+/gi;
  var regStr_saf = /safari\/[\d.]+/gi;
  var regStr_opera = /opr\/[\d.]+/gi;
  //IE
  if (agent.indexOf("trident") > 0) {
    arr.push(agent.match(regStr_ie)[0].split('/')[0]);
    arr.push(agent.match(regStr_ie)[0].split('/')[1]);
    return arr;
  }
  //Edge
  if (agent.indexOf('edge') > 0) {
    arr.push(agent.match(regStr_edge)[0].split('/')[0]);
    arr.push(agent.match(regStr_edge)[0].split('/')[1]);
    return arr;
  }
  //firefox
  if (agent.indexOf("firefox") > 0) {
    arr.push(agent.match(regStr_ff)[0].split('/')[0]);
    arr.push(agent.match(regStr_ff)[0].split('/')[1]);
    return arr;
  }
  //Opera
  if (agent.indexOf("opr") > 0) {
    arr.push(agent.match(regStr_opera)[0].split('/')[0]);
    arr.push(agent.match(regStr_opera)[0].split('/')[1]);
    return arr;
  }
  //Safari
  if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
    arr.push(agent.match(regStr_saf)[0].split('/')[0]);
    arr.push(agent.match(regStr_saf)[0].split('/')[1]);
    return arr;
  }
  //Chrome
  if (agent.indexOf("chrome") > 0) {
    arr.push(agent.match(regStr_chrome)[0].split('/')[0]);
    arr.push(agent.match(regStr_chrome)[0].split('/')[1]);
    return arr;
  } else {
    arr.push('请更换主流浏览器，例如chrome,firefox,opera,safari,IE,Edge!')
    return arr;
  }
}

Bmob.initialize("d19fc452ebff91c7997a4ef3f3e7e7d8", "fee019e3f8acfb4ac43f9c22c4b74917");
var GameScore = Bmob.Object.extend("GameScore");
var gameScore = new GameScore();
if (returnCitySN["cip"] !== '116.226.237.230') {
  gameScore.set("sourcePage", document.referrer);
  gameScore.set("cip", returnCitySN["cip"]);
  gameScore.set("cname", returnCitySN["cname"]);
  gameScore.set("system", getBrowserInfo()[0]);
  gameScore.set("browse", getBrowserInfo()[1]);
  gameScore.set("browseNum", getBrowserInfo()[2]);
  gameScore.save(null, {
    success: function (gameScore) {
    },
    error: function (gameScore, error) {
    }
  });
}

