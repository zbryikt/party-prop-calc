 (function() { function pug_attr(t,e,n,f){return!1!==e&&null!=e&&(e||"class"!==t&&"style"!==t)?!0===e?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(e,r){if(1===arguments.length){for(var t=e[0],g=1;g<e.length;g++)t=pug_merge(t,e[g]);return t}for(var l in r)if("class"===l){var n=e[l]||[];e[l]=(Array.isArray(n)?n:[n]).concat(r[l]||[])}else if("style"===l){var n=pug_style(e[l]);n=n&&";"!==n[n.length-1]?n+";":n;var a=pug_style(r[l]);a=a&&";"!==a[a.length-1]?a+";":a,e[l]=n+a}else e[l]=r[l];return e}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (Array, JSON, blockLoader, cssLoader, decache, escape, prefix, scriptLoader, version) {;pug_debug_line = 1;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fldui.pug";
if(!ctrl) var ctrl = {};
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Fchevron-down.pug";





;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Fspinner.pug";





;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";









;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!decache) { decache = (version? "?v=" + version : ""); }
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.config = (config ? config : {});
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!scriptLoader.url[url]) {
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
scriptLoader.url[url] = true;
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (/^https?:\/\/./.exec(url)) {
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!cssLoader) { cssLoader = {url: {}}; }
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_mixins["css"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.config = (config ? config : {});
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if (!cssLoader.url[url]) {
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
cssLoader.url[url] = true;
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
}
};
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
if(!blockLoader) { blockLoader = {name: {}, config: {}}; }
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";










;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var b64img = {};
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
b64img.px1 = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAQAICRAEAOw=="
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";
var loremtext = {
  zh: "料何緊許團人受間口語日是藝一選去，得系目、再驗現表爸示片球法中轉國想我樹我，色生早都沒方上情精一廣發！能生運想毒一生人一身德接地，說張在未安人、否臺重壓車亞是我！終力邊技的大因全見起？切問去火極性現中府會行多他千時，來管表前理不開走於展長因，現多上我，工行他眼。總務離子方區面人話同下，這國當非視後得父能民觀基作影輕印度民雖主他是一，星月死較以太就而開後現：國這作有，他你地象的則，引管戰照十都是與行求證來亞電上地言裡先保。大去形上樹。計太風何不先歡的送但假河線己綠？計像因在……初人快政爭連合多考超的得麼此是間不跟代光離制不主政重造的想高據的意臺月飛可成可有時情乎為灣臺我養家小，叫轉於可！錢因其他節，物如盡男府我西上事是似個過孩而過要海？更神施一關王野久沒玩動一趣庭顧倒足要集我民雲能信爸合以物頭容戰度系士我多學一、區作一，過業手：大不結獨星科表小黨上千法值之兒聲價女去大著把己。",
  en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";







;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fcore\u002Futil.pug";













;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";















































;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_mixins["ldPaletteEditor"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldp\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"colors\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"edit\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"inner\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ldColorPicker no-border no-palette\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-6\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"row mb-2\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cselect class=\"form-control form-control-local-sm\" value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"rgb\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "RGB\u003C\u002Foption\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hsl\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HSL\u003C\u002Foption\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Coption value=\"hcl\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "HCL\u003C\u002Foption\u003E\u003C\u002Fselect\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4 pl-0\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"form-control form-control-local-sm value\" placeholder=\"Hex Value\" data-tag=\"hex\" style=\"margin:0\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var configs = [["Red", "Green", "Blue", "rgb", "active"], ["Hue", "Saturation", "Luminance", "hsl",""], ["Hue", "Chroma", "Luminance", "hcl",""]];
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
// iterate configs
;(function(){
  var $$obj = configs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var config = $$obj[pug_index2];
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["row","config",config[4]], [false,false,true]), false, true)+pug_attr("data-tag", config[3], true, true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-8\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[0]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[1]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label-group\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = config[2]) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"ldrs ldrs-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"col-sm-4\"\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[0][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[1][0].toLowerCase(), true, true)) + "\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"value form-control form-control-local-sm\""+pug_attr("data-tag", config[3] + "-" + config[2][0].toLowerCase(), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





























































































































;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
var anikit = {"groupName":["No Animation","Popular Animation","Repeat Animation","Transition"],"members":[[["static","static"]],[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]],"group":{"static":[["static","static"]],"popular":[["blink","blink"],["bounce","bounce"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["breath","breath"],["fade","fade"],["flip-h","flip (horizontally)"],["float-btt-in","float-in (bottom to top)"],["slide-ltr","slide (left to right)"],["spin","spin"],["tremble","tremble"]],"repeat":[["beat","beat"],["blink","blink"],["blur","blur"],["bounce","bounce"],["bounceAlt","bounceAlt"],["breath","breath"],["clock","clock"],["coin-h","coin (horizontally)"],["coin-v","coin (vertically)"],["cycle","cycle"],["cycle-alt","cycle-alt"],["damage","damage"],["dim","dim"],["fade","fade"],["flip","flip"],["flip-h","flip (horizontally)"],["flip-v","flip (vertically)"],["float","float"],["heartbeat","heartbeat"],["hit","hit"],["jelly","jelly"],["jelly-alt","jelly-alt"],["jingle","jingle"],["jump","jump"],["measure","measure"],["metronome","metronome"],["move-btt","move (bottom to top)"],["move-fade-btt","move faded (bottom to top)"],["move-fade-ltr","move faded (left to right)"],["move-fade-rtl","move faded (right to left)"],["move-fade-ttb","move faded (top to bottom)"],["move-ltr","move (left to right)"],["move-rtl","move (right to left)"],["move-ttb","move (top to bottom)"],["orbit","orbit"],["pulse","pulse"],["rubber-h","rubber (horizontally)"],["rubber-v","rubber (vertically)"],["rush-btt","rush (bottom to top)"],["rush-ltr","rush (left to right)"],["rush-rtl","rush (right to left)"],["rush-ttb","rush (top to bottom)"],["shake-h","shake (horizontally)"],["shake-v","shake (vertically)"],["shiver","shiver"],["skew","skew"],["skew-alt","skew-alt"],["slide-btt","slide (bottom to top)"],["slide-ltr","slide (left to right)"],["slide-rtl","slide (right to left)"],["slide-ttb","slide (top to bottom)"],["smash","smash"],["spin","spin"],["spin-fast","spin-fast"],["squeeze","squeeze"],["surprise","surprise"],["swim","swim"],["swing","swing"],["tick","tick"],["tick-alt","tick-alt"],["tremble","tremble"],["vortex","vortex"],["vortex-alt","vortex-alt"],["wander-h","wander (horizontally)"],["wander-v","wander (vertically)"],["wrench","wrench"]],"transition":[["blur-in","blur-in"],["blur-out","blur-out"],["bounce-alt-in","bounce-alt-in"],["bounce-alt-out","bounce-alt-out"],["bounce-in","bounce-in"],["bounce-out","bounce-out"],["fade-in","fade-in"],["fade-out","fade-out"],["fall-btt-in","fall-in (bottom to top)"],["fall-ltr-in","fall-in (left to right)"],["fall-rtl-in","fall-in (right to left)"],["fall-ttb-in","fall-in (top to bottom)"],["flip-h-in","flip-in (horizontally)"],["flip-h-out","flip-out (horizontally)"],["flip-v-in","flip-in (vertically)"],["flip-v-out","flip-out (vertically)"],["float-btt-in","float-in (bottom to top)"],["float-btt-out","float-out (bottom to top)"],["float-ltr-in","float-in (left to right)"],["float-ltr-out","float-out (left to right)"],["float-rtl-in","float-in (right to left)"],["float-rtl-out","float-out (right to left)"],["float-ttb-in","float-in (top to bottom)"],["float-ttb-out","float-out (top to bottom)"],["grow-btt-in","grow-in (bottom to top)"],["grow-btt-out","grow-out (bottom to top)"],["grow-ltr-in","grow-in (left to right)"],["grow-ltr-out","grow-out (left to right)"],["grow-rtl-in","grow-in (right to left)"],["grow-rtl-out","grow-out (right to left)"],["grow-ttb-in","grow-in (top to bottom)"],["grow-ttb-out","grow-out (top to bottom)"],["jump-alt-in","jump-alt-in"],["jump-alt-out","jump-alt-out"],["jump-in","jump-in"],["jump-out","jump-out"],["power-off","power-off"],["power-on","power-on"],["rush-btt-in","rush-in (bottom to top)"],["rush-ltr-in","rush-in (left to right)"],["rush-rtl-in","rush-in (right to left)"],["rush-ttb-in","rush-in (top to bottom)"],["slide-btt-in","slide-in (bottom to top)"],["slide-btt-out","slide-out (bottom to top)"],["slide-ltr-in","slide-in (left to right)"],["slide-ltr-out","slide-out (left to right)"],["slide-rtl-in","slide-in (right to left)"],["slide-rtl-out","slide-out (right to left)"],["slide-ttb-in","slide-in (top to bottom)"],["slide-ttb-out","slide-out (top to bottom)"],["spring-btt-in","spring-in (bottom to top)"],["spring-ltr-in","spring-in (left to right)"],["spring-rtl-in","spring-in (right to left)"],["spring-ttb-in","spring-in (top to bottom)"],["throw-btt-in","throw-in (bottom to top)"],["throw-ltr-in","throw-in (left to right)"],["throw-rtl-in","throw-in (right to left)"],["throw-ttb-in","throw-in (top to bottom)"],["vortex-alt-in","vortex-alt-in"],["vortex-alt-out","vortex-alt-out"],["vortex-in","vortex-in"],["vortex-out","vortex-out"],["zoom-in","zoom-in"],["zoom-out","zoom-out"]]}};
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";























































































;pug_debug_line = 111;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";














































;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";
prefix = function(n) { return (!n?[]:(Array.isArray(n)?n:[n])).map(function(it){ return `${prefix.currentName}$${it}`; }).join(' ');}
;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





















;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";





;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Ftkirby\u002Fworkspace\u002Fzbryikt\u002Fparty-prop-calc\u002Fweb\u002Fstatic\u002Fassets\u002Flib\u002Fldui\u002Fpug\u002Fext\u002Findex.pug";












;pug_debug_line = 4;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
var og = {
  url: "https://zbryikt.github.io/party-prop-calc/",
  title: "小黨與政黨票門檻分析 - 以泛綠陣營為例",
  description: "人氣小黨如綠黨無論在哪家民調中有一定比例的支持度，如果我們將泛綠的政黨票分一部份給他們，會有什麼樣的結果呢？",
  thumbnail: "https://zbryikt.github.io/party-prop-calc/assets/img/thumbnail.jpg"
}
;pug_debug_line = 11;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = og.title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:url\""+pug_attr("content", og.url, true, true)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", og.title, true, true)) + "\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", og.description, true, true)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", og.thumbnail, true, true)) + "\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", og.thumbtype || "image/jpeg", true, true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", og.thumbwidth || "1200", true, true)) + "\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", og.thumbheight || "630", true, true)) + "\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cmeta property=\"og:type\" content=\"website\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Clink rel=\"icon\" href=\"favicon.ico\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");
;pug_debug_line = 27;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["css"]("assets/lib/ldui/ldui.min.css");
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cstyle\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + ".parties {\n  min-height: 130px;\n}\n.party {\n  flex: 1 0 auto;\n  transition: width 1s ease-in-out;\n}\n.party .bar {\n  background: #ddd;\n  width: 100%;\n  height: 40px;\n}\n.party .ly {\n  padding: 0.5em;\n  display: flex;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n}\n.party .seat {\n  width: 1.4em;\n  height: 1.4em;\n  background: #ddd;\n  border-radius: 50%;\n  margin: 0 0.2em 0.2em 0;\n  display: inline-block;\n  background-image: url(\"assets\u002Fimg\u002Fuser.svg\");\n  background-size: cover;\n  background-position: center center;\n  transition: width 1s ease-in-out, margin 1s ease-in-out;\n}\n.legend {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 0.5em;\n}\n.label {\n  display: flex;\n  align-items: center;\n  margin-right: 1.25em;\n  white-space: pre-wrap;\n}\n.label .dot {\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  margin-right: 0.25em;\n}\n.label \u003E * {\n  display: inline-block;\n}\n@media (max-width: 768px) {\n  .parties {\n    min-height: 100px;\n  }\n  .party .seat {\n    width: 0.9em;\n    height: 0.9em;\n  }\n}\n\u003C\u002Fstyle\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 80;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cbody class=\"p-4\"\u003E";
;pug_debug_line = 81;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"w-1024 rwd mx-auto typeset heading-contrast\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "小黨與政黨票門檻分析\u003C\u002Fh2\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex text-muted align-items-center\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"flex-grow-1\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "以泛綠陣營 (民進黨、綠黨、台灣基進、一邊一國、喜樂島) 為例\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 85;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"sticky py-4\" style=\"background:#fff;top:0px\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"legend\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"label\" ld-each=\"party\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"dot\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"name\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"d-flex parties\"\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"party\" ld=\"bar\" data-name=\"中國國民黨\"\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ly\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"party\" ld=\"bar\" data-name=\"民主進步黨\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ly\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"party\" ld=\"bar\" data-name=\"台灣基進\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ly\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"party\" ld=\"bar\" data-name=\"綠黨\"\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ly\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"party\" ld=\"bar\" data-name=\"一邊一國行動黨\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ly\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"party\" ld=\"bar\" data-name=\"喜樂島聯盟\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bar\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"ly\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"pb-3 pt-2 text-center\"\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "泛綠共 ";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"font-weight-bold text-danger\" ld=\"party-count\"\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "5\u003C\u002Fspan\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 個政黨達門檻，並獲得 ";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"font-weight-bold text-danger\" ld=\"seat-count\"\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "18\u003C\u002Fspan\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 席不分區立委席次。國民黨獲得 ";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cspan class=\"font-weight-bold text-danger\" ld=\"kmt-seat\"\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "0\u003C\u002Fspan\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 席。\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "2016 年起，中華民國依「";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Flaw.moj.gov.tw\u002FLawClass\u002FLawSingle.aspx?pcode=D0020010&amp;flno=67\" target=\"_blank\"\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "公職人員選舉罷免法 第 67 條\u003C\u002Fa\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "」之規定，採「名單比例代表制 ( List Proportional Representation )」 依各政黨得票率將不分區立委席次給各政黨所提名之不分區立委。\u003C\u002Fp\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "But! 依選罷法 67 條第 5 款所述，政黨得票率未達 5% 之政黨不予分配不分區立委席次。就算你獲得了 60 萬位選民的支持，佔了政黨票的 4.99% ，沒過門檻說不給就是不給。那麼問題來了，若你支持的是特定陣營，但你又想將票投給小黨，那會不會因為 5% 門檻的影響使得我方陣營的席次減少呢？\u003C\u002Fp\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "以泛綠陣營為例，上圖呈現了一個";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cb\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "假想的政黨票比例分布\u003C\u002Fb\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "與其對應的不分區立委席次分配。在此例中，已有相當人數支持台灣基進與綠黨，兩者總和甚至超過 5% ，足夠支持一個小黨越過門檻，可惜票源分散，使得兩黨皆無法獲得不分區席次。\u003C\u002Fp\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-muted\"\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "( 為求簡化說明，此處並不包含時力、親民、台民黨等其它政黨，僅以中國國民黨與泛綠陣營來說明 )\u003C\u002Fp\u003E";
;pug_debug_line = 102;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 102;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "支持人氣小黨\u003C\u002Fh3\u003E";
;pug_debug_line = 103;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 103;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "人氣小黨如綠黨無論在哪家民調中有一定比例的支持度，如果我們將泛綠的政黨票分一部份給他們，會有什麼樣的結果呢？\u003C\u002Fp\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"pb-4\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-primary\" ld=\"use-preset\" data-name=\"distribute\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "跑跑看\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 105;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "由於小黨越過 5% 門檻，瞬間獲得了 6 個不分區立委席次。民進黨則因為票源分配減少兩席。總地來說，泛綠陣營的總席次由 21 席提升至 23 席，同時國民黨席次甚至減少 2 席，雙方差距拉大至 12 席，真是賺翻了！\u003C\u002Fp\u003E";
;pug_debug_line = 106;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 106;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "全面達標\u003C\u002Fh3\u003E";
;pug_debug_line = 107;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 107;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "那麼，如果泛綠政黨皆能越過門檻，可以獲得更多的席次嗎？\u003C\u002Fp\u003E";
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"pb-4\"\u003E";
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-primary\" ld=\"use-preset\" data-name=\"extreme-distribute\"\u003E";
;pug_debug_line = 108;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "跑跑看\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "就結果來看，仍然獲得了 23 席立委，數量上並沒有提升。先前數量上的差異主要是來自於越過門檻後，原本被門檻忽略的支持者顯現了出來，因此泛綠陣營並不會因為原本支持率就低的政黨過關而增加更多的席次。\u003C\u002Fp\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "火力集中\u003C\u002Fh3\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 111;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "如果我們將陣營所有票源集中至單一政黨，又會發生什麼事呢？\u003C\u002Fp\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"pb-4\"\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-primary\" ld=\"use-preset\" data-name=\"centralize\"\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "跑跑看\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 113;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 113;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "由於所有的選票都不再受到門檻影響，因此反映出了與「支持人氣小黨」相同的席次。當然，權力集中在民主社會並不是好事，因此若兩者有相同的結果，也許將席次分布至小黨會是更好的選擇。\u003C\u002Fp\u003E";
;pug_debug_line = 114;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 114;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "通通殘念\u003C\u002Fh3\u003E";
;pug_debug_line = 115;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 115;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "然而，社會並沒有我們想像的這麼團結，即便我們呼籲「支持小黨」或「選票集中」，仍然有些人有自己的想法；而當選票配置很不幸的落在小黨通通摃龜的情況下 ( 全都獲得 4.9% 的政黨票 ) ，那麼立委席次又會如何變化呢？\u003C\u002Fp\u003E";
;pug_debug_line = 116;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"pb-4\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-primary\" ld=\"use-preset\" data-name=\"extreme-lose\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "不敢看也要跑跑看\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 117;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 117;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "在這種情況下，泛綠陣營受到門檻影響最大，將近 19.6% 的選票被不分區分配給忽略。同樣的選票數，原本可以與國民黨拉至 12 席的差距，現在竟然以 17 比 17 打平了！\u003C\u002Fp\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"pb-4\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"btn btn-outline-primary\" ld=\"use-preset\" data-name=\"original\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "再看一次最初的分配\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 119;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"py-4 my-4\"\u003E";
;pug_debug_line = 119;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 120;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 120;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "結論\u003C\u002Fh2\u003E";
;pug_debug_line = 121;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 121;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "政黨票因為門檻的關係，有些票會被忽略而無法反映在不分區立委的席次上，然而對成長中的小黨來說，一定會有從 0 到 5% 之間的過渡期。較好的模式或許是將選票分給已有人氣的小型政黨，支持他們越過政黨票門檻，但無論怎麼投，相同陣營最重要的還是團結；相對的，若你想要打擊對手，就想辦法分化他們吧。\u003C\u002Fp\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "這個政黨票門檻專案是一個小品的開源公民科技專案，源碼可於 ";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fzbryikt\u002Fparty-prop-calc\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "這裡\u003C\u002Fa\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 取得。若有任何錯誤，可至 ";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fzbryikt\u002Fparty-prop-calc\u002Fissues\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "issues\u003C\u002Fa\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + " 頁面回報。\u003C\u002Fp\u003E";
;pug_debug_line = 123;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"py-4\"\u003E";
;pug_debug_line = 123;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"text-right text-muted\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "author: ";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fzbryikt\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "zbryikt\u003C\u002Fa\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 127;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("assets/lib/ldui/ldui.min.js");
;pug_debug_line = 128;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_mixins["script"]("js/calc.js");
;pug_debug_line = 129;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Fpug\u002Findex.pug";
pug_html = pug_html + "\u002F\u002F Generated by LiveScript 1.3.1\nvar colors, short, parties, sum, preset, apply, view;\ncolors = {\n  \"中國國民黨\": '#45f',\n  \"民主進步黨\": '#9f9',\n  \"台灣基進\": '#7ea',\n  \"綠黨\": '#5db',\n  \"一邊一國行動黨\": '#3cc',\n  \"喜樂島聯盟\": '#1ae'\n};\nshort = {\n  \"中國國民黨\": \"國民黨\",\n  \"民主進步黨\": \"民進黨\",\n  \"台灣基進\": \"台灣基進\",\n  \"綠黨\": \"綠黨\",\n  \"一邊一國行動黨\": \"一邊一國\",\n  \"喜樂島聯盟\": \"喜樂島\"\n};\nparties = [\n  {\n    name: \"中國國民黨\",\n    seat: 11,\n    rate: 19.6,\n    side: 'blue'\n  }, {\n    name: \"民主進步黨\",\n    seat: 18,\n    rate: 32,\n    side: 'green'\n  }, {\n    name: \"台灣基進\",\n    seat: 1,\n    rate: 3.9,\n    side: 'green'\n  }, {\n    name: \"綠黨\",\n    seat: 1,\n    rate: 2.4,\n    side: 'green'\n  }, {\n    name: \"一邊一國行動黨\",\n    seat: 0,\n    rate: 0.1,\n    side: 'green'\n  }, {\n    name: \"喜樂島聯盟\",\n    seat: 0,\n    rate: 0.1,\n    side: 'green'\n  }\n];\nsum = parties.reduce(function(a, b){\n  return a + b.rate;\n}, 0);\npreset = {\n  original: {\n    \"民主進步黨\": 32,\n    \"台灣基進\": 3.9,\n    \"綠黨\": 2.4,\n    \"一邊一國行動黨\": 0.1,\n    \"喜樂島聯盟\": 0.1\n  },\n  centralize: {\n    \"民主進步黨\": 38.5,\n    \"台灣基進\": 0,\n    \"綠黨\": 0,\n    \"一邊一國行動黨\": 0.0,\n    \"喜樂島聯盟\": 0.0\n  },\n  \"extreme-distribute\": {\n    \"民主進步黨\": 18.5,\n    \"台灣基進\": 5,\n    \"綠黨\": 5,\n    \"一邊一國行動黨\": 5.0,\n    \"喜樂島聯盟\": 5.0\n  },\n  \"extreme-lose\": {\n    \"民主進步黨\": 18.9,\n    \"台灣基進\": 4.9,\n    \"綠黨\": 4.9,\n    \"一邊一國行動黨\": 4.9,\n    \"喜樂島聯盟\": 4.9\n  },\n  \"distribute\": {\n    \"民主進步黨\": 28.3,\n    \"台灣基進\": 5,\n    \"綠黨\": 5,\n    \"一邊一國行動黨\": 0.1,\n    \"喜樂島聯盟\": 0.1\n  }\n};\napply = function(name){\n  var k, ref$, v, results$ = [];\n  for (k in ref$ = preset[name]) {\n    v = ref$[k];\n    results$.push(parties.filter(fn$).map(fn1$));\n  }\n  return results$;\n  function fn$(it){\n    return it.name === k;\n  }\n  function fn1$(it){\n    return it.rate = v;\n  }\n};\ncalc(parties);\nview = new ldView({\n  root: document.body,\n  handler: {\n    party: {\n      list: function(){\n        return parties;\n      },\n      handle: function(arg$){\n        var node, data, name, dot, n;\n        node = arg$.node, data = arg$.data;\n        name = ld$.find(node, '.name', 0);\n        dot = ld$.find(node, '.dot', 0);\n        n = data.name;\n        if (window.innerWidth \u003C 768) {\n          n = short[data.name];\n        }\n        name.innerHTML = n + \"\u003Cspan class='text-sm'\u003E(\" + data.rate + \"%)\u003C\u002Fspan\u003E\";\n        return dot.style.background = colors[data.name];\n      }\n    },\n    bar: function(arg$){\n      var node, name, bar, ly, party, seats, len;\n      node = arg$.node;\n      name = node.getAttribute('data-name');\n      bar = ld$.find(node, '.bar', 0);\n      ly = ld$.find(node, '.ly', 0);\n      party = parties.filter(function(it){\n        return it.name === name;\n      })[0];\n      node.style.width = 100 * (party.rate \u002F sum) + \"%\";\n      bar.style.background = colors[name];\n      seats = ld$.find(ly, '.seat');\n      len = seats.length;\n      (function(){\n        var i$, results$ = [];\n        for (i$ = len - party.seat - 1; i$ \u003E= 0; --i$) {\n          results$.push(i$);\n        }\n        return results$;\n      }()).map(function(d, i){\n        var _;\n        _ = function(n){\n          n.classList.remove('ld-float-btt-in');\n          n.classList.add('ld-float-btt-out');\n          n.style.width = \"0em\";\n          n.style.margin = \"0em\";\n          return debounce(1000).then(function(){\n            return n.parentNode.removeChild(n);\n          });\n        };\n        return _(seats[d]);\n      });\n      return (function(){\n        var i$, to$, results$ = [];\n        for (i$ = 0, to$ = party.seat - len; i$ \u003C to$; ++i$) {\n          results$.push(i$);\n        }\n        return results$;\n      }()).map(function(d, i){\n        var node;\n        node = ld$.create({\n          name: 'div',\n          className: ['seat', 'ld', 'ld-float-btt-in'],\n          style: {\n            backgroundColor: colors[name],\n            animationDelay: (i \u002F 50 + Math.random() * 0.1) + \"s\"\n          }\n        });\n        ly.appendChild(node);\n        return \"\u003Cdiv class='seat ld ld-float-btt-in'\\nstyle='background-color:\" + colors[name] + \";animation-delay:\" + (i \u002F 50 + Math.random() * 0.1) + \"s'\u003E\\n\u003C\u002Fdiv\u003E\";\n      }).join('');\n    },\n    \"party-count\": function(arg$){\n      var node;\n      node = arg$.node;\n      return node.innerText = parties.filter(function(it){\n        return it.side === 'green' && it.rate \u003E= 5;\n      }).length;\n    },\n    \"seat-count\": function(arg$){\n      var node;\n      node = arg$.node;\n      return node.innerText = parties.filter(function(it){\n        return it.side === 'green';\n      }).reduce(function(a, b){\n        return a + b.seat;\n      }, 0);\n    },\n    \"kmt-seat\": function(arg$){\n      var node;\n      node = arg$.node;\n      return node.innerText = parties.filter(function(it){\n        return it.side === 'blue';\n      }).reduce(function(a, b){\n        return a + b.seat;\n      }, 0);\n    }\n  },\n  action: {\n    click: {\n      \"use-preset\": function(arg$){\n        var node, name;\n        node = arg$.node;\n        name = node.getAttribute('data-name');\n        apply(name);\n        calc(parties);\n        return view.render();\n      }\n    }\n  }\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"blockLoader" in locals_for_with?locals_for_with.blockLoader:typeof blockLoader!=="undefined"?blockLoader:undefined,"cssLoader" in locals_for_with?locals_for_with.cssLoader:typeof cssLoader!=="undefined"?cssLoader:undefined,"decache" in locals_for_with?locals_for_with.decache:typeof decache!=="undefined"?decache:undefined,"escape" in locals_for_with?locals_for_with.escape:typeof escape!=="undefined"?escape:undefined,"prefix" in locals_for_with?locals_for_with.prefix:typeof prefix!=="undefined"?prefix:undefined,"scriptLoader" in locals_for_with?locals_for_with.scriptLoader:typeof scriptLoader!=="undefined"?scriptLoader:undefined,"version" in locals_for_with?locals_for_with.version:typeof version!=="undefined"?version:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}; module.exports = template; })() 