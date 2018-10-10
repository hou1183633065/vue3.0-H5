import Vue from "vue";

// 判断是否为微信的运行环境
Vue.prototype.isWeiXin = function() {
  const ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
};

// 判断是否为小程序的运行环境
Vue.prototype.isXiaoPro = function() {
  if (this.isWeiXin()) {
    return false;
  } else {
    if (window.__wxjs_environment === "miniprogram") {
      return true;
    } else {
      return false;
    }
  }
};

// 全局截取URL参数函数
// this.getParameter('uuid')
Vue.prototype.getParameter = function(name) {
  var urlStr = window.location.href;
  // var urlStr = "?name=hou&id=5&page=1";
  var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\s|&|$)", "i");
  var r = urlStr.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  } else {
    return null;
  }
};

// 获取客户ip
// async onLoad() {
//   var userLocation = await this.getUserLocation();
//   console.log(userLocation);
// }
Vue.prototype.getUserLocation = function() {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.setAttribute("src", "https://pv.sohu.com/cityjson?ie=utf-8");
    script.setAttribute("hidden", "hidden");
    document.body.appendChild(script);
    script.onload = script.onreadystatechange = function() {
      if (
        !this.readyState ||
        this.readyState === "loaded" ||
        this.readyState === "complete"
      ) {
        resolve(window.returnCitySN);
        script.onload = script.onreadystatechange = null;
      } else {
        reject(null);
      }
    };
  });
};
/*
** 时间戳转换成指定格式日期
** eg. 
** dateFormat(11111111111111, 'Y年M月D日 H时I分S秒')
** → "2322年02月06日 03时45分"
*/
Vue.prototype.dateFormat = function(timestamp, formats) {
  // formats格式包括
  // 1. Y-M-D
  // 2. Y-M-D H:i:s
  // 3. Y年M月D日
  // 4. Y年M月D日 H时i分
  formats = formats || "Y-M-D";

  let zero = function(value) {
    if (value < 10) {
      return "0" + value;
    }
    return value;
  };
  const myDate = timestamp ? new Date(timestamp) : new Date();
  let year = myDate.getFullYear();
  let month = zero(myDate.getMonth() + 1);
  let day = zero(myDate.getDate());
  let hour = zero(myDate.getHours());
  let minite = zero(myDate.getMinutes());
  let second = zero(myDate.getSeconds());

  return formats.replace(/Y|M|D|H|I|S/gi, function(matches) {
    return {
      Y: year,
      M: month,
      D: day,
      H: hour,
      I: minite,
      S: second
    }[matches];
  });
};
