(self.webpackChunkyayin_ai_lab_tech=self.webpackChunkyayin_ai_lab_tech||[]).push([[539],{9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var l,n=e.HTMLElement||e.Element,o=468,a={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||s,scrollIntoView:n.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?h.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):a.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?a.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):a.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var l=function(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}(this),n=l.getBoundingClientRect(),o=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+o.left-n.left,l.scrollTop+o.top-n.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else a.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function m(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function f(t,l){var n=e.getComputedStyle(t,null)["overflow"+l];return"auto"===n||"scroll"===n}function u(e){var t=m(e,"Y")&&f(e,"Y"),l=m(e,"X")&&f(e,"X");return t||l}function d(t){var l,n,a,i,s=(r()-t.startTime)/o;i=s=s>1?1:s,l=.5*(1-Math.cos(Math.PI*i)),n=t.startX+(t.x-t.startX)*l,a=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,n,a),n===t.x&&a===t.y||e.requestAnimationFrame(d.bind(e,t))}function h(l,n,o){var i,c,m,f,u=r();l===t.body?(i=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,f=a.scroll):(i=l,c=l.scrollLeft,m=l.scrollTop,f=s),d({scrollable:i,method:f,startTime:u,startX:c,startY:m,x:n,y:o})}}}}()},1349:function(e){e.exports={siteTitle:"Yayin AI Labs",manifestName:"Yayin AI Labs",manifestShortName:"Yayin AI Lab",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",heading:"Yayin AI Labs",subHeading:"Build, Develop, and Collaborate on innovative designs.",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/TeamYayin"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/yayinlabs"},{icon:"fa-facebook",name:"Facebook",url:"https://facebook.com/awashedupnerd"},{icon:"fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/company/yayinlabs/"}],emailId:"ask@yayinailab.tech",phone:"+1‪9294631030‬",address:"Hyderabad, TG, India"}},6947:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var n=l(7294),o=l(1082);function a(){return n.createElement("div",{className:"copyright"},"Powered by"," ",n.createElement("a",{href:"https://gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer",title:"GatsbyJS"},n.createElement("i",{className:"icon brands fa-react small"}))," ","and design inspired by"," ",n.createElement("a",{href:"https://html5up.net",target:"_blank",rel:"noopener noreferrer",title:"Paradigm Shift"},"HTML5 UP")," ",n.createElement("br",null),"© 2020"," ",n.createElement(o.Link,{to:"/",className:"small"},"Yayin AI Labs Pvt. Ltd."))}},9694:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var n=l(7294),o=l(7326),a=l(1721),r=l(9634),i=l.n(r);const s=e=>e.children;var c=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind((0,o.Z)(t)),t}(0,a.Z)(t,e);var l=t.prototype;return l.componentDidMount=function(){i().polyfill()},l.handleClick=function(e){e.preventDefault();let t=0,l=!0;const{type:n,element:o,offset:a,timeout:r}=this.props;if(n&&o)switch(n){case"class":t=document.getElementsByClassName(o)[0],l=!!t;break;case"id":t=document.getElementById(o),l=!!t}l?this.scrollTo(t,a,r):console.log("Element not found: "+o)},l.scrollTo=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=null);const n=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((()=>{window.scroll({top:n+t,left:0,behavior:"smooth"})}),l):window.scroll({top:n+t,left:0,behavior:"smooth"})},l.render=function(){return n.createElement(s,null,"object"==typeof this.props.children?n.cloneElement(this.props.children,{onClick:this.handleClick}):n.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.Component),m=l(1349),f=l.n(m);function u(){return n.createElement("header",null,n.createElement("h1",null,f().heading),n.createElement("p",null,f().subHeading),n.createElement("ul",{className:"actions"},n.createElement("li",null,n.createElement(c,{type:"id",element:"first"},n.createElement("a",{href:"#first",className:"arrow"},n.createElement("span",{className:"label"},"Next"))))))}},8970:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var n=l(7294),o=l(1349),a=l.n(o);function r(){return n.createElement("footer",null,n.createElement("ul",{className:"items"},a().emailId&&n.createElement("li",null,n.createElement("h3",null,"Email"),n.createElement("a",{href:"mailto:"+a().emailId},a().emailId)),a().phone&&n.createElement("li",null,n.createElement("h3",null,"Phone"),n.createElement("span",null,a().phone)),a().address&&n.createElement("li",null,n.createElement("h3",null,"Address"),n.createElement("span",null,a().address)),n.createElement("li",null,n.createElement("h3",null,"Elsewhere"),n.createElement("ul",{className:"icons"},a().socialLinks.map((e=>{const{icon:t,name:l,url:o}=e;return n.createElement("li",{key:o},n.createElement("a",{href:o,className:"icon brands "+t},n.createElement("span",{className:"label"},l)))})))),n.createElement("li",null,n.createElement("h3",null,n.createElement("a",{href:"/privacyPolicy"},"Privacy Policy")))))}},2609:function(e,t,l){"use strict";l.r(t);var n=l(7294),o=l(2899),a=l(6947),r=l(9694),i=l(8970);t.default=()=>n.createElement(o.Z,null,n.createElement("div",{id:"wrapper"},n.createElement("section",{className:"intro"},n.createElement(r.Z,null)),n.createElement("section",{id:"first"}," ",n.createElement("header",null,n.createElement("h2",null," Our Team"))," ",n.createElement("div",{className:"content"},n.createElement("div",{className:"row"},n.createElement("ul",{className:"feature-icons"},n.createElement("li",{className:"icon solid fa-laptop"},n.createElement("a",{href:"https://www.linkedin.com/in/vishwastyagi"},"Vishwas Tyagi"),", Lead Programming Wizard, He is a veteran software engineer with 8 years of experience."),n.createElement("li",{className:"icon solid fa-laptop"},n.createElement("a",{href:"https://www.linkedin.com/in/bharani-racharla-2339051a4/"},"Bharani Racharla"),", PCB Design Intern, She is currently pursuing a Bachelor's degree in Electronics and Communications Engineering from Osmania University."),n.createElement("li",{className:"icon solid fa-user-secret"},n.createElement("a",{href:"https://prajwalyashasvi.in/"},"Prajwal"),", Founder and Full Stack Developer, his experience and interests are in Java, Cybersecurity, Python, AI and ML."),n.createElement("li",{className:"icon solid fa-mobile"},"Shylaja, Co-Founder"))))),n.createElement("section",null," ",n.createElement("header",null,n.createElement("h2",null," Work Life at Yayin"))," ",n.createElement(i.Z,null),n.createElement("div",{className:"content"},n.createElement("p",null," Work from Home and Employee stock options."),n.createElement("a",{href:"https://yayin-ai-labs.breezy.hr/",className:"button primary large"},"View Current Openings"))),n.createElement(a.Z,null)))},7326:function(e,t,l){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}l.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=component---src-pages-about-us-js-6b2a94d40e44a87b11dd.js.map