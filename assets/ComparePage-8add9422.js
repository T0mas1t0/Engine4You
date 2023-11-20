import{r as o,j as e}from"./react-70a8b2ce.js";import{aX as j,aM as b,P as C,B as S,az as u,i as f,j as g,aB as v,aA as I}from"./@mui-9d851e58.js";import{N as P}from"./react-router-dom-f58d90be.js";import"./@babel-b99a675e.js";import"./clsx-1229b3e0.js";import"./react-transition-group-12e66d6c.js";import"./dom-helpers-9a525042.js";import"./react-dom-bba467d9.js";import"./scheduler-765c72db.js";import"./@emotion-4fe39a34.js";import"./hoist-non-react-statics-23d96a9a.js";import"./react-is-e8e5dbb3.js";import"./stylis-79144faa.js";import"./prop-types-0fa17371.js";import"./@popperjs-f3391c26.js";import"./react-router-e5e5b1f9.js";import"./@remix-run-5b360ecf.js";function k({info:t,starsList:a}){const[d,x]=o.useState(t.equipment),[c,p]=o.useState(t.motorInfo),[s,n]=o.useState(t.dimensions);o.useEffect(()=>{x(t.equipment),p(t.motorInfo),n(t.dimensions)},[t,a]);const l=(i,r,m,h)=>i==="Power"||i==="TopSpeed"||i==="Range"?h[i].max.id===m.id?e.jsxs("p",{children:[e.jsx(j,{color:"success"}),e.jsxs("b",{children:[r[i].title,":"]}),e.jsx("br",{}),r[i].description]}):h[i].min.id===m.id?e.jsxs("p",{children:[e.jsx(j,{color:"error"}),e.jsxs("b",{children:[r[i].title,":"]}),e.jsx("br",{}),r[i].description]}):e.jsxs("p",{children:[e.jsx(j,{color:"warning"}),e.jsxs("b",{children:[r[i].title,":"]}),e.jsx("br",{}),r[i].description]}):e.jsxs("p",{children:[e.jsxs("b",{children:[r[i].title,":"]}),e.jsx("br",{}),r[i].description]});return e.jsx(e.Fragment,{children:e.jsxs("center",{children:[e.jsxs("div",{children:[e.jsxs("div",{style:{height:"100px"},children:[e.jsxs("h2",{id:"TitlesCompare",children:[t.brand," ",t.model]}),e.jsxs("h3",{id:"PriceCompare",children:[t.price," €"]})]}),e.jsx("div",{children:e.jsx("img",{id:"carPhoto",src:t.photo})})]}),Object.keys(c).map(i=>e.jsx(e.Fragment,{children:l(i,c,t,a)})),Object.keys(d).map(i=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:e.jsxs("b",{children:[d[i].name,":"]})}),e.jsx("p",{children:d[i].list.map((r,m)=>e.jsx("li",{children:r},m))})]})),Object.keys(s).map(i=>e.jsx(e.Fragment,{children:e.jsxs("p",{children:[e.jsxs("b",{children:[s[i].title,":"]}),e.jsx("br",{}),s[i].description]})}))]})})}const w=b(C)(({theme:t})=>({backgroundColor:t.palette.mode==="dark"?"#1A2027":"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary}));function Q(){const[t,a]=o.useState([]),[d,x]=o.useState({Power:null,TopSpeed:null});function c(s){var n=JSON.parse(localStorage.getItem("compareList")),l=n;l.splice(s,1),localStorage.setItem("compareList",JSON.stringify(l)),a(l)}o.useEffect(()=>{var s=JSON.parse(localStorage.getItem("compareList"));if(console.log("var list"),console.log(s),s!=null){a(s);var n={Power:p(s,"Power"),TopSpeed:p(s,"TopSpeed"),Range:p(s,"Range")};x(n),console.log(d.power)}},[t]);function p(s,n){if(s.length===0)return{max:null,min:null};if(s.length===1)return{max:s[0],min:s[0]};let l=s[0],i=s[0];for(let r=1;r<s.length;r++)console.log(),parseInt(s[r].motorInfo[n].description.split(" ")[0])>parseInt(l.motorInfo[n].description.split(" ")[0])&&(l=s[r]),parseInt(s[r].motorInfo[n].description.split(" ")[0])<parseInt(i.motorInfo[n].description.split(" ")[0])&&(i=s[r]);return{max:l,min:i}}return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"center-container",children:e.jsx("h1",{children:"Car Comparator"})}),t.length!=0?e.jsx(S,{sx:{marginTop:"20px"},children:e.jsx(u,{container:!0,spacing:2,children:t.map((s,n)=>e.jsx(e.Fragment,{children:e.jsxs(u,{xs:3,md:3,children:[e.jsx("div",{style:{background:"#f3f2f1"},children:e.jsxs("div",{children:[e.jsx(f,{title:"Remove from list",children:e.jsx(g,{onClick:()=>c(n),children:e.jsx(v,{color:"error"})})}),e.jsx(f,{title:"Car page",children:e.jsx(P,{to:"/carPage/"+s.id,children:e.jsx(g,{children:e.jsx(I,{})})},n)})]})}),e.jsx(w,{children:e.jsx(k,{info:s,starsList:d})})]})}))})}):e.jsx("div",{style:{position:"fixed",left:0,width:"100%",height:"80%",display:"flex",justifyContent:"center",alignItems:"center",background:"#ffffff"},children:e.jsx("div",{style:{justifyContent:"center"},children:e.jsx("h3",{children:" Comparation List is empty!"})})})]})}export{Q as default};
