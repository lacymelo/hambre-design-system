var a=Object.defineProperty;var o=(n,r)=>a(n,"name",{value:r,configurable:!0});import{a as s,j as e}from"./jsx-runtime.682354e1.js";function t({tokens:n,hasRenValue:r=!1}){return s("table",{className:"tokens-grid",children:[s("thead",{children:[e("th",{children:"Name"}),e("th",{children:"Values"}),r&&e("th",{children:"Pixels"})]}),e("tbody",{children:Object.entries(n).map(([d,i])=>s("tr",{children:[e("td",{children:d}),e("td",{children:i}),r&&s("td",{children:[Number(i.replace("rem",""))*16,"px"]})]},d))})]})}o(t,"TokensGrid");try{t.displayName="TokensGrid",t.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRenValue:{defaultValue:{value:"false"},description:"",name:"hasRenValue",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/TokensGrid.tsx#TokensGrid"]={docgenInfo:t.__docgenInfo,name:"TokensGrid",path:"src/components/TokensGrid.tsx#TokensGrid"})}catch{}export{t as T};
//# sourceMappingURL=TokensGrid.f19caaae.js.map
