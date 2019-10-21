(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{203:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return d});var A=a(0),n=a.n(A),r=a(205),o=a(246),i=a(219),l=a(208),c=a(211),s=a(207);var u=function(t){var e,a;function A(){return t.apply(this,arguments)||this}return a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,A.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,a=t.allMarkdownRemark.edges;return n.a.createElement(l.a,{location:this.props.location,title:e},n.a.createElement(c.a,{title:"All posts"}),n.a.createElement(i.a,null),a.map(function(t){var e=t.node,a=e.frontmatter.title||e.fields.slug;return n.a.createElement("div",{key:e.fields.slug},n.a.createElement("h3",{style:{marginBottom:Object(s.a)(.25)}},n.a.createElement(r.a,{style:{boxShadow:"none"},to:e.fields.slug},a)),n.a.createElement("small",null,e.frontmatter.date),e.frontmatter.tags?n.a.createElement("div",{className:"tags-container"},n.a.createElement("ul",{className:"tags"},e.frontmatter.tags.map(function(t){return n.a.createElement("li",{class:"tag",key:t+"tag"},n.a.createElement(r.a,{to:"/tags/"+Object(o.kebabCase)(t)+"/"},t))}))):null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}}))}))},A}(n.a.Component);e.default=u;var d="3493448931"},205:function(t,e,a){"use strict";var A=a(0),n=a.n(A),r=a(66),o=a.n(r);a.d(e,"a",function(){return o.a});a(206),a(9).default.enqueue,n.a.createContext({})},206:function(t,e,a){var A;t.exports=(A=a(209))&&A.default||A},207:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return c});var A=a(215),n=a.n(A),r=a(217),o=a.n(r);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var i=new n.a(o.a);var l=i.rhythm,c=i.scale},208:function(t,e,a){"use strict";var A=a(0),n=a.n(A),r=a(205),o=a(207);a(198);var i=function(t){var e,a;function A(){return t.apply(this,arguments)||this}return a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,A.prototype.render=function(){var t,e=this.props,a=e.location,A=e.title,i=e.children;return t="/"===a.pathname?n.a.createElement("h1",{style:{fontSize:"6vw",marginBottom:Object(o.a)(1.5),marginTop:0,whiteSpace:"wrap"}},n.a.createElement(r.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(r.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("header",null,t),n.a.createElement("main",null,i),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Sohaib Tariq. All rights reserved."))},A}(n.a.Component);e.a=i},209:function(t,e,a){"use strict";a.r(e);a(18);var A=a(0),n=a.n(A),r=a(95);e.default=function(t){var e=t.location,a=t.pageResources;return a?n.a.createElement(r.a,Object.assign({location:e,pageResources:a},a.json)):null}},211:function(t,e,a){"use strict";var A=a(212),n=a(0),r=a.n(n),o=a(213),i=a.n(o);function l(t){var e=t.description,a=t.lang,n=t.meta,o=t.title,l=A.data.site,c=e||l.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},212:function(t){t.exports={data:{site:{siteMetadata:{title:"Sohaib's Blog",description:"A blog about my wanderings in technology and life",author:"Sohaib Tariq"}}}}},219:function(t,e,a){"use strict";a(220);var A=a(221),n=a(0),r=a.n(n),o=a(242),i=a.n(o),l=a(243),c=a(207);e.a=function(){var t=A.data,e=t.site.siteMetadata,a=e.author,n=e.social;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},r.a.createElement(i.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,r.a.createElement("strong",null,a)," is a fullstack developer and serial procrastinator. This is a blog about his wanderings in technology and life. You should check him out on  ",r.a.createElement(l.OutboundLink,{href:"https://www.linkedin.com/in/"+n.linkedIn},"linkedIn"),"  or shoot him an email at ",r.a.createElement("i",null,"sohaibtariq12@gmail.com")))}},221:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABcz5rI2UjP//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMSITL/2gAIAQEAAQUCPIG5fcVLFViNkv8A/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bp//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AQn/xAAbEAACAgMBAAAAAAAAAAAAAAAAARExEBIi0f/aAAgBAQAGPwJxYvcao5tkn//EABoQAAIDAQEAAAAAAAAAAAAAAAEhABFhEEH/2gAIAQEAAT8hE4SlDPGxvllQEzBgI0wzYT//2gAMAwEAAgADAAAAEGf/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPxBwk//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/EKH/xAAaEAEBAQADAQAAAAAAAAAAAAABEQAhMVGR/9oACAEBAAE/EL9SlPQzdDqJS1elJ891MH45QK8666VOkhx9uU0hSM3/2Q==",width:50,height:50,src:"/static/0513969de1999e3fa4fce8d5431bfe5b/9b664/profile-pic.jpg",srcSet:"/static/0513969de1999e3fa4fce8d5431bfe5b/9b664/profile-pic.jpg 1x,\n/static/0513969de1999e3fa4fce8d5431bfe5b/06a10/profile-pic.jpg 1.5x,\n/static/0513969de1999e3fa4fce8d5431bfe5b/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Sohaib Tariq",social:{linkedIn:"sohaib-tariq-a93329a0"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-0d32fb8877dadd89cec4.js.map