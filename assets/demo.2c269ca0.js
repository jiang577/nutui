import{c as t}from"./mobile.73260159.js";import{r as e,o as l,c as n,f as i,i as a,j as d}from"./vendor.ed841bd5.js";import"./index.8a3f4231.js";const{createDemo:o}=t("steps");var u=o({props:{},setup:()=>({})});const c={class:"demo"},r=i("h2",null,"基本用法",-1),s=d("1"),f=d("2"),p=d("3"),_=d("4"),h=i("h2",null,"标题和描述信息",-1),m=d("1"),v=i("h2",null,"自定义图标",-1),x=d("1"),g=d("2"),j=d("3"),b=i("h2",null,"竖向步骤条",-1),y={style:{height:"300px",padding:"0 20px"}},w=d("1"),D=d("2"),k=d("3"),q={style:{height:"300px",padding:"0 20px"}},z=d("1"),A=d("2"),B=d("3");u.render=function(t,d,o,u,C,E){const F=e("nut-step"),G=e("nut-steps");return l(),n("div",c,[r,i(G,{current:"1"},{default:a((()=>[i(F,{title:"进行中"},{default:a((()=>[s])),_:1}),i(F,{title:"未开始"},{default:a((()=>[f])),_:1}),i(F,{title:"未开始"},{default:a((()=>[p])),_:1}),i(F,{title:"未开始"},{default:a((()=>[_])),_:1})])),_:1}),h,i(G,{current:"2"},{default:a((()=>[i(F,{title:"已完成",content:"步骤描述"},{default:a((()=>[m])),_:1}),i(F,{title:"进行中",content:"步骤描述"}),i(F,{title:"未开始",content:"步骤描述"})])),_:1}),v,i(G,{current:"1"},{default:a((()=>[i(F,{title:"已完成",icon:"notice"},{default:a((()=>[x])),_:1}),i(F,{title:"进行中",icon:"notice"},{default:a((()=>[g])),_:1}),i(F,{class:"nut-step-wait",title:"未开始",icon:"notice"},{default:a((()=>[j])),_:1})])),_:1}),b,i("div",y,[i(G,{direction:"vertical",current:"2"},{default:a((()=>[i(F,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:a((()=>[w])),_:1}),i(F,{title:"进行中",content:"您的订单正在配送途中"},{default:a((()=>[D])),_:1}),i(F,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:a((()=>[k])),_:1})])),_:1})]),i("div",q,[i(G,{direction:"vertical","progress-dot":"",current:"2"},{default:a((()=>[i(F,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:a((()=>[z])),_:1}),i(F,{title:"进行中",content:"您的订单正在配送途中"},{default:a((()=>[A])),_:1}),i(F,{title:"未开始",content:"<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"},{default:a((()=>[B])),_:1})])),_:1})])])};export default u;
