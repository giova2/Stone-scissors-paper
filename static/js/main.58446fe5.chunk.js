(this["webpackJsonpstone-paper-scissors"]=this["webpackJsonpstone-paper-scissors"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),c=a.n(l),s=a(3),o=a.n(s),m=(a(9),a(1));a(10);!function(e){e.PAPER="PAPER",e.SCISSORS="SCISSORS",e.STONE="STONE"}(n||(n={})),function(e){e.WIN="WIN",e.LOSE="LOSE",e.DRAW="DRAW"}(r||(r={}));var i=[n.PAPER,n.SCISSORS,n.STONE],u={PAPER:{PAPER:r.DRAW,SCISSORS:r.LOSE,STONE:r.WIN},SCISSORS:{PAPER:r.WIN,SCISSORS:r.DRAW,STONE:r.LOSE},STONE:{PAPER:r.LOSE,SCISSORS:r.WIN,STONE:r.DRAW}};var b=function(){var e=Object(l.useState)(null),t=Object(m.a)(e,2),a=t[0],s=t[1],o=Object(l.useState)(null),b=Object(m.a)(o,2),f=b[0],E=b[1],S=Object(l.useState)(""),d=Object(m.a)(S,2),p=d[0],N=d[1],x=Object(l.useState)(""),O=Object(m.a)(x,2),h=O[0],v=O[1],g=Object(l.useState)(""),R=Object(m.a)(g,2),j=R[0],w=R[1],P=Object(l.useState)(0),y=Object(m.a)(P,2),A=y[0],C=y[1],I=Object(l.useState)(0),k=Object(m.a)(I,2),W=k[0],T=k[1];return Object(l.useEffect)((function(){if(null!==a){var e=function(){var e=i.length;return i[Math.floor(Math.random()*e)]}();E(e);var t=u[a][e];switch(N(t),t){case r.WIN:C(A+1);break;case r.LOSE:T(W+1)}}}),[a]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header text-2xl font-extrabold"},c.a.createElement("h1",null,"Stone-Paper-Scissors GAME")),function(){if(""!==j)return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"game-score","data-user":j,"data-machine":"Machine"},c.a.createElement("div",{className:"w-1/2 font-bold border-gray-800 border-2 flex justify-center items-center"},c.a.createElement("span",{className:"flex-grow text-center text-2xl"},A,"\xa0"),c.a.createElement("span",{className:"flex-grow text-center text-2xl"},"|"),c.a.createElement("span",{className:"flex-grow text-center text-2xl"},"\xa0",W))),c.a.createElement("section",{className:"game-messages"},c.a.createElement("div",{className:"w-full font-bold flex justify-center items-center"},c.a.createElement("h1",{className:"text-center text-2xl"},null===a?"Ready to play!":c.a.createElement("div",null,"User choose ",c.a.createElement("b",{className:"text-red-400"},a)," and machine choose ",c.a.createElement("b",{className:"text-red-400"},f),", so you"," ",c.a.createElement("b",{className:"text-blue-400"},p))))))}(),""===j?c.a.createElement("section",{className:"game-field",style:{height:"90vh"}},c.a.createElement("form",{onSubmit:function(){return w(h)},className:"ml-4 mr-4 w-full md:w-1/2 flex flex-col justify-center"},c.a.createElement("input",{type:"text",className:"text-black p-2 font-bold",onChange:function(e){return e.preventDefault&&v(e.currentTarget.value)},placeholder:"Insert your name and press Confirm"}),c.a.createElement("input",{className:"bg-blue-700 mt-3 p-2 font-bold hover:bg-blue-400 hover:text-black cursor-pointer text-center",type:"submit",value:"Confirm"}))):c.a.createElement("section",{className:"game-field flex-wrap"},null!==a&&c.a.createElement("div",{className:"w-full flex justify-center items-center"},c.a.createElement("button",{className:"bg-blue-700 mt-3 p-2 font-bold hover:bg-blue-400 hover:text-black cursor-pointer text-center",onClick:function(){return s(null)}},"Play Again!"),c.a.createElement("button",{className:"bg-blue-700 mt-3 p-2 font-bold hover:bg-blue-400 hover:text-black cursor-pointer text-center ml-2",onClick:function(){return s(null),E(null),N(""),v(""),w(""),C(0),void T(0)}},"Restart Game!")),c.a.createElement("div",{className:"option-container m-1 sm:m-4 hover:bg-white border-white border-2 rounded-full cursor-pointer flex justify-center items-center",onClick:function(){return null===a&&s(n.STONE)}},c.a.createElement("span",{className:"option",role:"img","aria-label":"scissors"},"\u270a\ud83c\udffd")),c.a.createElement("div",{className:"option-container m-1 sm:m-4 hover:bg-white border-white border-2 rounded-full cursor-pointer flex justify-center items-center",onClick:function(){return null===a&&s(n.SCISSORS)}},c.a.createElement("span",{className:"option",role:"img","aria-label":"scissors"},"\u270c\ud83c\udffd")),c.a.createElement("div",{className:"option-container m-1 sm:m-4 hover:bg-white border-white border-2 rounded-full cursor-pointer flex justify-center items-center",onClick:function(){return null===a&&s(n.PAPER)}},c.a.createElement("span",{className:"option",role:"img","aria-label":"scissors"},"\u270b\ud83c\udffd"))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.58446fe5.chunk.js.map