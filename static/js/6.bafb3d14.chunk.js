(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{41:function(e,t,c){e.exports={card:"Card_card__2OEmE"}},42:function(e,t,c){e.exports={form:"QuoteForm_form__p3Zsk",loading:"QuoteForm_loading__1tiNe",control:"QuoteForm_control__37AB0",actions:"QuoteForm_actions__1ZNF1"}},55:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),s=c(37),r=c(41),a=c.n(r),i=c(1),u=function(e){return Object(i.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(42),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(o.a,{when:r,message:"Are you sure you want to leave. Any charges will be lost"}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=c(35),m=c(36);t.default=function(){var e=Object(h.a)(m.b),t=e.sendRequest,c=e.status,s=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&s.push("/quotes")}),[c,s]);return Object(i.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.bafb3d14.chunk.js.map