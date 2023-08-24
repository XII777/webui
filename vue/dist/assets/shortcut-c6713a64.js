import{cL as Q,cM as Z,d as H,bq as ee,$ as M,l as q,_ as T,a as f,a0 as U,h as B,c as _,P as L,j as Y,u as z,aI as ne,b0 as ae,aM as te,aw as re,w as ue,f as le,aj as R,aK as oe,i as ie}from"./index-a4883aca.js";function ce(n,e){var u=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!u){if(Array.isArray(n)||(u=Q(n))||e&&n&&typeof n.length=="number"){u&&(n=u);var o=0,s=function(){};return{s,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var k=!0,m=!1,g;return{s:function(){u=u.call(n)},n:function(){var c=u.next();return k=c.done,c},e:function(c){m=!0,g=c},f:function(){try{!k&&u.return!=null&&u.return()}finally{if(m)throw g}}}}var X=1/0,de=17976931348623157e292;function ke(n){if(!n)return n===0?n:0;if(n=Z(n),n===X||n===-X){var e=n<0?-1:1;return e*de}return n===n?n:0}var se=["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"],fe={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:L.any,required:Boolean};const ve=H({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:ee(fe,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,u){var o=u.attrs,s=u.emit,k=u.expose,m=M(e.checked===void 0?e.defaultChecked:e.checked),g=M();q(function(){return e.checked},function(){m.value=e.checked}),k({focus:function(){var t;(t=g.value)===null||t===void 0||t.focus()},blur:function(){var t;(t=g.value)===null||t===void 0||t.blur()}});var d=M(),c=function(t){if(!e.disabled){e.checked===void 0&&(m.value=t.target.checked),t.shiftKey=d.value;var C={target:f(f({},e),{},{checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t};e.checked!==void 0&&(g.value.checked=!!e.checked),s("change",C),d.value=!1}},p=function(t){s("click",t),d.value=t.shiftKey};return function(){var r,t=e.prefixCls,C=e.name,S=e.id,V=e.type,w=e.disabled,x=e.readonly,a=e.tabindex,l=e.autofocus,v=e.value,h=e.required,b=T(e,se),i=o.class,I=o.onFocus,A=o.onBlur,G=o.onKeydown,K=o.onKeypress,$=o.onKeyup,O=f(f({},b),o),y=Object.keys(O).reduce(function(F,P){return(P.substr(0,5)==="aria-"||P.substr(0,5)==="data-"||P==="role")&&(F[P]=O[P]),F},{}),E=U(t,i,(r={},B(r,"".concat(t,"-checked"),m.value),B(r,"".concat(t,"-disabled"),w),r)),D=f(f({name:C,id:S,type:V,readonly:x,disabled:w,tabindex:a,class:"".concat(t,"-input"),checked:!!m.value,autofocus:l,value:v},y),{},{onChange:c,onClick:p,onFocus:I,onBlur:A,onKeydown:G,onKeypress:K,onKeyup:$,required:h});return _("span",{class:E},[_("input",f({ref:g},D),null),_("span",{class:"".concat(t,"-inner")},null)])}}});function Ce(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}var he=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},be=function(){return f(f({},he()),{},{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},me=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:L.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},ge=function(){return f(f({},me()),{},{indeterminate:{type:Boolean,default:!1}})},J=Symbol("CheckboxGroupContext"),pe=["indeterminate","skipGroup","id"],ye=["onMouseenter","onMouseleave","onInput","class","style"];const N=H({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:ge(),setup:function(e,u){var o=u.emit,s=u.attrs,k=u.slots,m=u.expose,g=Y(),d=z("checkbox",e),c=d.prefixCls,p=d.direction,r=ne(J,void 0),t=Symbol("checkboxUniId");ae(function(){!e.skipGroup&&r&&r.registerValue(t,e.value)}),te(function(){r&&r.cancelValue(t)}),re(function(){ue(e.checked!==void 0||r||e.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var C=function(a){var l=a.target.checked;o("update:checked",l),o("change",a)},S=M(),V=function(){var a;(a=S.value)===null||a===void 0||a.focus()},w=function(){var a;(a=S.value)===null||a===void 0||a.blur()};return m({focus:V,blur:w}),function(){var x,a,l=le((x=k.default)===null||x===void 0?void 0:x.call(k)),v=e.indeterminate,h=e.skipGroup,b=e.id,i=b===void 0?g.id.value:b,I=T(e,pe),A=s.onMouseenter,G=s.onMouseleave;s.onInput;var K=s.class,$=s.style,O=T(s,ye),y=f(f({},I),{},{id:i,prefixCls:c.value},O);r&&!h?(y.onChange=function(){for(var F=arguments.length,P=new Array(F),j=0;j<F;j++)P[j]=arguments[j];o.apply(void 0,["change"].concat(P)),r.toggleOption({label:l,value:e.value})},y.name=r.name.value,y.checked=r.mergedValue.value.indexOf(e.value)!==-1,y.disabled=e.disabled||r.disabled.value,y.indeterminate=v):y.onChange=C;var E=U((a={},B(a,"".concat(c.value,"-wrapper"),!0),B(a,"".concat(c.value,"-rtl"),p.value==="rtl"),B(a,"".concat(c.value,"-wrapper-checked"),y.checked),B(a,"".concat(c.value,"-wrapper-disabled"),y.disabled),a),K),D=U(B({},"".concat(c.value,"-indeterminate"),v));return _("label",{class:E,style:$,onMouseenter:A,onMouseleave:G},[_(ve,f(f({},y),{},{class:D,ref:S}),null),l.length?_("span",null,[l]):null])}}}),W=H({compatConfig:{MODE:3},name:"ACheckboxGroup",props:be(),setup:function(e,u){var o=u.slots,s=u.emit,k=u.expose,m=Y(),g=z("checkbox",e),d=g.prefixCls,c=g.direction,p=M((e.value===void 0?e.defaultValue:e.value)||[]);q(function(){return e.value},function(){p.value=e.value||[]});var r=R(function(){return e.options.map(function(a){return typeof a=="string"||typeof a=="number"?{label:a,value:a}:a})}),t=M(Symbol()),C=M(new Map),S=function(l){C.value.delete(l),t.value=Symbol()},V=function(l,v){C.value.set(l,v),t.value=Symbol()},w=M(new Map);q(t,function(){var a=new Map,l=ce(C.value.values()),v;try{for(l.s();!(v=l.n()).done;){var h=v.value;a.set(h,!0)}}catch(b){l.e(b)}finally{l.f()}w.value=a});var x=function(l){var v=p.value.indexOf(l.value),h=ie(p.value);v===-1?h.push(l.value):h.splice(v,1),e.value===void 0&&(p.value=h);var b=h.filter(function(i){return w.value.has(i)}).sort(function(i,I){var A=r.value.findIndex(function(K){return K.value===i}),G=r.value.findIndex(function(K){return K.value===I});return A-G});s("update:value",b),s("change",b),m.onFieldChange()};return oe(J,{cancelValue:S,registerValue:V,toggleOption:x,mergedValue:p,name:R(function(){return e.name}),disabled:R(function(){return e.disabled})}),k({mergedValue:p}),function(){var a,l=e.id,v=l===void 0?m.id.value:l,h=null,b="".concat(d.value,"-group");return r.value&&r.value.length>0&&(h=r.value.map(function(i){var I;return _(N,{prefixCls:d.value,key:i.value.toString(),disabled:"disabled"in i?i.disabled:e.disabled,indeterminate:i.indeterminate,value:i.value,checked:p.value.indexOf(i.value)!==-1,onChange:i.onChange,class:"".concat(b,"-item")},{default:function(){return[i.label===void 0?(I=o.label)===null||I===void 0?void 0:I.call(o,i):i.label]}})})),_("div",{class:[b,B({},"".concat(b,"-rtl"),c.value==="rtl")],id:v},[h||((a=o.default)===null||a===void 0?void 0:a.call(o))])}}});N.Group=W;N.install=function(n){return n.component(N.name,N),n.component(W.name,W),n};const Se=n=>{const e=[];return n.shiftKey&&e.push("Shift"),n.ctrlKey&&e.push("Ctrl"),n.metaKey&&e.push("Cmd"),(n.code.startsWith("Key")||n.code.startsWith("Digit"))&&e.push(n.code),e.join(" + ")};export{N as C,Se as g,Ce as l,ke as t};