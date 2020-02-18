import { BASE_URL } from "../config";
import moment from "moment";
// import geolib from "geolib";

class Utils {
  constructor() {}

  getImgUrl(url) {
    return url;
  }
  formatTimeByPercent(time, timeOver) {
    var time = moment(new Date(time), "YYYYMMDD").fromNow();
    if (time.indexOf("s") !=-1)
    {
      // time = time.split("s");      
      time = parseInt(time);
      return (time*100)/(timeOver*3600);
    }
    else if(time.indexOf("m") !=-1)
    {
      // time = time.split("m");
      time = parseInt(time);
      return (time*100)/(timeOver*60);
    }
    else
    {
      // time = time.split("h");      
      time = parseInt(time);
      return (time*100)/(timeOver);
    }
  }
  formatTime(time) {
    moment.updateLocale("en", {
      relativeTime: {
        future: "in %s",
        past: "%s",
        s: "1s",
        ss: "%ss",
        m: "1m",
        mm: "%dm",
        h: "1h",
        hh: "%dh",
        d: "1d",
        dd: "%dd",
        M: "1m",
        MM: "%dM",
        y: "1y",
        yy: "%dY"
      }
    });
    return moment(new Date(time), "YYYYMMDD").fromNow();
  }

  // getDistance(a, b) {
  //   let meter = geolib.getDistance(a, b);

  //   if (meter > 1000) return meter / 1000 + "km";
  //   else return meter + "m";
  // }
}

export default (Utils = new Utils());
