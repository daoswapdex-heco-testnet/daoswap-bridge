(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb690caa"],{"1db3":function(t,e,n){},2038:function(t,e,n){},2909:function(t,e,n){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function c(t){if(Array.isArray(t))return a(t)}n.d(e,"a",(function(){return r}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("fb6a"),n("b0c0");function o(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return c(t)||s(t)||o(t)||i()}},"2d2d":function(t,e,n){},"43ac":function(t,e,n){},4469:function(t,e,n){},"4df4":function(t,e,n){"use strict";var a=n("0366"),c=n("7b0b"),s=n("9bdd"),o=n("e95a"),i=n("50c4"),r=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,d,f,m,h=c(t),p="function"==typeof this?this:Array,v=arguments.length,b=v>1?arguments[1]:void 0,w=void 0!==b,C=l(h),g=0;if(w&&(b=a(b,v>2?arguments[2]:void 0,2)),void 0==C||p==Array&&o(C))for(e=i(h.length),n=new p(e);e>g;g++)m=w?b(h[g],g):h[g],r(n,g,m);else for(d=C.call(h),f=d.next,n=new p;!(u=f.call(d)).done;g++)m=w?s(d,b,[u.value,g],!0):u.value,r(n,g,m);return n.length=g,n}},"519b":function(t,e,n){"use strict";n("9fc3")},"80f4":function(t,e,n){"use strict";n("4469")},"852b":function(t,e,n){"use strict";n("43ac")},"9bdd":function(t,e,n){var a=n("825a"),c=n("2a62");t.exports=function(t,e,n,s){try{return s?e(a(n)[0],n[1]):e(n)}catch(o){throw c(t),o}}},"9fc3":function(t,e,n){},a5f7:function(t,e,n){t.exports=n.p+"img/logo.cf95f8bd.svg"},a630:function(t,e,n){var a=n("23e7"),c=n("4df4"),s=n("1c7e"),o=!s((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:o},{from:c})},b420:function(t,e,n){t.exports=n.p+"img/copy.e70acd27.svg"},b6d9:function(t,e,n){"use strict";n("c9ff")},c879:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("Header"),t._t("default"),n("Footer")],2)},c=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("CLink",{staticClass:"brand",attrs:{to:{name:"home"}}},[a("img",{staticClass:"brand-logo",attrs:{src:n("a5f7")}})]),a("Menu"),a("CFlexSpan"),a("Wallets")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wallets"},[t.connectedWallets.length?[t._l(t.connectedWallets,(function(e){return a("CPopover",{key:e.name,attrs:{trigger:"hover"},scopedSlots:t._u([{key:"content",fn:function(){return[a("Wallet",{attrs:{wallet:e}})]},proxy:!0}],null,!0)},[a("CButton",[a("img",{staticClass:"wallet-icon",attrs:{src:e.icon}})])],1)})),a("CPopover",{staticClass:"show-all",scopedSlots:t._u([{key:"content",fn:function(){return[a("ConnectWallet",{on:{close:function(e){t.connectWalletVisible=!1}}})]},proxy:!0}]),model:{value:t.connectWalletVisible,callback:function(e){t.connectWalletVisible=e},expression:"connectWalletVisible"}},[a("CButton",[a("img",{attrs:{src:n("fc34")}})])],1)]:a("CPopover",{scopedSlots:t._u([{key:"content",fn:function(){return[a("ConnectWallet",{on:{close:function(e){t.connectWalletVisible=!1}}})]},proxy:!0}],null,!1,2641673721),model:{value:t.connectWalletVisible,callback:function(e){t.connectWalletVisible=e},expression:"connectWalletVisible"}},[a("CButton",{staticClass:"connect-wallet-button"},[t._v(t._s(t.$t("common.wallets.connectWallet")))])],1)],2)},r=[],l=n("1da1"),u=(n("96cf"),n("4de4"),n("159b"),n("b0c0"),n("8bbf")),d=n.n(u),f=n("4ec8"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("CCard",{staticClass:"wallet"},[a("div",{staticClass:"top"},[a("img",{staticClass:"wallet-icon",attrs:{src:t.wallet.icon}}),a("span",{staticClass:"wallet-name"},[t._v(" "+t._s(t.$formatEnum(t.wallet.name,{type:"walletName"}))+" ")])]),a("div",{staticClass:"address"},[a("span",{staticClass:"address-value"},[t._v(t._s(t.$formatLongText(t.wallet.address)))]),a("CButton",{on:{click:function(e){return t.copy(t.wallet.address)}}},[a("img",{attrs:{src:n("b420")}})])],1)])},h=[],p=n("f1cd"),v=n.n(p),b={name:"Wallet",props:{wallet:Object},methods:{copy:function(t){v()(t),this.$message.success(this.$t("messages.copied",{text:t}))}}},w=b,C=(n("e2a9"),n("2877")),g=Object(C["a"])(w,m,h,!1,null,"29ee9a0e",null),_=g.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CCard",[n("div",{staticClass:"content"},["home"==t.$route.name?n("div",{staticClass:"chains"},t._l(t.chains,(function(e){return n("CButton",{key:e.id,staticClass:"chain",class:{selected:t.chainIdWithDefault===e.id},on:{click:function(n){t.chainId=e.id},mouseover:function(n){t.chainId=e.id}}},[n("img",{staticClass:"chain-icon",attrs:{src:e.icon}})])})),1):t._e(),"nft"==t.$route.name?n("div",{staticClass:"chains"},t._l(t.nftChains,(function(e){return n("CButton",{key:e.id,staticClass:"chain",class:{selected:t.chainIdWithDefault===e.id},on:{click:function(n){t.chainId=e.id},mouseover:function(n){t.chainId=e.id}}},[n("img",{staticClass:"chain-icon",attrs:{src:e.icon}})])})),1):t._e(),n("CDivider",{attrs:{direction:"vertical"}}),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{key:t.chain.id,staticClass:"wallets"},[n("div",{staticClass:"chain-name"},[t._v(" "+t._s(t.$t("common.connectWallet.chainName",{chainName:t.$formatEnum(t.chain.id,{type:"chainName"})}))+" ")]),t._l(t.chainWallets,(function(e){return n("div",{key:e.name},[e.connected&&e.name===t.chain.selectedWalletName?n("div",{staticClass:"wallet"},[n("img",{staticClass:"wallet-icon",attrs:{src:e.icon}}),n("span",{staticClass:"wallet-name"},[t._v(" "+t._s(t.$t("common.connectWallet.walletConnected",{walletName:t.$formatEnum(e.name,{type:"walletName"})}))+" ")])]):n("CButton",{staticClass:"connect",on:{click:function(n){return t.connect(t.chain,e)}}},[n("span",{staticClass:"wallet-name"},[t._v(" "+t._s(t.$t("common.connectWallet.connectWallet",{walletName:t.$formatEnum(e.name,{type:"walletName"})}))+" ")]),n("img",{staticClass:"wallet-icon",attrs:{src:e.icon}})])],1)}))],2)])],1)])},x=[],W=n("b00c"),$={name:"ConnectWallet",data:function(){return{chainId:0}},computed:{chains:function(){return this.$store.getters.chains.filter((function(t){return t.id!==W["a"].Poly}))},nftChains:function(){return this.$store.getters.chains.filter((function(t){return t.id!==W["a"].Poly&&t.id!==W["a"].Ont&&t.id!==W["a"].Neo}))},chainIdWithDefault:function(){return this.chainId?this.chainId:this.chains[0].id},chain:function(){return this.$store.getters.getChain(this.chainIdWithDefault)},chainWallets:function(){return this.$store.getters.getWalletsByChainId(this.chainIdWithDefault)}},methods:{connect:function(t,e){var n=this;return Object(l["a"])(regeneratorRuntime.mark((function a(){var c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e.installed){a.next=10;break}if(e.connected){a.next=7;break}return a.next=4,Object(f["a"])(e.name);case 4:return c=a.sent,a.next=7,c.connect();case 7:n.$store.dispatch("setChainSelectedWallet",{chainId:t.id,walletName:e.name}),a.next=11;break;case 10:window.open(e.downloadUrl);case 11:case"end":return a.stop()}}),a)})))()}}},k=$,E=(n("852b"),Object(C["a"])(k,y,x,!1,null,"43895180",null)),O=E.exports,j={name:"Wallets",components:{Wallet:_,ConnectWallet:O},data:function(){return{connectWalletVisible:!1}},computed:{wallets:function(){return this.$store.getters.wallets},connectedWallets:function(){return this.wallets.filter((function(t){return t.connected}))}},created:function(){this.wallets.forEach(function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=d.a,t.next=3,Object(f["a"])(e.name);case 3:t.t1=t.sent,t.t0.use.call(t.t0,t.t1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.$store.dispatch("loadChainSelectedWallets")}},I=j,A=(n("519b"),Object(C["a"])(I,i,r,!1,null,"16265639",null)),S=A.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("CLink",{staticClass:"item",attrs:{href:"https://app.heco.daoswap.cc/#/swap",target:"_self"}},[t._v(" "+t._s(t.$t("common.menu.swap"))+" ")]),n("CLink",{staticClass:"item",attrs:{href:"https://app.heco.daoswap.cc/#/pool",target:"_self"}},[t._v(" "+t._s(t.$t("common.menu.pool"))+" ")]),n("CLink",{staticClass:"item",attrs:{href:"https://app.heco.daoswap.cc/#/dao",target:"_self"}},[t._v(" "+t._s(t.$t("common.menu.dao"))+" ")]),n("CLink",{staticClass:"item",attrs:{href:"https://app.heco.daoswap.cc/#/governace",target:"_self"}},[t._v(" "+t._s(t.$t("common.menu.governace"))+" ")]),n("CLink",{class:"home"==t.$route.name||"transactions"==t.$route.name?"active item":"item",attrs:{to:{name:"home"},target:"_self"}},[t._v(" "+t._s(t.$t("common.menu.token"))+" ")])],1)},V=[],B=n("e490"),D={name:"Menu",data:function(){return{mainnet:B["a"]}},mounted:function(){}},L=D,P=(n("f7fc"),Object(C["a"])(L,N,V,!1,null,"7383278c",null)),R=P.exports,M={name:"Header",components:{Wallets:S,Menu:R}},T=M,F=(n("edbd"),Object(C["a"])(T,s,o,!1,null,"4b3c0b8b",null)),H=F.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"bottom"},[n("div",{staticClass:"copyright"},[t._v(" "+t._s(t.$t("common.footer.copyright"))+" ")])])])},q=[],J={name:"Footer",methods:{changeLocale:function(){this.$i18n.locale="en"===this.$i18n.locale?"zh-cn":"en"}}},z=J,G=(n("b6d9"),Object(C["a"])(z,U,q,!1,null,"9fdd74ec",null)),K=G.exports,Q={name:"Page",components:{Header:H,Footer:K}},X=Q,Y=(n("80f4"),Object(C["a"])(X,a,c,!1,null,"847e4dd0",null));e["a"]=Y.exports},c9ff:function(t,e,n){},d577:function(t,e,n){t.exports=n.p+"img/status-waiting.bfe3b4e5.svg"},d889:function(t,e,n){t.exports=n.p+"img/status-pending.8b72821a.svg"},e2a9:function(t,e,n){"use strict";n("2038")},e65e:function(t,e,n){t.exports=n.p+"img/status-failed.82577b26.svg"},eb39:function(t,e,n){t.exports=n.p+"img/status-succeeded.d67a2600.svg"},edbd:function(t,e,n){"use strict";n("2d2d")},f1cd:function(t,e){function n(t){if(navigator.clipboard)return navigator.clipboard.writeText(t).catch((function(t){throw void 0!==t?t:new DOMException("The request is not allowed","NotAllowedError")}));var e=document.createElement("span");e.textContent=t,e.style.whiteSpace="pre",e.style.webkitUserSelect="auto",e.style.userSelect="all",document.body.appendChild(e);var n=window.getSelection(),a=window.document.createRange();n.removeAllRanges(),a.selectNode(e),n.addRange(a);var c=!1;try{c=window.document.execCommand("copy")}catch(s){console.log("error",s)}return n.removeAllRanges(),window.document.body.removeChild(e),c?Promise.resolve():Promise.reject(new DOMException("The request is not allowed","NotAllowedError"))}
/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
t.exports=n},f7fc:function(t,e,n){"use strict";n("1db3")},fc34:function(t,e,n){t.exports=n.p+"img/chevron-down.3632f1e3.svg"}}]);