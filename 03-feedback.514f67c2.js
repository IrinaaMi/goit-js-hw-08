!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var i,r,a,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function j(e){return c=e,f=setTimeout(S,t),d?g(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=a}function S(){var e=p();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return s?b(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&i?g(e):(i=r=void 0,u)}function T(){var e=p(),n=O(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return j(l);if(s)return f=setTimeout(S,t),g(l)}return void 0===f&&(f=setTimeout(S,t)),u}return t=w(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(w(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},T.flush=function(){return void 0===f?u:h(p())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};var j=document.querySelector(".feedback-form"),O=j.querySelector('[name="email"]'),S=j.querySelector('[name="message"]'),h=e(t)((function(){var e={email:O.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("DOMContentLoaded",(function(){!function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);O.value=t.email,S.value=t.message}}(),O.addEventListener("input",h),S.addEventListener("input",h)})),j.addEventListener("submit",(function(e){e.preventDefault(),console.log("Form submited with data:",{email:O.value,message:S.value}),localStorage.removeItem("feedback-form-state"),O.value="",S.value="",h()}))}();
//# sourceMappingURL=03-feedback.514f67c2.js.map
