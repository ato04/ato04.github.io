var pre = document.querySelector('pre');
pre.innerHTML = pre.innerHTML.replaceAll(/\|([^|《》]+)《([^|《》]+)》/g,`<ruby ruby="$2">$1</ruby>`);
document.querySelectorAll('pre :is(h1,h2,h3,span:not([id]))').forEach(element=>element.id=element.innerText);
var newContents = document.querySelector('#新しい要素').parentElement;
var tableOfContents = document.querySelector('#目次').parentElement;
document.querySelectorAll('pre :is(h1,h2,h3)').forEach(element=>tableOfContents.innerHTML+='<br>'+(element.tagName=="H1"?`<b>＃${element.id}</b>`:element.tagName=="H2"?`    ＃${element.id}`:`        ＃${element.id}`));
document.querySelectorAll('.new span:first-of-type').forEach(element=>newContents.innerHTML+=`<br>＃${element.id}`);
document.querySelectorAll('pre div').forEach(element=>element.innerHTML=element.innerHTML.replace('<br>','<hr>'))
document.querySelectorAll('pre [id]').forEach(element=>pre.innerHTML=pre.innerHTML.replaceAll(`＃${element.id}`,`<a href="#${element.id}">${element.id}</a>`));