(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,function(e,t,n){e.exports=n(34)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),r=n.n(i),l=(n(17),n(2)),s=n(3),c=n(6),u=n(4),d=n(5),m=(n(19),n(11)),f=n(1),h=(n(21),n(23),function(e){return o.a.createElement("button",Object.assign({className:"btn"},e),e.children)}),k=function(e){var t=e.secondsRemaining,n=e.totalSeconds,a=e.reset,i=(n-t)/n*100+"%",r=function(){return("0"+t%60).slice(-2)},l=function(){return Math.floor(t/60)},s=r(),c=l(),u="".concat(c,":").concat(s);"0:00"===u&&(u="\ud83d\udd14\ud83d\udd14\ud83d\udd14 Timer Done"),document.title=u;var d=o.a.createElement("div",{className:"timer"},"".concat(l()),o.a.createElement("div",{className:"tomato-container"},o.a.createElement("span",{className:"tomato",role:"img","aria-label":"clock-colon"},"\ud83c\udf45"),o.a.createElement("span",{className:"tomato",role:"img","aria-label":"clock-colon"},"\ud83c\udf45")),"".concat(r()));return o.a.createElement("div",{className:"timer-container"},o.a.createElement("div",{className:"progress"},o.a.createElement("div",{className:"inner-progress",style:{width:i}})),d,o.a.createElement(h,{onClick:a},"Reset"))},p=(n(25),function(e){return document.title="Tomato Tomato",o.a.createElement("div",{className:"btn-container"},o.a.createElement(h,{onClick:function(){return e.selectionHandler("work")}}," I need to work"),o.a.createElement(h,{onClick:function(){return e.selectionHandler("break")}}," I need to take five"),o.a.createElement(h,{onClick:function(){return e.selectionHandler("longBreak")}},"I need a longer break"))}),v=(n(27),function(e){return o.a.createElement("div",{className:"task"},o.a.createElement("div",{className:"task-text"},e.task.value),o.a.createElement("div",{className:"task-delete",onClick:function(){return e.handleRemoveTask(e.task.id)}},"\xd7"))}),g=(n(29),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleKeyUp=function(e){13===e.keyCode&&(n.props.addTask(e.target.value),n.newTaskInput.current.focus(),n.newTaskInput.current.value="")},n.createTasks=function(){return n.props.tasks.map(function(e){return o.a.createElement(v,{key:e.id,task:e,handleRemoveTask:n.props.handleRemoveTask})})},n.newTaskInput=o.a.createRef(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return console.log("rerender"),o.a.createElement("div",{className:"task-list-container"},this.props.playing?null:o.a.createElement("div",null,o.a.createElement("h2",null,"Add New Tasks"),o.a.createElement("div",{className:"input-container",onKeyUp:this.handleKeyUp},o.a.createElement("input",{type:"text",className:"input",ref:this.newTaskInput,disabled:this.props.disabled}))),this.createTasks())}}]),t}(o.a.Component)),b=(n(31),function(e){return e.show?o.a.createElement("div",{className:"backdrop",onClick:e.clicked}):null}),E=n(7),w=n.n(E);console.log(w.a);var T=function(e){var t=e.shouldShow?"".concat(w.a.open):null;return o.a.createElement("div",null,o.a.createElement(b,{show:e.shouldShow,clicked:e.explainationToggle}),o.a.createElement("div",{className:["".concat(w.a["explaination-container"]),t].join(" ")},o.a.createElement("h2",{style:{textAlign:"center"}},"What is Pomodoro?"),o.a.createElement("p",null,o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://en.wikipedia.org/wiki/Pomodoro_Technique"},"Pomodoro"),"\xa0is a productivity technique to keep yourself organized."),o.a.createElement("ul",null,o.a.createElement("p",null,"The basic principle is as follows:"),o.a.createElement("li",null,"List out 3-4 tasks you need to complete."),o.a.createElement("li",null,"Work uninterupted for 25 minutes."),o.a.createElement("li",null,"Cross out any tasks as you complete them."),o.a.createElement("li",null,"Take a 5 minute break."),o.a.createElement("li",null,"Repeat."),o.a.createElement("li",null,"After 3-4 iterations take a longer break, about 15 minutes."))))},y=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).selectionHandler=n.selectionHandler.bind(Object(f.a)(Object(f.a)(n))),n.startTimer=n.startTimer.bind(Object(f.a)(Object(f.a)(n))),n.resetTimer=n.resetTimer.bind(Object(f.a)(Object(f.a)(n))),n.addTaskHandler=n.addTaskHandler.bind(Object(f.a)(Object(f.a)(n))),n.removeTaskHandler=n.removeTaskHandler.bind(Object(f.a)(Object(f.a)(n))),n.explainationToggle=n.explainationToggle.bind(Object(f.a)(Object(f.a)(n)));var a=JSON.parse(localStorage.getItem("tasks"))||[];return n.state={playing:!1,secondsRemaining:0,totalSeconds:0,notificationsAllowed:!1,showExplaination:!1,taskList:a},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var e=this;if("Notification"in window){var t=Notification.permission;"granted"===t?this.setState({notificationsAllowed:!0}):"default"===t&&Notification.requestPermission().then(function(t){"granted"===t?e.setState({notificationsAllowed:!0}):e.setState({notificationsAllowed:!1})}).catch(function(e){return console.log(e)})}}},{key:"selectionHandler",value:function(e){var t=null;switch(e){case"work":t=1500;break;case"break":t=300;break;case"longBreak":t=900;break;default:t=1500}this.setState({playing:!0,secondsRemaining:t,totalSeconds:t}),this.startTimer()}},{key:"startTimer",value:function(){var e=this;this.interval=setInterval(function(){0===e.state.secondsRemaining?(clearInterval(e.interval),e.setState({playing:!1}),e.state.notificationsAllowed?new Notification("\ud83d\udd14\ud83d\udd14\ud83d\udd14 Timer Done!!"):alert("\ud83d\udd14\ud83d\udd14\ud83d\udd14 Timer Done!!")):e.setState(function(e,t){return{secondsRemaining:e.secondsRemaining-1}})},1e3)}},{key:"resetTimer",value:function(){clearInterval(this.interval),this.setState({playing:!1,secondsRemaining:0})}},{key:"addTaskHandler",value:function(e){var t=Object(m.a)(this.state.taskList);t.push({id:t.length,value:e}),localStorage.setItem("tasks",JSON.stringify(t)),this.setState({taskList:t})}},{key:"removeTaskHandler",value:function(e){var t=this.state.taskList.filter(function(t){return t.id!==e});localStorage.setItem("tasks",JSON.stringify(t)),this.setState({taskList:t})}},{key:"explainationToggle",value:function(){this.setState(function(e,t){return{showExplaination:!e.showExplaination}})}},{key:"render",value:function(){var e=o.a.createElement(p,{selectionHandler:this.selectionHandler});return this.state.playing&&(e=o.a.createElement(k,{secondsRemaining:this.state.secondsRemaining,totalSeconds:this.state.totalSeconds,reset:this.resetTimer})),o.a.createElement("div",null,e,o.a.createElement(g,{playing:this.state.playing,tasks:this.state.taskList,addTask:this.addTaskHandler,handleRemoveTask:this.removeTaskHandler}),o.a.createElement(T,{shouldShow:this.state.showExplaination,explainationToggle:this.explainationToggle}),o.a.createElement("a",{onClick:this.explainationToggle,className:"what-is"},"What is Pomodoro?"))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-Header"},o.a.createElement("h1",null,"Tomato ",o.a.createElement("span",{role:"img","aria-label":"tomato"},"\ud83c\udf45")," Tomato"),o.a.createElement("h3",null,"Stay productive with Pomodoro!")),o.a.createElement("div",{className:"App-Container"},o.a.createElement(y,null)),o.a.createElement("div",{className:"App-Footer"}))}}]),t}(a.Component),j=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tomato",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/tomato","/service-worker.js");j?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):N(e)})}}()}],[[12,2,1]]]);
//# sourceMappingURL=main.c589bc75.chunk.js.map