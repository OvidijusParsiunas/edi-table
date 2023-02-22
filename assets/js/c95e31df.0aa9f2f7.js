"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[594],{3483:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(e){return e.data.map(((e,t)=>{const a=""===e?"":JSON.stringify(e);return n.createElement("div",{key:t},">"," ",a)}))}},192:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>C,contentTitle:()=>M,default:()=>N,frontMatter:()=>k,metadata:()=>T,toc:()=>y});var n=a(7462),l=a(7294),r=a(3905),o=a(9272);function d(e){setTimeout((()=>{const t=Math.floor(5*Math.random()+1),a=Math.floor(5*Math.random()+1);let n="";n=1===a?Math.round(20*Math.random()*10)/10+"%":2===a?Math.round(1500*Math.random()*10)/10+"MB":3===a?Math.round(1.5*Math.random()*10)/10+"MB/s":Math.round(1.5*Math.random()*10)/10+"Mbps",e?.updateCell({newText:n,rowIndex:t,columnIndex:a}),d(e)}),40)}function i(e){let{children:t}=e;const a=l.useRef(null);return a.current&&setTimeout((()=>{d((0,o.v)(a.current?.children[0]))})),l.createElement("div",{ref:a},l.createElement(o.Z,null,t))}var s=a(3483);const p=l.forwardRef(((e,t)=>{const[a,n]=l.useState([""]);return l.useImperativeHandle(t,(()=>{const e=[];return{updateText:t=>{e.length>3&&e.pop(),e.unshift(t),n([...e])}}})),l.createElement("div",null,"Method results:",l.createElement(s.Z,{data:a}))}));function m(e){let{children:t,propertyname:a,displayResults:n}=e;const r=l.useRef(null),d=l.useRef(null),i=d.current?.updateText;return l.createElement("div",null,l.createElement("div",{ref:r},l.createElement(o.Z,null,t)),l.createElement("div",{className:"example-container"},l.createElement("button",{className:"method-button",onClick:()=>{const e=(0,o.v)(r.current.children[0])[a]();(n??1)&&i(e)}},"Call Method"),(n??!0)&&l.createElement(p,{ref:d})))}var u=a(4336),c=a(9814),h=a(1262),x=a(5162),b=a(4866);const k={sidebar_position:11},M="Methods",T={unversionedId:"methods",id:"methods",title:"Methods",description:"Method properties that can be called directly on the Active Table element.",source:"@site/docs/methods.mdx",sourceDirName:".",slug:"/methods",permalink:"/docs/methods",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/active-table/tree/main/website/docs/methods.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"defaultSidebar",previous:{title:"CSV",permalink:"/docs/CSV"},next:{title:"Events",permalink:"/docs/events"}},C={},y=[{value:"<code>getContent</code>",id:"getContent",level:3},{value:"Example",id:"example",level:4},{value:"<code>getColumnsDetails</code>",id:"getColumnsDetails",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>updateCell</code>",id:"updatecell",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>importCSV</code>",id:"importCSV",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>exportCSV</code>",id:"exportCSV",level:3},{value:"Example",id:"example-4",level:4}],v={toc:y},f="wrapper";function N(e){let{components:t,...l}=e;return(0,r.kt)(f,(0,n.Z)({},v,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"methods"},"Methods"),(0,r.kt)("p",null,"Method properties that can be called directly on the Active Table element."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the Active Table component has been fully rendered on the DOM before using these.")),(0,r.kt)("h3",{id:"getContent"},(0,r.kt)("inlineCode",{parentName:"h3"},"getContent")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => (string|number)[][]"))),(0,r.kt)("p",null,"Returns current table contents 2D array."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)(h.Z,{mdxType:"BrowserOnly"},(()=>a(9875).readdAutoNavToggle())),(0,r.kt)(m,{propertyname:"getContent",mdxType:"TableContainerMethods"},(0,r.kt)(u.Z,{content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(b.Z,{mdxType:"Tabs"},(0,r.kt)(x.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"tableElementRef.getContent();\n")))),(0,r.kt)(c.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"getColumnsDetails"},(0,r.kt)("inlineCode",{parentName:"h3"},"getColumnsDetails")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("a",{parentName:"li",href:"./sharedTypes#ColumnsDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"() => ColumnsDetails")))),(0,r.kt)("p",null,"Returns details related to existing columns - ",(0,r.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"typeName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cellDropdownItems")," (if the column type contains a dropdown). This is particularly useful if the user has made changes to columns and you want to recreate them\nin the next session on the initial load."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)(m,{propertyname:"getColumnsDetails",mdxType:"TableContainerMethods"},(0,r.kt)(u.Z,{content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(b.Z,{mdxType:"Tabs"},(0,r.kt)(x.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"tableElementRef.getColumnsDetails();\n")))),(0,r.kt)(c.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"updatecell"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateCell")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"(update: {newText: string|number, rowIndex: number, columnIndex: number}) => void"))),(0,r.kt)("p",null,"Update cell text programmatically after the table has been initially rendered without triggering another re-render. Both ",(0,r.kt)("inlineCode",{parentName:"p"},"rowIndex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"columnIndex")," start\nat ",(0,r.kt)("em",{parentName:"p"},"0")," where it is the header row for ",(0,r.kt)("inlineCode",{parentName:"p"},"rowIndex")," and the left-most column for ",(0,r.kt)("inlineCode",{parentName:"p"},"columnIndex"),"."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)(i,{mdxType:"TableContainerProgrammaticUpdates"},(0,r.kt)(u.Z,{content:[["Name","CPU","Memory","Disk","Network"],["Chrome","4.5%","1400MB","0.2MB/s","1.2Mbps"],["Firefox","2.5%","800MB","0.1MB/s","0.5Mbps"],["Edge","5.5%","1000MB","1.4MB/s","0.7Mbps"],["Safari","1.5%","1200MB","1.2MB/s","0.2Mbps"],["Opera","3.5%","400MB","0.8MB/s","0.5Mbps"]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(b.Z,{mdxType:"Tabs"},(0,r.kt)(x.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'tableElementRef.updateCell({newText: "sample text", rowIndex: 1, columnIndex: 1});\n'))),(0,r.kt)(x.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  id="active-table"\n  content=\'[\n    ["Name", "CPU", "Memory", "Disk", "Network"],\n    ["Chrome", "4.5%", "1400MB", "0.2MB/s", "1.2Mbps"],\n    ["Firefox", "2.5%", "800MB", "0.1MB/s", "0.5Mbps"],\n    ["Edge", "5.5%", "1000MB", "1.4MB/s", "0.7Mbps"],\n    ["Safari", "1.5%", "1200MB", "1.2MB/s", "0.2Mbps"],\n    ["Opera", "3.5%", "400MB", "0.8MB/s", "0.5Mbps"]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n\n<script>\n  function updateCell(tableElement) {\n    setTimeout(() => {\n      const rowIndex = Math.floor(Math.random() * 5 + 1);\n      const columnIndex = Math.floor(Math.random() * 5 + 1);\n      let newText = \'\';\n      if (columnIndex === 1) {\n        newText = `${Math.round(Math.random() * 20 * 10) / 10}%`;\n      } else if (columnIndex === 2) {\n        newText = `${Math.round(Math.random() * 1500 * 10) / 10}MB`;\n      } else if (columnIndex === 3) {\n        newText = `${Math.round(Math.random() * 1.5 * 10) / 10}MB/s`;\n      } else {\n        newText = `${Math.round(Math.random() * 1.5 * 10) / 10}Mbps`;\n      }\n      tableElement.updateCell({newText, rowIndex, columnIndex});\n      updateCell(tableElement);\n    }, 100);\n  }\n  const tableElementRef = document.getElementById(\'active-table\');\n  updateCell(tableElementRef);\n<\/script>\n')))),(0,r.kt)(c.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"importCSV"},(0,r.kt)("inlineCode",{parentName:"h3"},"importCSV")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("a",{parentName:"li",href:"./sharedTypes#ColumnsDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"() => ColumnsDetails")))),(0,r.kt)("p",null,"Opens up a file browser window to select a .csv file and import its data which will be used in the table. For browser security reasons - this method can ONLY\nbe activated through user actions, such as a click of a button."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)(m,{propertyname:"importCSV",displayResults:!1,mdxType:"TableContainerMethods"},(0,r.kt)(u.Z,{content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(b.Z,{mdxType:"Tabs"},(0,r.kt)(x.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"tableElementRef.importCSV();\n")))),(0,r.kt)(c.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"exportCSV"},(0,r.kt)("inlineCode",{parentName:"h3"},"exportCSV")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("a",{parentName:"li",href:"./sharedTypes#ColumnsDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"() => ColumnsDetails")))),(0,r.kt)("p",null,"Exports table content in a .csv file."),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)(m,{propertyname:"exportCSV",displayResults:!1,mdxType:"TableContainerMethods"},(0,r.kt)(u.Z,{content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(b.Z,{mdxType:"Tabs"},(0,r.kt)(x.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"tableElementRef.exportCSV();\n")))))}N.isMDXComponent=!0}}]);