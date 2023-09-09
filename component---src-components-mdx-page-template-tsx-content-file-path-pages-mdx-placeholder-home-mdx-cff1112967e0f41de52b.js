"use strict";(self.webpackChunkgenoswitch=self.webpackChunkgenoswitch||[]).push([[551],{5754:function(e,t,r){var n=r(5675),i=r(7622),l=r(817),a=r(5341),o=r(9971),c=r(5663),d=r(7102),u=r(5670),s=r(8702),h=r(1470);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,d.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,i.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}})),(({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),p=(0,d.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),v=l.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiDivider"}),{absolute:l=!1,children:c,className:d,component:v=(c?"div":"hr"),flexItem:g=!1,light:b=!1,orientation:w="horizontal",role:x=("hr"!==v?"separator":void 0),textAlign:Z="center",variant:E="fullWidth"}=r,S=(0,n.Z)(r,f),C=(0,i.Z)({},r,{absolute:l,component:v,flexItem:g,light:b,orientation:w,role:x,textAlign:Z,variant:E}),A=(e=>{const{absolute:t,children:r,classes:n,flexItem:i,light:l,orientation:a,textAlign:c,variant:d}=e,u={root:["root",t&&"absolute",d,l&&"light","vertical"===a&&"vertical",i&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,o.Z)(u,s.V,n)})(C);return(0,h.tZ)(m,(0,i.Z)({as:v,className:(0,a.Z)(A.root,d),role:x,ref:t,ownerState:C},S,{children:c?(0,h.tZ)(p,{className:A.wrapper,ownerState:C,children:c}):null}))}));v.muiSkipListHighlight=!0,t.Z=v},553:function(e,t,r){r.r(t),r.d(t,{Head:function(){return g},default:function(){return v},query:function(){return m}});var n=r(6736),i=r(817);function l(e){const t=Object.assign({p:"p"},(0,n.ah)(),e.components);return i.default.createElement(t.p,null,"Welcome to the genoswitch wiki! The home page is a work-in-progress at the moment, but feel free to check out the other pages using the navigation bar!")}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?i.default.createElement(t,e,i.default.createElement(l,e)):l(e)},o=r(8283),c=r(6525),d=r(1564),u=r(8626),s=r(4521),h=r(1620);const f={Reference:r(3967).Z},m="851159961",p=e=>{var t;let{pageContext:r,children:l}=e;const a=(0,u.useStaticQuery)(m);return i.createElement(i.Fragment,null,i.createElement(o.Z,null),i.createElement("br",null),i.createElement(c.Z,null,i.createElement(n.Zo,{components:f},l),r.frontmatter.references?i.createElement(h.Z,{references:null===(t=r.frontmatter)||void 0===t?void 0:t.references}):void 0),i.createElement(d.Z,{data:a}))};function v(e){return i.createElement(p,e,i.createElement(a,e))}const g=e=>i.createElement(s.F,{title:e.pageContext.frontmatter.name,description:e.pageContext.frontmatter.description})},3967:function(e,t,r){var n=r(817);t.Z=e=>{let{number:t}=e;return n.createElement("sup",{id:"ref_"+t},"[",n.createElement("a",{href:"#ref_note-"+t},t),"]")}},1620:function(e,t,r){var n=r(817),i=r(5754);t.Z=e=>{let{references:t}=e;if(t)return n.createElement(n.Fragment,null,n.createElement(i.Z,{variant:"middle"}),n.createElement("h4",null,"References"),t.map((e=>{if(null!=e&&e.number&&null!=e&&e.author&&null!=e&&e.title&&null!=e&&e.journal&&null!=e&&e.published_date&&null!=e&&e.doi)return n.createElement("span",{id:"ref_note-"+(null==e?void 0:e.number)},null==e?void 0:e.number,". ",n.createElement("a",{href:"#ref_"+(null==e?void 0:e.number)},"^")," ",null==e?void 0:e.author,', "',null==e?void 0:e.title,'",'," ",n.createElement("i",null,null==e?void 0:e.journal),null!=e&&e.volume?", "+e.volume:"",", ",null==e?void 0:e.published_date,", Available:"," ",n.createElement("a",{target:"_blank",href:"https://doi.org/"+(null==e?void 0:e.doi)},"https://doi.org/"+(null==e?void 0:e.doi)))})));throw new Error("Null references passed to ReferenceProvider!")}},6736:function(e,t,r){r.d(t,{Zo:function(){return o},ah:function(){return l}});var n=r(817);const i=n.default.createContext({});function l(e){const t=n.default.useContext(i);return n.default.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function o({components:e,children:t,disableParentContext:r}){let o;return o=r?"function"==typeof e?e({}):e||a:l(e),n.default.createElement(i.Provider,{value:o},t)}}}]);