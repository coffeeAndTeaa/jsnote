(this.webpackJsonpjsnote=this.webpackJsonpjsnote||[]).push([[216],{392:function(n,a){!function(n){var a=n.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(a,"addSupport",{value:function(a,e){"string"===typeof a&&(a=[a]),a.forEach((function(a){!function(a,e){var t="doc-comment",o=n.languages[a];if(o){var r=o[t];if(!r){var i={};i[t]={pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"},r=(o=n.languages.insertBefore(a,"comment",i))[t]}if(r instanceof RegExp&&(r=o[t]={pattern:r}),Array.isArray(r))for(var s=0,p=r.length;s<p;s++)r[s]instanceof RegExp&&(r[s]={pattern:r[s]}),e(r[s]);else e(r)}}(a,(function(n){n.inside||(n.inside={}),n.inside.rest=e}))}))}}),a.addSupport(["java","javascript","php"],a)}(Prism)}}]);
//# sourceMappingURL=216.2e455762.chunk.js.map