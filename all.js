/**
javascript:(function(){var obj=document.createElement('script');obj.type='text/javascript';obj.src='http://127.0.0.1:88/code/all.js';document.body.appendChild(obj)})()
备用：
if("undefined" == typeof rich_postor)
var con=hookProc(rich_postor._editor.getHtml());
rich_postor._editor.getHtml=function(){return con}
result += '&#' + new String('000000000').substring(str.charCodeAt(i).toString().length,9) + str.charCodeAt(i)+';';
test_editor.getContentUbb().replace(/\[url\]http:\/\//g,'[url]')
本代码基于百度ID为：74cm，只经过简单的修改。廿由复活
符号(`)在Esc键下方，需在英文输入状态下输入（半角）。
使用方法：
蓝字：在你打的字两侧加上（`）,如：`蓝字`。
和谐字： 在要打的和谐字之前加上（`\u），之后加上（`），如：`\u上校鸡块`
换行：`\n`或直接回车。
倒序开始标记：`\d`，恢复顺序标记：`\r`，如：`\d`4698`\r`
粗体开始标记：`\s`，粗体结束标记：`\t`，如：`\s`粗体`\t`，签到10天获得。
红字开始标记：`\h`，红字结束标记：`\g`，如：`\h`红字`\g`，签到20天获得。
*/

function toUnicode(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		if(str.charCodeAt(i) < 128 && str.charCodeAt(i) !=64 && str.charCodeAt(i) !=47 && str.charCodeAt(i) !=39 && str.charCodeAt(i) !=34&& str.charCodeAt(i) !=32){
			result += str.charAt(i);}
		else{
			result += '&€#' + str.charCodeAt(i) + ';';
		}
	}
	return result;
}

function makeStr(str){
	var ustr = toUnicode(str);
	var mstr='';
	if(ustr.charAt(0) == '\\'){
		if(ustr.charAt(1) == 'n'){
			mstr= '<br>';
		}else if(ustr.charAt(1) == 'u'){
			ustr= ustr.replace('\\u', '').replace(/&€#32;/gim,' ').replace(/&€#34;/gim,'"').replace(/&€#47;/gim,'/');  
			mstr= ustr.replace(/<br[^>]*>|[\n]/gim, '<br>').replace(/ /gim, ' ').replace(/[\r\t]/gim, ' ');
		}else if(ustr.charAt(1) == 's'){
			mstr= '<strong>';
		}else if(ustr.charAt(1) == 't'){
			mstr= '</strong>';
		}else if(ustr.charAt(1) == 'h'){
			mstr= '<span class="edit_font_color">';
		}else if(ustr.charAt(1) == 'm'){
			mstr= '<span class="edit_font_normal">';
		}else if(ustr.charAt(1) == 'g'){
			mstr= '</span>';
		}else if(ustr.charAt(1) == 'd'){
			mstr= '&€#8238;';
		}else if(ustr.charAt(1) == 'r'){
			mstr= '&€#8236;';
		}else{
			mstr=makeCut(ustr);}
	}else{
		mstr=makeCut(ustr);}
	return mstr;
}

function makeSub(str){
	var cstr='';
	var cut=new Array();
	var temp='';
	if(str.length>504) {
		cut=str.replace(/(.{504})/g, '$1`').replace(/`$/,'').split( '`'); 
		for (var i = 0; i < cut.length; i++) {
			cut[i] = temp + cut[i];
			temp='';
			if( cut[i].lastIndexOf(';') < cut[i].lastIndexOf('&') ) {
				temp = cut[i].substring( cut[i].lastIndexOf(';')+1 , cut[i].length );
				cut[i]  = cut[i].substring(0 , cut[i].lastIndexOf(';') );
			}
			cstr += '<a href="http://' + cut[i] +'" target="_blank">' + cut[i] +'</a>';
		}
	}else{
		cstr += '<a href="http://' + str +'" target="_blank">' + str +'</a>';
	}
	return cstr;
}

function makeCut(str){
	var hstr='';
	var reg=new RegExp(/<br>|<img[^>]*>|<strong>|<&€#47;strong>|<span[^>]*>|<&€#47;span>/gim);
	var temp=new Array();
	temp=str.match(reg);
	var strs=new Array();
	strs=str.replace(reg,'<br>').split('<br>'); 
	var stri='';
	for (var i = 0; i < strs.length; i++) {
		if(strs[i]==''){
			stri='';
		}else{
			stri=makeSub(strs[i]);
		}
		if(i<temp.length){
			hstr += stri + temp[i].replace(/&€#32;/gim,' ').replace(/&€#34;/gim,'"').replace(/&€#47;/gim,'/');
			hstr += stri;
		}
	}
	return hstr;
}

function findMatch(str,pos){
	for(var k = pos + 1; k < str.length; ++k){
		if(str.charAt(k) == '`'){
			return k;
		}
	}	return -1;
}

function hookProc(str){
	var text = '';
	for(var i = 0; i < str.length; ++i){
		if(str.charAt(i) == '`'){
			if(str.charAt(i + 1) == '`'){
				++i;
				text += '`';
			}else{
				var pos = findMatch(str,i);
				if(pos == -1){
					continue;
				}
				var sub = str.substr(i + 1,pos - i - 1);
				i = pos;
				text += makeStr(sub);
			}
		}else{
			text += str.charAt(i);
		}
	}
	return text;
}


function setFloorHook(){
	if("undefined" == typeof LzlEditor){
	}else{
		if (LzlEditor.cur_sec) {
			LzlEditor._s_p._getHtml=function(){var t=this._se.getContent();return t=hookProc(t.replace(/<br[^>]*>|[\n]/gim, '<br>').replace(/ /gim, ' ').replace(/[\r\t]/gim, ' '))};
			var con=LzlEditor._s_p._getHtml();
			LzlEditor._s_p._getUbbContent=function(){return con.replace(/<br>/gim, '</br>')}
		}
	}
}

function setPostHook(){
	var con=hookProc(test_editor.getContent().replace(/<br[^>]*>|[\n]/gim, '<br>').replace(/ /gim, ' ').replace(/[\r\t]/gim, ' '));
	test_editor.getContent=function(){return con};
	test_editor.getContentUbb=function(){return con}
}

setFloorHook();
setPostHook();
