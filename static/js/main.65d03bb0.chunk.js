(this["webpackJsonpcrosses-zeros"]=this["webpackJsonpcrosses-zeros"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(8),s=n.n(a),i=(n(13),n(4)),u=n(1),j=n(3),o=(n(14),n(0)),l=function(e){var t=e.children;return Object(o.jsx)("div",{className:"wrapper",children:t})},b=n.p+"static/media/cross.29b28d3a.svg",O=n.p+"static/media/circle.f9590110.svg",f=(n(16),function(e){var t=e.step,n=e.changeStep,r=e.id,a=e.cleanBoard,s=Object(c.useState)(null),i=Object(j.a)(s,2),u=i[0],l=i[1];Object(c.useEffect)((function(){l(null)}),[a]);return Object(o.jsx)("button",{onClick:function(){n(r),l(t?b:O)},className:"cell",type:"button",disabled:u,children:u&&Object(o.jsx)("img",{src:u,alt:"symbol"})})}),d=function(e){var t;switch(e.join("")){case"123":t=Object(o.jsx)("div",{className:"line1"});break;case"456":t=Object(o.jsx)("div",{className:"line2"});break;case"789":t=Object(o.jsx)("div",{className:"line3"});break;case"147":t=Object(o.jsx)("div",{className:"line4"});break;case"258":t=Object(o.jsx)("div",{className:"line5"});break;case"369":t=Object(o.jsx)("div",{className:"line6"});break;case"357":t=Object(o.jsx)("div",{className:"line7"});break;case"159":t=Object(o.jsx)("div",{className:"line8"})}return t},p=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],m=[1,2,3,4,5,6,7,8,9],v=(n(17),function(e){var t=e.savePlayerSteps,n=e.winCombination,r=e.cleanBoard,a=Object(c.useState)(!0),s=Object(j.a)(a,2),i=s[0],u=s[1];Object(c.useEffect)((function(){u(!0)}),[r]);var l=function(e){u((function(e){return!e})),t(e,i)};return Object(o.jsxs)("div",{className:"board",children:[Object(o.jsx)("div",{className:"horizontal-line1"}),Object(o.jsx)("div",{className:"horizontal-line2"}),Object(o.jsx)("div",{className:"vertical-line1"}),Object(o.jsx)("div",{className:"vertical-line2"}),n&&d(n),m.map((function(e){return Object(o.jsx)(f,{changeStep:l,step:i,cleanBoard:r,id:e},e)}))]})}),h=(n(18),function(e){var t=e.player1,n=e.player2;return Object(o.jsx)(o.Fragment,{children:t.name&&Object(o.jsxs)("div",{className:"score-table",children:[Object(o.jsx)("h2",{children:"Score"}),Object(o.jsxs)("p",{children:[t.name," (x): ",t.wins]}),n.name&&Object(o.jsxs)("p",{children:[n.name," (o): ",n.wins]})]})})}),S=(n(19),function(e){var t=e.onSubmit,n=Object(c.useState)(""),r=Object(j.a)(n,2),a=r[0],s=r[1];return Object(o.jsx)("div",{className:"overlay",children:Object(o.jsxs)("form",{id:"player-name",onSubmit:function(e){t(e),s("")},children:[Object(o.jsx)("label",{htmlFor:"name",children:"Enter your name"}),Object(o.jsx)("input",{type:"text",id:"name",autoComplete:"off",value:a,onChange:function(e){return function(e){s(e.target.value)}(e)}}),Object(o.jsx)("button",{type:"submit",children:"Confirm"})]})})}),x=(n(20),function(e){var t=e.reloadBoard,n=e.winCombination;return Object(o.jsx)("div",{className:"overlay",children:Object(o.jsxs)("div",{className:"alert",children:[n?Object(o.jsx)("p",{children:"Round! Great win!"}):Object(o.jsx)("p",{children:"Draw! Try once more."}),Object(o.jsx)("button",{onClick:t,type:"button",children:"Next round"})]})})}),g=function(e){if(e.length>2)for(var t=0;t<p.length;t++){for(var n=[],c=null,r=0;r<e.length;r++){var a=p[t].includes(e[r]);a?(n.push(a),c=p[t]):n.push(a)}if(3===n.filter((function(e){return!0===e})).length)return c}},w=function(e,t,n){var c=[].concat(Object(i.a)(t),Object(i.a)(n)),r=m.filter((function(e){return!c.includes(e)}));if(r.length<3)for(var a=0;a<r.length;a++)for(var s=[].concat(Object(i.a)(e),[r[a]]),u=0;u<p.length;u++){for(var j=[],o=0;o<s.length;o++){var l=p[u].includes(s[o]);j.push(l)}var b=3===j.filter((function(e){return!0===e})).length;if(b)return b}},N=function(){var e=Object(c.useState)({name:null,wins:0,currentSteps:[]}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({name:null,wins:0,currentSteps:[]}),s=Object(j.a)(a,2),b=s[0],O=s[1],f=Object(c.useState)(!0),d=Object(j.a)(f,2),p=d[0],m=d[1],N=Object(c.useState)(null),y=Object(j.a)(N,2),k=y[0],C=y[1],B=Object(c.useState)(!1),E=Object(j.a)(B,2),z=E[0],P=E[1],D=Object(c.useState)(!1),F=Object(j.a)(D,2),J=F[0],G=F[1];Object(c.useEffect)((function(){G(!1);var e=g(n.currentSteps),t=g(b.currentSteps),c=w(n.currentSteps,n.currentSteps,b.currentSteps),a=w(b.currentSteps,n.currentSteps,b.currentSteps);return e?(r((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[],wins:e.wins+1})})),O((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[]})})),void C(e)):t?(r((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[]})})),O((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[],wins:e.wins+1})})),void C(t)):!a&&!c&&n.currentSteps.length>=4?(r((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[]})})),O((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[]})})),void P(!0)):void(c||4!==b.currentSteps.length||(t?(r((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[]})})),O((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[],wins:e.wins+1})})),C(t)):(r((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[]})})),O((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentSteps:[]})})),P(!0))))}),[n.currentSteps,b.currentSteps,k,z]);return Object(o.jsxs)(l,{children:[Object(o.jsx)(v,{savePlayerSteps:function(e,t){t?r((function(t){return Object(u.a)(Object(u.a)({},t),{},{currentSteps:[].concat(Object(i.a)(t.currentSteps),[e])})})):O((function(t){return Object(u.a)(Object(u.a)({},t),{},{currentSteps:[].concat(Object(i.a)(t.currentSteps),[e])})}))},winCombination:k,cleanBoard:J}),Object(o.jsx)(h,{player1:n,player2:b}),p&&Object(o.jsx)(S,{onSubmit:function(e){e.preventDefault(e);var t=e.target.name.value;t?t!==n.name?n.name?(O((function(e){return Object(u.a)(Object(u.a)({},e),{},{name:t})})),m(!1)):r((function(e){return Object(u.a)(Object(u.a)({},e),{},{name:t})})):alert("Choose, another name!"):alert("Please, enter your name!")}}),(k||z)&&Object(o.jsx)(x,{reloadBoard:function(){C(null),P(!1),G(!0)},winCombination:k})]})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.65d03bb0.chunk.js.map