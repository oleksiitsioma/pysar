!function(){"use strict";var e,t={916:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.blockEditor,r=window.wp.components;function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}(0,e.registerBlockType)("pysar/textarea",{edit:function(e){let{attributes:o,setAttributes:i}=e;const{inputName:a,isRequired:l}=o,s=(0,n.useBlockProps)();return[(0,t.createElement)(n.InspectorControls,{key:"setting"},(0,t.createElement)(r.PanelBody,{title:"TextArea Settings",initialOpen:!0},(0,t.createElement)(r.TextControl,{label:"'Name' attribute",value:a,onChange:e=>{i({inputName:e})},help:"Refer to the textarea element documentation for proper input naming"}),(0,t.createElement)(r.CheckboxControl,{label:"Make required",checked:l,help:"Required fields should be filled for the form to validate",onChange:e=>{i({isRequired:e})}}))),(0,t.createElement)(n.BlockControls,null),(0,t.createElement)("div",s,(0,t.createElement)("div",{className:"pysarInput__settings"},(0,t.createElement)("p",{class:"pysarInput__settingsItem"},"TextArea field name: ",a)))]},save:function(e){let{attributes:r}=e;const{inputName:i,isRequired:a}=r,l=n.useBlockProps.save();return(0,t.createElement)("textarea",o({},l,{name:i,required:a}))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],l=n[1],s=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var c=s(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self.webpackChunkpysar=self.webpackChunkpysar||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(916)}));o=r.O(o)}();