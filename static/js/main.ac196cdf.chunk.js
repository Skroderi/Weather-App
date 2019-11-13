(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=a(13),s=a(14),l=a(20),u=a(15),m=a(21),d=(a(27),function(e){var t=e.submit,a=e.value,n=e.change,c=e.isSearchButtonDisabled,o=e.location,i=e.isButtonDisabled;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{id:"form",onSubmit:t},r.a.createElement("input",{type:"text",value:a,onChange:n,placeholder:"ENTER CITY"})),r.a.createElement("button",{form:"form",disabled:c},"Search"),r.a.createElement("button",{onClick:o,className:"locationBtn",disabled:i},"Get Location"))}),p=(a(28),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"hourDay"},r.a.createElement("div",{className:"hour"},new Date(1e3*e.time).getHours()+":00"),r.a.createElement("div",{className:"day"},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*e.day).getUTCDay()])),r.a.createElement("div",{className:"tempForecast"}," ",e.temp," \u2103"),r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:e.img,alt:"weather icon"}))))}),h=a(4),f=Object(h.b)(function(e){return{weather:e.weather}})(function(e){var t=e.weather,a=(new Date).toLocaleString(),n="".concat((3.6*t.wind.speed).toFixed(1),"  km/h");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"first"},r.a.createElement("div",{className:"city"},r.a.createElement("h2",null,t.name,", ",t.sys.country),r.a.createElement("p",null,r.a.createElement("strong",null,a))),r.a.createElement("div",{className:"temp"},r.a.createElement("img",{src:"https://openweathermap.org/img/w/".concat(t.weather[0].icon,".png"),alt:"weather icon"}),r.a.createElement("h1",null,t.main.temp," \u2103")),r.a.createElement("p",null,t.weather[0].description.toUpperCase()),r.a.createElement("div",{className:"parametrs"},r.a.createElement("div",{className:"humidity other"},"Humidity: ",r.a.createElement("h4",null,t.main.humidity)),r.a.createElement("div",{className:"pressure other"},"Pressure: ",r.a.createElement("h4",null,t.main.pressure)),r.a.createElement("div",{className:"wind other"},"Wind:",r.a.createElement("h4",null,n)))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"box-content"},t.list.slice(0,10).map(function(e,t){return r.a.createElement(p,{key:t,temp:e.main.temp,day:e.dt,time:e.dt,img:"https://openweathermap.org/img/w/".concat(e.weather[0].icon,".png")})})))))}),v=(a(35),a(6)),E=a.n(v),b=a(5),g=a(10),y="SET_WEATHER",w="SET_ERROR",S="a9d6cca14db8601885e5ae3054ca42e4";var D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={inputValue:"",isGeoButtonDisabled:!1,isSearchButtonDisabled:!1},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.getWeatherInfo=function(e){var t=a.props.setWeather,n=a.state.inputValue;if(e.preventDefault(),!n)return alert("Enter city!");t(n),a.setState({isSearchButtonDisabled:!0}),setTimeout(function(){return a.setState({isSearchButtonDisabled:!1})},1e3)},a.getWeatherFromGeo=function(){var e=a.props.setWeatherGeo;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){e(t.coords.latitude,t.coords.longitude)}):console.log("Geolocation is not supported by this browser.")},a.handlerGeoBtn=function(){a.getWeatherFromGeo(),a.setState({isGeoButtonDisabled:!0}),setTimeout(function(){return a.setState({isGeoButtonDisabled:!1})},1e3)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getWeatherFromGeo()}},{key:"render",value:function(){var e=this.state,t=e.inputValue,a=e.isGeoButtonDisabled,n=e.isSearchButtonDisabled,c=this.props.weather;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Weather App"),r.a.createElement(d,{value:t,change:this.handleInputChange,submit:this.getWeatherInfo,location:this.handlerGeoBtn,isButtonDisabled:a,isSearchButtonDisabled:n}),c.error?r.a.createElement("div",{className:"error"},r.a.createElement("p",null,"Sorry, We don't have this city in database. ")):c.loaded&&r.a.createElement(f,null))}}]),t}(n.Component),N=Object(h.b)(function(e){return{weather:e.weather}},{setWeather:function(e){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(S,"&units=metric"),a="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e,"&appid=").concat(S,"&units=metric");return function(){var e=Object(g.a)(E.a.mark(function e(n){var r,c,o,i,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,r.json();case 8:return o=e.sent,e.next=11,c.json();case 11:i=e.sent,"200"===(s=Object(b.a)({},o,i)).cod.toString()?n({type:y,payload:s}):n({type:w});case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},setWeatherGeo:function(e,t){var a="https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(S,"&units=metric"),n="https://api.openweathermap.org/data/2.5/forecast?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(S,"&units=metric");return function(){var e=Object(g.a)(E.a.mark(function e(t){var r,c,o,i,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return r=e.sent,e.next=5,fetch(n);case 5:return c=e.sent,e.next=8,r.json();case 8:return o=e.sent,e.next=11,c.json();case 11:i=e.sent,"200"===(s=Object(b.a)({},o,i)).cod.toString()?t({type:y,payload:s}):t({type:w});case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(D),j=a(2),B=a(18),O=a(19),x={loaded:!1,error:!1},W=Object(j.combineReducers)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,a=(t.type,t.payload);switch(t.type){case y:return Object(b.a)({},a,{loaded:!0,error:!1});case w:return{loaded:!1,error:!0};default:return e}}}),G=[O.a],T=Object(j.createStore)(W,{},Object(B.composeWithDevTools)(j.applyMiddleware.apply(void 0,G)));o.a.render(r.a.createElement(h.a,{store:T},r.a.createElement(N,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ac196cdf.chunk.js.map