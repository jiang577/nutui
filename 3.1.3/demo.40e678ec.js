var e=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,n=(o,s,t)=>s in o?e(o,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[s]=t,l=(e,l)=>{for(var a in l||(l={}))s.call(l,a)&&n(e,a,l[a]);if(o)for(var a of o(l))t.call(l,a)&&n(e,a,l[a]);return e};import{c as a}from"./mobile.d7e7333b.js";import{a as c,m as i,A as d,B as r,C as m,r as u,o as h,e as p,j as y,g as w}from"./vendor.bcce97f3.js";import"./index.2ca4a1e4.js";const{createDemo:b}=a("address");var v=b({props:{},setup(){const e=c({province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"},{id:5,name:"浙江"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"},{id:3,name:"八里庄街道"},{id:9,name:"北苑"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]}),o=c({normal:!1,exist:!1,customImg:!1,other:!1}),s=c({selectedIcon:"heart-fill",defaultIcon:"heart1",closeBtnIcon:"close",backBtnIcon:"left"}),t=i([{id:1,addressDetail:"",cityName:"次渠镇",countyName:"通州区",provinceName:"北京市",selectedAddress:!0,townName:"",name:"探探鱼",phone:"182****1718"},{id:2,addressDetail:"",cityName:"钓鱼岛全区",countyName:"",provinceName:"钓鱼岛",selectedAddress:!1,townName:"",name:"探探鱼",phone:"182****1718"},{id:3,addressDetail:"京东大厦",cityName:"大兴区",countyName:"科创十一街18号院",provinceName:"北京市",selectedAddress:!1,townName:"",name:"探探鱼",phone:"182****1718"}]),n=c({one:"请选择地址",two:"请选择地址",three:"请选择地址",four:"请选择地址"});return l(l(l(l({showAddress:()=>{o.normal=!o.normal},showPopup:o,onChange:(s,t)=>{e[s.next].length<1&&(o[t]=!1)},close1:e=>{console.log(e),n.one=e.data.addressStr},showAddressExist:()=>{o.exist=!0},close2:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:a}=e.data;n.two=o+s+t+l+a}else n.two=e.data.addressStr},selected:(e,o,s)=>{console.log(e),console.log(o)},existAddress:t,showAddressOther:()=>{o.other=!0},showCustomImg:()=>{o.customImg=!0},close3:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:a}=e.data;n.three=o+s+t+l+a}else n.three=e.data.addressStr},close4:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:l,addressDetail:a}=e.data;n.four=o+s+t+l+a}else n.four=e.data.addressStr},switchModule:e=>{"custom"==e.type?console.log("点击了“选择其他地址”按钮"):console.log("点击了自定义地址左上角的返回按钮")},closeMask:e=>{console.log("关闭弹层",e)}},d(s)),d(n)),d(o)),d(e))}});r("data-v-60b8ad77");const C={class:"demo"},g=w("h2",null,"选择自定义地址",-1),x=w("h2",null,"选择已有地址",-1),f=w("h2",null,"自定义图标",-1),N=w("h2",null,"自定义地址与已有地址切换",-1);m(),v.render=function(e,o,s,t,n,l){const a=u("nut-cell"),c=u("nut-address");return h(),p("div",C,[g,y(a,{title:"选择地址",desc:e.one,"is-link":"",onClick:e.showAddress},null,8,["desc","onClick"]),y(c,{visible:e.normal,"onUpdate:visible":o[0]||(o[0]=o=>e.normal=o),province:e.province,city:e.city,country:e.country,town:e.town,onChange:o[1]||(o[1]=o=>e.onChange(o,"normal")),onClose:e.close1,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onClose"]),x,y(a,{title:"选择地址",desc:e.two,"is-link":"",onClick:e.showAddressExist},null,8,["desc","onClick"]),y(c,{visible:e.exist,"onUpdate:visible":o[2]||(o[2]=o=>e.exist=o),type:"exist","exist-address":e.existAddress,onChange:o[3]||(o[3]=o=>e.onChange(o,"exist")),onClose:e.close2,"is-show-custom-address":!1,onSelected:e.selected,"exist-address-title":"配送至"},null,8,["visible","exist-address","onClose","onSelected"]),f,y(a,{title:"选择地址",desc:e.three,"is-link":"",onClick:e.showCustomImg},null,8,["desc","onClick"]),y(c,{visible:e.customImg,"onUpdate:visible":o[4]||(o[4]=o=>e.customImg=o),type:"exist","exist-address":e.existAddress,onChange:o[5]||(o[5]=o=>e.onChange(o,"customImg")),onClose:e.close3,"is-show-custom-address":!1,onSelected:e.selected,"default-icon":e.defaultIcon,"selected-icon":e.selectedIcon,"close-btn-icon":e.closeBtnIcon},null,8,["visible","exist-address","onClose","onSelected","default-icon","selected-icon","close-btn-icon"]),N,y(a,{title:"选择地址",desc:e.four,"is-link":"",onClick:e.showAddressOther},null,8,["desc","onClick"]),y(c,{visible:e.other,"onUpdate:visible":o[6]||(o[6]=o=>e.other=o),type:"exist","exist-address":e.existAddress,province:e.province,city:e.city,country:e.country,town:e.town,"back-btn-icon":e.backBtnIcon,onChange:o[7]||(o[7]=o=>e.onChange(o,"other")),onClose:e.close4,onSelected:e.selected,"custom-and-exist-title":"选择其他地址",onSwitchModule:e.switchModule,onCloseMask:e.closeMask},null,8,["visible","exist-address","province","city","country","town","back-btn-icon","onClose","onSelected","onSwitchModule","onCloseMask"])])},v.__scopeId="data-v-60b8ad77";export{v as default};
