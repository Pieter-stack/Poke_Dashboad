(this["webpackJsonpfinal-project"]=this["webpackJsonpfinal-project"]||[]).push([[0],{194:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(74),c=n.n(r),o=(n(82),n(2)),i=n.n(o),p=n(6),l=n(4),h=n(13),u=n(1),b=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)([]),o=Object(l.a)(c,2),b=o[0],j=o[1];Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(i.a.mark((function t(){var n,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e.search1);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,r(s=a),console.log(s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(p.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e.search2);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,j(a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[e]);var x=[],d=[];x.push(s.base_experience),d.push(b.base_experience),console.log(x),console.log(d);var f={labels:[""+e.search1,""+e.search2],datasets:[{axis:"y",label:"Experience",data:[x,d],backgroundColor:["rgba(179, 0, 0,0.6)","rgba(199, 50, 150,0.6)"],options:{scales:{x:{stacked:!0},y:{stacked:!0}}},borderWidth:2}]};return Object(u.jsxs)("div",{className:"containerChart",children:[Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-15px"},children:"Experience Comparison"}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-35px",fontSize:"16px",fontWeight:"200"},children:"-Compare Pokemon experience-"}),Object(u.jsx)("div",{style:{height:"500px",width:"500px",float:"left"},className:"Prices",children:Object(u.jsx)(h.a,{data:f,options:{responsive:!0,indexAxis:"y",legend:{display:!1}}})})]})},j=function(){return Object(u.jsxs)("div",{className:"containerCustomChart",children:[Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-15px"},children:"Custom"}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-35px",fontSize:"16px",fontWeight:"200"},children:"-Custom chart coming soon-"}),Object(u.jsx)("div",{style:{height:"250px",width:"250px",float:"left",marginLeft:"125px"},className:"Prices"})]})},x=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)([]),o=Object(l.a)(c,2),b=o[0],j=o[1];Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e.search1);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,r([a.stats[0].base_stat,a.stats[1].base_stat,a.stats[2].base_stat,a.stats[5].base_stat]),console.log(a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(p.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e.search2);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,j([a.stats[0].base_stat,a.stats[1].base_stat,a.stats[2].base_stat,a.stats[5].base_stat]);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[e]);var x={labels:["HP","Attack","Defence","Speed"],datasets:[{label:""+e.search1,data:s,fill:!0,backgroundColor:["rgba(179, 0, 0,0.2)"],borderColor:["rgb(179, 0, 0)"],borderWidth:2,tension:.1},{label:""+e.search2,data:b,fill:!0,backgroundColor:["rgba(199, 50, 150,0.2)"],borderColor:["rgb(199, 50, 150)"],borderWidth:2,tension:.1}]};return Object(u.jsxs)("div",{className:"containerChart",children:[Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-15px"},children:"Stats"}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-35px",fontSize:"16px",fontWeight:"200"},children:"-Compare Pokemon Stats-"}),Object(u.jsx)("div",{style:{height:"500px",width:"500px",float:"left"},className:"Prices",children:Object(u.jsx)(h.b,{data:x,options:{responsive:!0}})})]})},d=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)([]),o=Object(l.a)(c,2),b=o[0],j=o[1];Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(i.a.mark((function t(){var n,a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e.search1);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,r(s=a),console.log(s);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(p.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e.search2);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,j(a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[e]);var x=[],d=[];x.push(s.height),d.push(b.height),console.log(x),console.log(d);var f={labels:[""+e.search1,""+e.search2],datasets:[{label:"Health of Pokemon",data:[x,d],backgroundColor:["rgba(75,192,192,0.6)","rgba(255,192,192,0.6)"],borderWidth:4}]};return Object(u.jsxs)("div",{style:{marginLeft:"60px"},className:"containerChart",children:[Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-15px"},children:"Height"}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-35px",fontSize:"16px",fontWeight:"200"},children:"-Compare Pokemon Height-"}),Object(u.jsx)("div",{style:{height:"250px",width:"250px",float:"left",marginLeft:"125px"},className:"Prices",children:Object(u.jsx)(h.c,{data:f,options:{responsive:!0}})})]})},f=function(){return Object(u.jsx)("div",{})},g=function(){return Object(u.jsx)("div",{})},m=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),s=n[0],r=n[1],c=Object(a.useState)([]),o=Object(l.a)(c,2),b=o[0],j=o[1];Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e.search1);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,r([a.stats[3].base_stat,a.stats[4].base_stat,a.id,a.order,a.weight]),console.log(a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(p.a)(i.a.mark((function t(){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+e.search2);case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,j([a.stats[3].base_stat,a.stats[4].base_stat,a.id,a.order,a.weight]);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[e]);var x={labels:["Special Attack","Special Defence","ID","Order","Weight"],datasets:[{label:""+e.search1,data:s,fill:!0,backgroundColor:"rgba(179, 0, 0,0.6)",borderColor:"rgba(179, 0, 0,0.6)",pointBackgroundColor:"rgba(179, 0, 0)"},{label:""+e.search2,data:b,fill:!0,backgroundColor:"rgba(150, 100, 235, 0.6)",borderColor:"rgb(150, 100, 235)",pointBackgroundColor:"rgb(150, 100, 235)",pointHoverBorderColor:"rgb(54, 100, 235)"}]};return Object(u.jsxs)("div",{className:"containerChart",children:[Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-15px"},children:"ALL Stats"}),Object(u.jsx)("br",{}),Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"-35px",fontSize:"16px",fontWeight:"200"},children:"-Compare Pokemon stats-"}),Object(u.jsx)("div",{style:{height:"250px",width:"250px",float:"left",marginLeft:"125px"},className:"Prices",children:Object(u.jsx)(h.d,{data:x,options:{responsive:!0}})})]})},O=n(23),v=n.n(O);var k=function(){var e=Object(a.useState)("ditto"),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)("pikachu"),c=Object(l.a)(r,2),o=c[0],h=c[1],O=Object(a.useState)([]),k=Object(l.a)(O,2),y=k[0],w=k[1],C=Object(a.useState)([]),S=Object(l.a)(C,2),N=S[0],P=S[1];Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+n);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,w(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(p.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/"+o);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,P(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[n,o]);var A=y.id;v()(".Pokeimg").html("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+A+".png' style= 'margin-top:-50px;' alt='logo' width='300' height='500'></img>");var _=N.id;return v()(".Pokeimg2").html("<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+_+".png' style= 'margin-top:-50px;'  alt='logo' width='300' height='500'></img>"),console.log(_),Object(u.jsxs)("div",{className:"Compare",children:[Object(u.jsx)("input",{type:"text",className:"searchbar",id:"search"}),Object(u.jsx)("div",{className:"searchbtn",onClick:function(){var e=document.getElementById("search").value;console.log(e),s(e)},children:"Search"}),Object(u.jsx)("div",{className:"Pokeimg"}),Object(u.jsx)(f,{}),Object(u.jsx)("input",{type:"text",className:"searchbar2",id:"search2"}),Object(u.jsx)("div",{className:"searchbtn2",onClick:function(){var e=document.getElementById("search2").value;console.log(e),h(e)},children:"Search"}),Object(u.jsx)("div",{className:"Pokeimg2"}),Object(u.jsx)(g,{}),Object(u.jsx)(x,{search1:n,search2:o}),Object(u.jsx)(b,{search1:n,search2:o}),Object(u.jsx)(d,{search1:n,search2:o}),Object(u.jsx)(m,{search1:n,search2:o}),Object(u.jsx)(j,{})]})},y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),c=Object(l.a)(r,2),o=c[0];c[1];Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon/?limit=151");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.results,s(a),console.log(a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);for(var h=0;h<n.length;h++){var b=n[h].name;console.log(b);var j="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+(h+1)+".png";console.log(j),v()(".container").append("<div className='card' style= 'height:300px; width:200px;float:left;background-color:rgb(255, 255, 255);margin-left:50px;margin-top:50px; border-radius: 25px;'><h1 className='Name' style= 'text-align:center; '>"+b+"</h1><img src='"+j+"' style= 'margin-left:25px;' alt='logo' width='150' height='200'></img></div>")}return console.log(o),Object(u.jsx)("div",{className:"HomePage",children:Object(u.jsx)("div",{id:"container",className:"container"})})},w=n(24),C=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:"/assets/pokemon_logo.png",alt:"logo",width:"100",height:"60"})}),Object(u.jsxs)(w.b,{to:"/",children:[" ",Object(u.jsx)("div",{style:{height:"70px",textAlign:"center",width:"80px",float:"left",backgroundColor:"white",marginLeft:"20px",marginTop:"50px",borderRadius:"10px"},children:"Home"})]}),Object(u.jsxs)(w.b,{to:"/compare",children:["  ",Object(u.jsx)("div",{style:{height:"70px",textAlign:"center",width:"80px",float:"left",backgroundColor:"white",marginLeft:"-80px",marginTop:"150px",borderRadius:"10px"},children:"Compare"})]})]})})},S=n(3);var N=function(){return Object(u.jsx)(w.a,{children:Object(u.jsxs)("div",{className:"primarycon",children:[Object(u.jsx)(C,{}),Object(u.jsx)("div",{className:"bodycontainer",children:Object(u.jsxs)(S.c,{children:[Object(u.jsx)(S.a,{path:"/",exact:!0,component:y}),Object(u.jsx)(S.a,{path:"/compare",component:k})]})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,195)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),P()},82:function(e,t,n){}},[[194,1,2]]]);
//# sourceMappingURL=main.029cb4f0.chunk.js.map