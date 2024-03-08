"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[497],{4871:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=n(4848),a=n(8453);const r={sidebar_position:6},i="Focus Trap",s={id:"configuration/focus-trap",title:"Focus Trap",description:"Blazored Modal comes with a built-in focus trap. Focus traps are an important feature for accessability as they stop focus dropping behind the modal when pressing the tab key.",source:"@site/docs/configuration/focus-trap.md",sourceDirName:"configuration",slug:"/configuration/focus-trap",permalink:"/Modal/configuration/focus-trap",draft:!1,unlisted:!1,editUrl:"https://github.com/blazored/modal/tree/main/docs/docs/configuration/focus-trap.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Background Click",permalink:"/Modal/configuration/background-click"},next:{title:"Styling",permalink:"/Modal/category/styling"}},c={},l=[{value:"Configuring for all modals",id:"configuring-for-all-modals",level:4},{value:"Configuring for a single modal",id:"configuring-for-a-single-modal",level:4}];function d(o){const e={code:"code",em:"em",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"focus-trap",children:"Focus Trap"}),"\n",(0,t.jsxs)(e.p,{children:["Blazored Modal comes with a built-in focus trap. Focus traps are an important feature for accessability as they stop focus dropping behind the modal when pressing the ",(0,t.jsx)(e.em,{children:"tab"})," key."]}),"\n",(0,t.jsxs)(e.p,{children:["If you do wish to disable this feature, you can do so using the ",(0,t.jsx)(e.code,{children:"ActivateFocusTrap"})," option and set it to ",(0,t.jsx)(e.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(e.h4,{id:"configuring-for-all-modals",children:"Configuring for all modals"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-razor",children:'<CascadingBlazoredModal ActivateFocusTrap="false" />\n'})}),"\n",(0,t.jsx)(e.h4,{id:"configuring-for-a-single-modal",children:"Configuring for a single modal"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-csharp",children:'var options = new ModalOptions() \n{ \n    ActivateFocusTrap = false\n};\n\nModal.Show<Confirm>("Are you sure?", options);\n'})})]})}function u(o={}){const{wrapper:e}={...(0,a.R)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(d,{...o})}):d(o)}},8453:(o,e,n)=>{n.d(e,{R:()=>i,x:()=>s});var t=n(6540);const a={},r=t.createContext(a);function i(o){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function s(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(a):o.components||a:i(o.components),t.createElement(r.Provider,{value:e},o.children)}}}]);