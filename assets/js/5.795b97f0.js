(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{334:function(t,e,n){},335:function(t,e,n){},336:function(t,e,n){},337:function(t,e,n){},338:function(t,e,n){},381:function(t,e,n){"use strict";var a=n(334);n.n(a).a},382:function(t,e,n){"use strict";var a=n(335);n.n(a).a},383:function(t,e,n){"use strict";var a=n(336);n.n(a).a},384:function(t,e,n){"use strict";var a=n(337);n.n(a).a},385:function(t,e,n){"use strict";var a=n(338);n.n(a).a},395:function(t,e,n){"use strict";n.r(e);var a={name:"GuluLayout",data:()=>({layoutClass:{hasSider:!1}}),mounted(){this.$children.forEach(t=>{"GuluSider"===t.$options.name&&(this.layoutClass.hasSider=!0)})}},s=(n(381),n(43)),i=Object(s.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"8f6989ac",null).exports,o={name:"GuluSider",data:()=>({visible:!0}),methods:{}},l=(n(382),Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"41722902",null).exports),r={name:"GuluHeader"},u=(n(383),Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"05ce270c",null).exports),c={name:"GuluContent"},d=(n(384),Object(s.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"d6e4a192",null).exports),f={name:"GuluFooter"},h=(n(385),{components:{"g-layout":i,"g-sider":l,"g-header":u,"g-content":d,"g-footer":Object(s.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"fc2b0fdc",null).exports},data:()=>({content:"<g-layout>\n    <g-sider>sider</g-sider>\n    <g-layout>\n      <g-header>header</g-header>\n      <g-content>content</g-content>\n      <g-footer>footer</g-footer>\n    </g-layout>\n  </g-layout>"})}),v=Object(s.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("g-layout",{staticStyle:{height:"100vh"}},[n("g-sider",[t._v("sider")]),t._v(" "),n("g-layout",[n("g-header",[t._v("header")]),t._v(" "),n("g-content",[t._v("content")]),t._v(" "),n("g-footer",[t._v("footer")])],1)],1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[],!1,null,"34f4d3f2",null);e.default=v.exports}}]);