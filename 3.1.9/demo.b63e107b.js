import{c as d}from"./mobile.02ca4053.js";import{_ as r}from"./index.1db48411.js";import{m as n,r as m,e as i,j as a,g as t,o as p}from"./vendor.7bf1fc3e.js";const{createDemo:v}=d("textarea"),c=v({setup(){const e=n(""),u=n(""),s=n("");return{value:e,value2:u,value3:s}}}),f={class:"demo full"},B=t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),_=t("h2",null,"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1",-1),V=t("h2",null,"\u9AD8\u5EA6\u81EA\u5B9A\u4E49\uFF0C\u62C9\u4F38",-1),h=t("h2",null,"\u53EA\u8BFB",-1),A=t("h2",null,"\u7981\u7528",-1);function F(e,u,s,E,x,C){const o=m("nut-textarea");return p(),i("div",f,[B,a(o,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=l=>e.value=l)},null,8,["modelValue"]),_,a(o,{modelValue:e.value2,"onUpdate:modelValue":u[1]||(u[1]=l=>e.value2=l),"limit-show":"","max-length":"20"},null,8,["modelValue"]),V,a(o,{modelValue:e.value3,"onUpdate:modelValue":u[2]||(u[2]=l=>e.value3=l),rows:"10",autosize:""},null,8,["modelValue"]),h,a(o,{readonly:"","model-value":"textarea\u76F4\u8BFB\u72B6\u6001"}),A,a(o,{disabled:"","model-value":"textarea\u7981\u7528\u72B6\u6001","limit-show":"","max-length":"20"})])}var $=r(c,[["render",F]]);export{$ as default};
