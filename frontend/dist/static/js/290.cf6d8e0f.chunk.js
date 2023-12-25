"use strict";(self.webpackChunkobserver=self.webpackChunkobserver||[]).push([[290],{1653:function(e,a,t){var r=t(5671),n=t(3144),o=t(136),i=t(9388),s=t(7313),l=t(5590),c=t(6417),u=function(e){(0,o.Z)(t,e);var a=(0,i.Z)(t);function t(){return(0,r.Z)(this,t),a.apply(this,arguments)}return(0,n.Z)(t,[{key:"render",value:function(){var e=this.props,a=e.t,t=e.className,r=e.icon,n=e.label,o=e.value,i=e.unit,s=e.color;return(0,c.jsx)("div",{className:"w-full p-2 ".concat(t),children:(0,c.jsxs)("div",{className:"flex flex-row bg-gradient-to-r rounded-md p-4 shadow-xl ".concat(s?"from-indigo-500 via-purple-500 to-pink-500":"bg-slate-50 hover:bg-slate-100"),children:[r&&(0,c.jsx)("img",{className:"bg-white p-2 rounded-md w-8 h-8 md:w-12 md:h-12 self-center",src:r,alt:""}),(0,c.jsxs)("div",{className:"flex flex-col flex-grow ".concat(r&&"ml-5"),children:[(0,c.jsx)("div",{className:"text-sm whitespace-nowrap ".concat(s?"text-gray-50":"text-gray-600"),children:a(n.id,n.format)}),(0,c.jsx)("div",{className:"text-md font-medium flex-nowrap ".concat(s?"text-gray-100":"text-gray-800"),children:"".concat(o," ").concat(a(i.id,i.format))})]})]})})}}]),t}(s.Component);a.Z=(0,l.Zh)()(u)},1179:function(e,a,t){t.r(a),t.d(a,{default:function(){return _}});var r=t(1413),n=t(4165),o=t(5861),i=t(5671),s=t(3144),l=t(136),c=t(9388),u=t(7313),d=t(3670),m=t(8669),h=t(5097),v=t(501),f=t(318),p=t(1653),b=t(4656),x=t(5608),Z=t(3676),g=t(1109),w=t(19),y=t(4580),j=t(8153),k=t(9062);var C=t.p+"static/media/location-dot-solid.763794361437464c10451de38cd290f7.svg",N=(t(3331),t(7248)),z=t.n(N),F=t(6417),D=function(e){(0,l.Z)(t,e);var a=(0,c.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=a.call(this,e)).state={map:(0,u.createRef)()},r}return(0,s.Z)(t,[{key:"componentDidUpdate",value:function(){var e,a=this.props,t=a.center,r=a.flyTo,n=a.zoom,o=null===(e=this.state.map)||void 0===e?void 0:e.current;o&&r&&(null===o||void 0===o||o.flyTo(t,n))}},{key:"render",value:function(){var e=this.props,a=e.className,t=e.minZoom,r=e.maxZoom,n=e.center,o=e.zoom,i=e.tile,s=e.marker,l=e.dragging,c=e.zoomControl,u=this.state.map,d=new(z().Icon)({iconUrl:C,iconAnchor:[13,28],iconSize:[18,25]});return(0,F.jsxs)(y.h,{ref:u,className:"z-0 w-full ".concat(a),zoomControl:c,attributionControl:!1,scrollWheelZoom:!1,doubleClickZoom:!1,dragging:l,maxZoom:r,minZoom:t,center:n,zoom:o,style:{cursor:"default"},children:[(0,F.jsx)(j.I,{url:i}),s&&(0,F.jsx)(k.J,{position:s,icon:d})]})}}]),t}(u.Component),A=t(284);var S=t.p+"static/media/circle-check-solid.3fb46b8931cbbf9f966175f42b55a087.svg";var E=t.p+"static/media/bug-solid.7f781f9ddd35c29f11111e36602dcc87.svg";var q=t.p+"static/media/paper-plane-solid.e1f40db20eab51657c5490a69c103292.svg";var T=t.p+"static/media/circle-xmark-solid.ea0857c87457d25b161c3a37ad4e3845.svg";var W=t.p+"static/media/hourglass-half-solid.1e8dc3284939ca52c0fd542da1fbf89b.svg";var G=t.p+"static/media/clock-solid.23025348eaec720a2439930b37d677ee.svg",I=t(2468),U=t(4477),V=function(e){(0,l.Z)(t,e);var a=(0,c.Z)(t);function t(){return(0,i.Z)(this,t),a.apply(this,arguments)}return(0,s.Z)(t,[{key:"render",value:function(){var e=this.props,a=e.tag,t=e.timer,r=e.onData,n=e.onError,o=e.onFetch,i=e.children,s=e.retry,l=Array.isArray(i)?i:[i];return(0,F.jsx)(U.Z,{url:a,interval:t,promise:o,retryCount:s,onFailure:n,render:function(){return l},onSuccess:function(e){return r&&r(e),!0}})}}]),t}(u.Component),J=function(e){var a=(e||{}).error,t=(null===e||void 0===e?void 0:e.data)||{},n=t.uuid,o=t.station,i=t.uptime,s=t.os,l={id:"views.home.banner.error.label"},c={id:"views.home.banner.error.text"};return a||(l={id:"views.home.banner.success.label",format:{station:o}},c={id:"views.home.banner.success.text",format:(0,r.Z)((0,r.Z)({},s),{},{uptime:i,uuid:n})}),{type:a?"error":"success",label:l,text:c}},R=t(7762),$=t(7912),B=function(e,a){var t,r=(0,R.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value,o=a.data.status;(0,$.Z)(e,"[tag:".concat(n.tag,"]>value"),o[n.tag||""])}}catch(i){r.e(i)}finally{r.f()}return e},H=function(e,a){var t=a.data.location,n=t.longitude,o=t.latitude,i=t.elevation;return(0,r.Z)((0,r.Z)({},e),{},{area:(0,r.Z)((0,r.Z)({},e.area),{},{text:{id:"views.home.map.area.text",format:{elevation:i.toFixed(2),latitude:o.toFixed(2),longitude:n.toFixed(2)}}}),instance:(0,r.Z)((0,r.Z)({},e.instance),{},{center:[o,n],marker:[o,n]})})},K=t(3651),L=function(e,a,t){var r,n=(0,R.Z)(e);try{var o=function(){var n,o,i=r.value,s=a.data[i.tag].percent,l=[Date.now(),s],c=null===(n=e.find((function(e){return e.tag===i.tag})))||void 0===n||null===(o=n.chart.series)||void 0===o?void 0:o.data,u=(0,K.Z)(c,l,t);(0,$.Z)(e,"[tag:".concat(i.tag,"]>area>text"),{id:"views.home.areas.".concat(i.tag,".text"),format:{usage:s.toFixed(2)}}),(0,$.Z)(e,"[tag:".concat(i.tag,"]>chart>series>data"),u)};for(n.s();!(r=n.n()).done;)o()}catch(i){n.e(i)}finally{n.f()}return e},M=t(6135),O=t(7703),P=t(8146),Q=t(8780),X=t(5590),Y=function(e){(0,l.Z)(t,e);var a=(0,c.Z)(t);function t(e){var r;return(0,i.Z)(this,t),(r=a.call(this,e)).handleFetch=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(a){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,I.Z)({tag:a});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),r.handleError=function(){var e=J();r.setState({banner:e})},r.handleData=function(e){var a=e.error,t=J(e);if(!a){var n=e.data,o=n.adc,i=n.geophone,s=r.props,l=s.updateADC,c=s.updateGeophone,u=H(r.state.map,e),d=B(r.state.labels,e),m=L(r.state.areas,e,120);r.setState({labels:d,areas:m,map:u}),c&&c(i),l&&l(o)}r.setState({banner:t})},r.state={banner:{type:"warning",label:{id:"views.home.banner.warning.label"},text:{id:"views.home.banner.warning.text"}},labels:[{tag:"messages",label:{id:"views.home.labels.messages.label"},unit:{id:"views.home.labels.messages.unit"},value:"0",icon:S,color:!0},{tag:"errors",label:{id:"views.home.labels.errors.label"},unit:{id:"views.home.labels.errors.unit"},value:"0",icon:E,color:!0},{tag:"pushed",label:{id:"views.home.labels.pushed.label"},unit:{id:"views.home.labels.pushed.unit"},value:"0",icon:q,color:!0},{tag:"failures",label:{id:"views.home.labels.failures.label"},unit:{id:"views.home.labels.failures.unit"},value:"0",icon:T,color:!0},{tag:"queued",label:{id:"views.home.labels.queued.label"},unit:{id:"views.home.labels.queued.unit"},value:"0",icon:W,color:!0},{tag:"offset",label:{id:"views.home.labels.offset.label"},unit:{id:"views.home.labels.offset.unit"},value:"0",icon:G,color:!0}],areas:[{tag:"cpu",area:{label:{id:"views.home.areas.cpu.label"},text:{id:"views.home.areas.cpu.text",format:{usage:"0.00"}}},chart:{backgroundColor:"#22c55e",lineWidth:5,height:250,series:{type:"line",color:"#fff",data:[]}}},{tag:"memory",area:{label:{id:"views.home.areas.memory.label"},text:{id:"views.home.areas.memory.text",format:{usage:"0.00"}}},chart:{backgroundColor:"#06b6d4",lineWidth:5,height:250,series:{type:"line",color:"#fff",data:[]}}}],map:{area:{label:{id:"views.home.map.area.label"},text:{id:"views.home.map.area.text",format:{elevation:"0.00",latitude:"0.00",longitude:"0.00"}}},instance:{zoom:6,minZoom:3,maxZoom:7,flyTo:!0,center:[0,0],tile:"/tiles/{z}/{x}/{y}/tile.webp"}}},r}return(0,s.Z)(t,[{key:"render",value:function(){var e=this.state,a=e.banner,t=e.labels,n=e.areas,o=this.state.map,i=o.area,s=o.instance;return(0,F.jsxs)(b.Z,{children:[(0,F.jsx)(d.Z,{}),(0,F.jsx)(m.Z,{}),(0,F.jsxs)(v.Z,{children:[(0,F.jsx)(h.Z,{}),(0,F.jsxs)(V,{timer:1e3,tag:"station",onData:this.handleData,onFetch:this.handleFetch,onError:this.handleError,children:[(0,F.jsx)(f.Z,(0,r.Z)({},a)),(0,F.jsx)(g.Z,{layout:"flex",children:t.map((function(e,a){return(0,F.jsx)(p.Z,(0,r.Z)((0,r.Z)({},e),{},{className:"md:w-1/2 lg:w-1/3"}),a)}))}),(0,F.jsx)(g.Z,{layout:"grid",children:n.map((function(e,a){var t=e.area,n=e.chart;return(0,F.jsx)(x.Z,(0,r.Z)((0,r.Z)({},t),{},{children:(0,F.jsx)(Z.Z,(0,r.Z)({},n))}),a)}))}),(0,F.jsx)(g.Z,{layout:"none",children:(0,F.jsx)(x.Z,{label:i.label,text:i.text,children:(0,F.jsx)(D,(0,r.Z)({className:"h-[400px]"},s))})})]})]}),(0,F.jsx)(A.Z,{}),(0,F.jsx)(w.Z,{})]})}}]),t}(u.Component),_=(0,M.$j)(Q.Z,{updateGeophone:P.V,updateADC:O.V})((0,X.Zh)()(Y))}}]);