(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(18)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),c=(n(14),n(3)),s=n(4),u=n(6),l=n(5),m=n(7),d=(n(15),function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{id:"form",onSubmit:t.submit},o.a.createElement("input",{type:"text",value:t.value,onChange:t.change,placeholder:"ENTER CITY"})),o.a.createElement("button",{form:"form"},"Search"),o.a.createElement("button",{onClick:t.location,className:"locationBtn",disabled:t.isButtonDisabled},"Get Location"))}),h=(n(16),function(t){return o.a.createElement("div",null,o.a.createElement("div",{className:"panel"},o.a.createElement("div",{className:"hourDay"},o.a.createElement("div",{className:"hour"},new Date(1e3*t.time).getHours()+":00"),o.a.createElement("div",{className:"day"},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*t.day).getUTCDay()])),o.a.createElement("div",{className:"tempForecast"}," ",t.temp," \u2103"),o.a.createElement("div",{className:"icon"},o.a.createElement("img",{src:t.img,alt:"zdj\u0119cie obrazuj\u0105ce pogode"}))))}),p=function(t){var e=t.data.current[0],n=e.date,a=e.city,i=e.temp,r=e.img,c=e.country,s=e.humidity,u=e.description,l=e.pressure,m=e.wind,d=e.error,p=t.data.forecast.map(function(t,e){return o.a.createElement(h,{key:e,temp:t.main.temp,day:t.dt,time:t.dt,img:"https://openweathermap.org/img/w/".concat(t.weather[0].icon,".png")})}),g=o.a.createElement("div",null,o.a.createElement("h4",null,"Niestety nie mamy w bazie miasta ",a)),f=null;return!d&&a&&(f=o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"first"},o.a.createElement("div",{className:"city"}," ",o.a.createElement("h2",null,a,", ",c),o.a.createElement("p",null,o.a.createElement("strong",null,n))),o.a.createElement("div",{className:"temp"},o.a.createElement("img",{src:r,alt:"zdj\u0119cie obrazuj\u0105ce pogode"}),o.a.createElement("h1",null,i," \u2103")),o.a.createElement("p",null,u),o.a.createElement("div",{className:"parametrs"},o.a.createElement("div",{className:"humidity other"},"  Wilgotno\u015b\u0107: ",o.a.createElement("h4",null,s)),o.a.createElement("div",{className:"pressure other"}," Ci\u015bnienie: ",o.a.createElement("h4",null,l)),o.a.createElement("div",{className:"wind other"}," Wiatr:",o.a.createElement("h4",null,m)))),o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"box-content"},p)))),o.a.createElement(o.a.Fragment,null,d?g:f)},g=(n(17),"6a0340dcb344a8dd70d4b2361b8ea65b"),f=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={current:[{inputValue:"",date:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",img:[],country:"",humidity:"",description:"",error:!1}],forecast:[],latitude:"",longitude:"",isButtonDisabled:!1},n.handleInputChange=function(t){n.setState({inputValue:t.target.value})},n.handleInputSubmit=function(t){t.preventDefault();var e="https://api.openweathermap.org/data/2.5/weather?q=".concat(n.state.inputValue,"&appid=").concat(g,"&units=metric"),a="https://api.openweathermap.org/data/2.5/forecast?q=".concat(n.state.inputValue,"&appid=").concat(g,"&units=metric");if(!n.state.inputValue)return alert("Wprowad\u017a miasto!");fetch(e).then(function(t){if(t.ok)return t;throw Error("B\u0142\u0105d")}).then(function(t){return t.json()}).then(function(t){n.setState({current:[{inputValue:"",error:!1,date:(new Date).toLocaleString(),city:t.name,sunrise:t.sys.sunrise,sunset:t.sys.sunset,temp:t.main.temp.toFixed(1),pressure:"".concat(t.main.pressure," hPa"),wind:"".concat((3.6*t.wind.speed).toFixed(1),"  km/h"),img:"https://openweathermap.org/img/w/".concat(t.weather[0].icon,".png"),country:t.sys.country,humidity:"".concat(t.main.humidity,"%"),description:t.weather[0].description.toUpperCase()}]})}).catch(function(t){console.log(t),n.setState({current:[{error:!0,city:n.state.inputValue}]})}),fetch(a).then(function(t){if(t.ok)return t;throw Error("B\u0142\u0105d")}).then(function(t){return t.json()}).then(function(t){return t.list.slice(0,10)}).then(function(t){n.setState({forecast:t})}).catch(function(t){console.log(t),n.setState({current:[{error:!0,city:n.state.inputValue}]})})},n.handleGetLocation=function(){navigator.geolocation?(navigator.geolocation.getCurrentPosition(function(t){n.setState({latitude:t.coords.latitude,longitude:t.coords.longitude,isButtonDisabled:!0})}),setTimeout(function(){return n.setState({isButtonDisabled:!1})},3e3)):console.log("Geolocation is not supported by this browser.")},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){t.setState({latitude:e.coords.latitude,longitude:e.coords.longitude})}):console.log("Geolocation is not supported by this browser."),this.state.longitude&&this.showFormLoc()}},{key:"componentDidUpdate",value:function(){var t=this,e="https://api.openweathermap.org/data/2.5/weather?lat=".concat(this.state.latitude,"&lon=").concat(this.state.longitude,"&appid=").concat(g,"&units=metric"),n="https://api.openweathermap.org/data/2.5/forecast?lat=".concat(this.state.latitude,"&lon=").concat(this.state.longitude,"&appid=").concat(g,"&units=metric");this.state.latitude&&this.state.longitude&&(fetch(e).then(function(t){if(t.ok)return t;throw Error("B\u0142\u0105d")}).then(function(t){return t.json()}).then(function(e){var n=(new Date).toLocaleString();t.setState({current:[{inputValue:"",error:!1,date:n,city:e.name,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:e.main.temp.toFixed(1),pressure:"".concat(e.main.pressure," hPa"),wind:"".concat((3.6*e.wind.speed).toFixed(1),"  km/h"),img:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png"),country:e.sys.country,humidity:"".concat(e.main.humidity,"%"),description:e.weather[0].description.toUpperCase()}],latitude:"",longitude:""})}).catch(function(t){console.log(t)}),fetch(n).then(function(t){if(t.ok)return t;throw Error("B\u0142\u0105d")}).then(function(t){return t.json()}).then(function(t){return t.list.slice(0,10)}).then(function(e){t.setState({forecast:e})}).catch(function(e){console.log(e),t.setState({current:[{error:!0,city:t.state.inputValue}]})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Weather App"),o.a.createElement(d,{value:this.state.current.inputValue,change:this.handleInputChange,submit:this.handleInputSubmit,location:this.handleGetLocation,show:this.showFormLoc,isButtonDisabled:this.state.isButtonDisabled}),o.a.createElement(p,{data:this.state}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.ecbdd461.chunk.js.map