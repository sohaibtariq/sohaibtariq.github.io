(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{204:function(t,e,a){"use strict";a.r(e);a(18);var A=a(0),n=a.n(A),r=a(205),o=a(219),i=a(208),l=a(211),c=a(207),s=(a(29),a(30),a(13),a(49),a(246));a(198);function p(t){var e=t.tags,a=function(t,e){if(null==t)return{};var a,A,n={},r=Object.keys(t);for(A=0;A<r.length;A++)a=r[A],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,["tags"]);return e&&0!==e.length?A.createElement("ul",Object.assign({class:"tags"},a),e.map(function(t){return A.createElement("li",{key:t,class:"tag"},A.createElement(r.a,{to:"/tags/"+Object(s.kebabCase)(t)+"/"},t))})):null}a.d(e,"pageQuery",function(){return d});var u=function(t){var e,a;function A(){return t.apply(this,arguments)||this}return a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,A.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,A=a.previous,s=a.next;return n.a.createElement(i.a,{location:this.props.location,title:e},n.a.createElement(l.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),n.a.createElement("h1",{style:{marginTop:Object(c.a)(1),marginBottom:0}},t.frontmatter.title),n.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1)})},t.frontmatter.date),n.a.createElement(p,{tags:t.frontmatter.tags}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),n.a.createElement("hr",{style:{marginBottom:Object(c.a)(1)}}),n.a.createElement(o.a,null),n.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},n.a.createElement("li",null,A&&n.a.createElement(r.a,{to:A.fields.slug,rel:"prev"},"← ",A.frontmatter.title)),n.a.createElement("li",null,s&&n.a.createElement(r.a,{to:s.fields.slug,rel:"next"},s.frontmatter.title," →"))))},A}(n.a.Component),d=(e.default=u,"974889398")},205:function(t,e,a){"use strict";var A=a(0),n=a.n(A),r=a(66),o=a.n(r);a.d(e,"a",function(){return o.a});a(206),a(9).default.enqueue,n.a.createContext({})},206:function(t,e,a){var A;t.exports=(A=a(209))&&A.default||A},207:function(t,e,a){"use strict";a.d(e,"a",function(){return l}),a.d(e,"b",function(){return c});var A=a(215),n=a.n(A),r=a(217),o=a.n(r);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var i=new n.a(o.a);var l=i.rhythm,c=i.scale},208:function(t,e,a){"use strict";var A=a(0),n=a.n(A),r=a(205),o=a(207);a(198);var i=function(t){var e,a;function A(){return t.apply(this,arguments)||this}return a=t,(e=A).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,A.prototype.render=function(){var t,e=this.props,a=e.location,A=e.title,i=e.children;return t="/"===a.pathname?n.a.createElement("h1",{style:{fontSize:"6vw",marginBottom:Object(o.a)(1.5),marginTop:0,whiteSpace:"wrap"}},n.a.createElement(r.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(r.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},A)),n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("header",null,t),n.a.createElement("main",null,i),n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Sohaib Tariq. All rights reserved."))},A}(n.a.Component);e.a=i},209:function(t,e,a){"use strict";a.r(e);a(18);var A=a(0),n=a.n(A),r=a(95);e.default=function(t){var e=t.location,a=t.pageResources;return a?n.a.createElement(r.a,Object.assign({location:e,pageResources:a},a.json)):null}},211:function(t,e,a){"use strict";var A=a(212),n=a(0),r=a.n(n),o=a(213),i=a.n(o);function l(t){var e=t.description,a=t.lang,n=t.meta,o=t.title,l=A.data.site,c=e||l.siteMetadata.description;return r.a.createElement(i.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},e.a=l},212:function(t){t.exports={data:{site:{siteMetadata:{title:"Sohaib's Blog",description:"A blog about my wanderings in technology and life",author:"Sohaib Tariq"}}}}},219:function(t,e,a){"use strict";a(220);var A=a(221),n=a(0),r=a.n(n),o=a(242),i=a.n(o),l=a(243),c=a(207);e.a=function(){var t=A.data,e=t.site.siteMetadata,a=e.author,n=e.social;return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},r.a.createElement(i.a,{fixed:t.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,r.a.createElement("strong",null,a)," is a fullstack developer and serial procrastinator. This is a blog about his wanderings in technology and life. You should check him out on  ",r.a.createElement(l.OutboundLink,{href:"https://www.linkedin.com/in/"+n.linkedIn},"linkedIn"),"  or shoot him an email at ",r.a.createElement("i",null,"sohaibtariq12@gmail.com")))}},221:function(t){t.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABcz5rI2UjP//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMSITL/2gAIAQEAAQUCPIG5fcVLFViNkv8A/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bp//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/AQn/xAAbEAACAgMBAAAAAAAAAAAAAAAAARExEBIi0f/aAAgBAQAGPwJxYvcao5tkn//EABoQAAIDAQEAAAAAAAAAAAAAAAEhABFhEEH/2gAIAQEAAT8hE4SlDPGxvllQEzBgI0wzYT//2gAMAwEAAgADAAAAEGf/AP/EABYRAQEBAAAAAAAAAAAAAAAAAAEQIf/aAAgBAwEBPxBwk//EABURAQEAAAAAAAAAAAAAAAAAABBB/9oACAECAQE/EKH/xAAaEAEBAQADAQAAAAAAAAAAAAABEQAhMVGR/9oACAEBAAE/EL9SlPQzdDqJS1elJ891MH45QK8666VOkhx9uU0hSM3/2Q==",width:50,height:50,src:"/static/0513969de1999e3fa4fce8d5431bfe5b/9b664/profile-pic.jpg",srcSet:"/static/0513969de1999e3fa4fce8d5431bfe5b/9b664/profile-pic.jpg 1x,\n/static/0513969de1999e3fa4fce8d5431bfe5b/06a10/profile-pic.jpg 1.5x,\n/static/0513969de1999e3fa4fce8d5431bfe5b/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"Sohaib Tariq",social:{linkedIn:"sohaib-tariq-a93329a0"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-20a09a21303493223971.js.map