var s=Object.create;var a=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var c=o=>a(o,"__esModule",{value:!0});var y=(o,n)=>{for(var r in n)a(o,r,{get:n[r],enumerable:!0})},i=(o,n,r,e)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of p(n))!w.call(o,t)&&(r||t!=="default")&&a(o,t,{get:()=>n[t],enumerable:!(e=f(n,t))||e.enumerable});return o},g=(o,n)=>i(c(a(o!=null?s(d(o)):{},"default",!n&&o&&o.__esModule?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),h=(o=>(n,r)=>o&&o.get(n)||(r=i(c({}),n,1),o&&o.set(n,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var S={};y(S,{handler:()=>x});var l=require("aws-sdk"),m=g(require("delay")),u=new l.S3;async function x(){console.log(u),await(0,m.default)(5)}module.exports=h(S);0&&(module.exports={handler});