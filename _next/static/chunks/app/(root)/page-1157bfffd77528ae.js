(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[707,276,481],{7834:function(e,t,r){Promise.resolve().then(r.bind(r,786))},786:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var s=r(7437),n=r(2265),l=r(495),a=r(3102),i=r(9343),o=r(8472),c=e=>{let{handleSetVideos:t,videosAvailable:r}=e,{register:n,handleSubmit:c}=(0,i.cI)(),d=async e=>{try{let r=await o.Z.get("/api/search?query=".concat(e.search)),s=r.data;t(s),console.log("-----res----",r)}catch(e){t(null),console.log("-----error----",e)}};return(0,s.jsxs)("form",{onSubmit:c(d),className:"flex items-center mx-auto  ".concat(r?"w-full":"w-[686px]"),children:[(0,s.jsx)(a.I,{...n("search"),className:"input-class h-[52px]  focus-visible:ring-0 focus-visible:bg-gray-400 relative border-gray-300",type:"text",placeholder:"Что хотите посмотреть?"}),(0,s.jsxs)(l.z,{className:"bg-yellow-500 w-[150px] h-[52px] flex justify-center items-center font-montserrat text-black rounded-r-[5px] relative",type:"submit",children:[r?(0,s.jsx)("svg",{className:"absolute left-0 top-1/2 -translate-x-[190%] -translate-y-1/2 cursor-pointer",width:"24",height:"21",viewBox:"0 0 24 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M20.8401 2.60999C20.3294 2.099 19.7229 1.69364 19.0555 1.41708C18.388 1.14052 17.6726 0.998169 16.9501 0.998169C16.2276 0.998169 15.5122 1.14052 14.8448 1.41708C14.1773 1.69364 13.5709 2.099 13.0601 2.60999L12.0001 3.66999L10.9401 2.60999C9.90843 1.5783 8.50915 0.998704 7.05012 0.998704C5.59109 0.998704 4.19181 1.5783 3.16012 2.60999C2.12843 3.64169 1.54883 5.04096 1.54883 6.49999C1.54883 7.95903 2.12843 9.3583 3.16012 10.39L4.22012 11.45L12.0001 19.23L19.7801 11.45L20.8401 10.39C21.3511 9.87924 21.7565 9.27281 22.033 8.60535C22.3096 7.93789 22.4519 7.22248 22.4519 6.49999C22.4519 5.77751 22.3096 5.0621 22.033 4.39464C21.7565 3.72718 21.3511 3.12075 20.8401 2.60999V2.60999Z",stroke:"#F65980",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}):null,"Найти"]})]})},d=r(6648),u=r(7138),f=r(357),x=e=>{let{video:t}=e;return(0,s.jsxs)("div",{className:"h-[236px]  rounded-lg flex flex-col gap-2",children:[(0,s.jsx)("div",{className:"relative h-[138px] w-full bg-img",style:{backgroundImage:"url(".concat(t.thumbnail,")")},children:(0,s.jsx)(u.default,{href:"".concat(f.env.NEXT_PUBLIC_YOUTUBE_VIDEO_LINK,"/").concat(t.id),className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",target:"_blank",children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",children:[(0,s.jsx)("path",{fill:"#FF3D00",d:"M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"}),(0,s.jsx)("path",{fill:"#FFF",d:"M20 31L20 17 32 24z"})]})})}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-2",children:[(0,s.jsx)("h6",{className:"overflow-hidden clap clap-1 text-black text-sm leading-4 font-montserrat",children:t.title}),(0,s.jsx)("p",{className:"overflow-hidden clap clap-1 font-montserrat font-normal text-sm leading-4",children:t.description}),(0,s.jsx)("p",{className:"overflow-hidden clap clap-1 font-montserrat font-normal text-sm leading-4",children:t.views})]})]})},g=e=>{let{videos:t}=e;return(0,s.jsxs)("div",{className:"w-full flex flex-col pt-4 gap-4",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsxs)("h6",{className:"font-normal font-montserrat leading-6 text-base text-black",children:["Видео по запросу \xabчем кормить кота\xbb"," ",(0,s.jsxs)("span",{className:"text-gray-700",children:["     ",t.pageInfo.totalResults]})]}),(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(d.default,{src:"/icons/list.svg",alt:"list",width:24,height:24}),(0,s.jsx)(d.default,{src:"/icons/grid.svg",alt:"list",width:24,height:24})]})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4  lg:gap-4 w-full",children:t.data.map((e,t)=>(0,s.jsx)(x,{video:e},e.id))})]})},h=()=>{let[e,t]=n.useState(null);return(0,s.jsxs)("div",{className:"flex gap-4 flex-col w-full",children:[(0,s.jsx)("h6",{className:"text-black font-normal   font-montserrat ".concat(e?"text-[28px]":"text-center text-4xl leading-[53px]"),children:"Поиск видео"}),(0,s.jsxs)("div",{className:"flex flex-col gap-6 w-full",children:[(0,s.jsx)(c,{handleSetVideos:e=>{t(e)},videosAvailable:!!e}),e&&(0,s.jsx)(g,{videos:e})]})]})}},495:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var s=r(7437),n=r(2265),l=r(2974),a=r(2218),i=r(7440);let o=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=n.forwardRef((e,t)=>{let{className:r,variant:n,size:a,asChild:c=!1,...d}=e,u=c?l.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(o({variant:n,size:a,className:r})),ref:t,...d})});c.displayName="Button"},3102:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var s=r(7437),n=r(2265),l=r(7440);let a=n.forwardRef((e,t)=>{let{className:r,type:n,...a}=e;return(0,s.jsx)("input",{type:n,className:(0,l.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...a})});a.displayName="Input"},7440:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var s=r(4839),n=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,s.W)(t))}},5556:function(e,t,r){"use strict";function s(e){let{src:t,width:r,quality:s}=e;return"https://youtube.stephenkilonzo.com/".concat(t,"?w=").concat(r,"&q=").concat(s||75)}r.r(t),r.d(t,{default:function(){return s}})}},function(e){e.O(0,[297,343,138,943,971,23,744],function(){return e(e.s=7834)}),_N_E=e.O()}]);