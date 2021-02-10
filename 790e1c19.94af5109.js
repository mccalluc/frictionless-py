(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(136)),l={title:"HTML Tutorial",sidebar_label:"HTML"},o={unversionedId:"tutorials/html-tutorial",id:"tutorials/html-tutorial",isDocsHomePage:!1,title:"HTML Tutorial",description:"This functionality requires an experimental html plugin. Read More",source:"@site/../docs/tutorials/html-tutorial.md",slug:"/tutorials/html-tutorial",permalink:"/docs/tutorials/html-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/tutorials/html-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1612978628,sidebar_label:"HTML",sidebar:"tutorials",previous:{title:"Google Sheets Tutorial",permalink:"/docs/tutorials/gsheets-tutorial"},next:{title:"Inline Tutorial",permalink:"/docs/tutorials/inline-tutorial"}},c=[{value:"Reading HTML",id:"reading-html",children:[]},{value:"Writing HTML",id:"writing-html",children:[]},{value:"Configuring HTML",id:"configuring-html",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This functionality requires an experimental ",Object(i.b)("inlineCode",{parentName:"p"},"html")," plugin. ",Object(i.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More")))),Object(i.b)("p",null,"Frictionless supports parsing HTML format"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"!pip install frictionless[html]\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"! cat data/table1.html\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="UTF-8">\n</head>\n<body>\n    <table>\n        <tr>\n            <td>id</td>\n            <td>name</td>\n        </tr>\n        <tr>\n            <td>1</td>\n            <td>english</td>\n        </tr>\n        <tr>\n            <td>2</td>\n            <td>\u4e2d\u56fd\u4eba</td>\n        </tr>\n    </table>\n</body>\n</html\n')),Object(i.b)("h2",{id:"reading-html"},"Reading HTML"),Object(i.b)("p",null,"You can this file format using ",Object(i.b)("inlineCode",{parentName:"p"},"Package/Resource")," or ",Object(i.b)("inlineCode",{parentName:"p"},"Table")," API, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(path='data/table1.html')\nprint(resource.read_rows())\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '\u4e2d\u56fd\u4eba')])]\n")),Object(i.b)("h2",{id:"writing-html"},"Writing HTML"),Object(i.b)("p",null,"The same is actual for writing:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\n\nresource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\nresource.write('tmp/table.html')\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"'tmp/table.html'\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"!cat tmp/table.html\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"<html><body><table>\n<tr><td>id</td><td>name</td></tr>\n<tr><td>1</td><td>english</td></tr>\n<tr><td>2</td><td>german</td></tr>\n</table></body></html>\n")),Object(i.b)("h2",{id:"configuring-html"},"Configuring HTML"),Object(i.b)("p",null,"There is a dialect to configure HTML, for example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"from frictionless import Resource\nfrom frictionless.plugins.html import HtmlDialect\n\nresource = Resource(path='data/table1.html', dialect=HtmlDialect(selector='#id'))\nprint(resource.read_rows())\n")),Object(i.b)("p",null,"References:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://frictionlessdata.io/tooling/python/formats-reference/#html"},"HTML Dialect"))))}p.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);