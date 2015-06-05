function sd(){var t={ie:'utf-8',kw:PageData.forum.forum_name,fid:PageData.forum.forum_id,tid:tmp.ti,rich_text:1,tbs:PageData.tbs,content:tmp.co,title:tmp.ti,__type__:'reply'};$.post("http://tieba.baidu.com/f/commit/"+(ti?"post":"thread")+"/add",t,function(msg){tmp.all++;if(msg.no=="0"&&result_show){tmp.suc++;result_show.innerHTML=('<font color="green">发帖成功!</font><br>任务数：'+tmp.cs+'<br>成功数：'+tmp.suc+'<br>总次数：'+tmp.all)}else{Thread_add_result.resultNo=msg.no;result_show.innerHTML=('<font color="red">发贴失败!——'+Thread_add_result.getMessage()+'</font><br>任务数：'+tmp.cs+'<br>成功数：'+tmp.suc+'<br>总次数：'+tmp.all)};if(tmp.suc<tmp.cs)sd()})};function bc(){tmp.all=0;tmp.suc=0;tmp.xc=Tool_xc.value;tmp.cs=Tool_cs.value;tmp.ti=ti?ti.title:Tool_ti.value;tmp.tid=ti?ti.thread_id:0;tmp.co=(lzl.user_name?("回复 "+lzl.user_name+" :"):"")+Tool_co.value;if(tmp.co&&(tmp.ti||tmp.tid)&&tmp.xc&&tmp.cs){for(var i=0;i<tmp.xc;i++)sd()}};var x=2,tmp={},lzl=(window.LzlEditor&&window.LzlEditor._lzl?window.LzlEditor._lzl.mainData:{}),ti=PageData.thread;$.dialog.open('<div id="result_show">'+(ti?'':'标题<input type="text" style="width: 330px;padding: 2px;" id="Tool_ti" autocomplete="off"><br>')+'内容：<textarea id="Tool_co" style="width: 316px; height: 160px;padding: 10px;resize: none;"></textarea><br>线程：<input type="text" style="width: 80px;padding: 2px;" id="Tool_xc" autocomplete="off">成功数：<input type="text" style="width: 80px;padding: 2px;" id="Tool_cs" autocomplete="off"><input type="button" style="padding: 3px;" id="Tool_qd" value="开始"><div>',{title:"快捷发帖框",showTitle:!0,resizeable:!0,width:360,time:10086,button:!1});Tool_qd.onclick=bc;
function sd() {
	var t = {
		ie: 'utf-8',
		kw: PageData.forum.forum_name,
		fid: PageData.forum.forum_id,
		tid: tmp.ti,
		rich_text: 1,
		tbs: PageData.tbs,
		content: tmp.co,
		title: tmp.ti,
		__type__: 'reply'
	};
	$.post("http://tieba.baidu.com/f/commit/" + (ti ? "post" : "thread") + "/add", t, function(msg) {
		tmp.all++;
		if (msg.no == "0" && result_show) {
			tmp.suc++;
			result_show.innerHTML = ('<font color="green">发帖成功!</font><br>任务数：' + tmp.cs + '<br>成功数：' + tmp.suc + '<br>总次数：' + tmp.all);
		} else {Thread_add_result.resultNo=msg.no;
			result_show.innerHTML = ('<font color="red">发贴失败!——'+Thread_add_result.getMessage()+'</font><br>任务数：' + tmp.cs + '<br>成功数：' + tmp.suc + '<br>总次数：' + tmp.all);
		};
		if (tmp.suc < tmp.cs) sd();
	});
};

function bc() {
	tmp.all = 0;
	tmp.suc = 0;
	tmp.xc = Tool_xc.value;
	tmp.cs = Tool_cs.value;
	tmp.ti = ti ? ti.title : Tool_ti.value;
	tmp.tid = ti ? ti.thread_id : 0;
	tmp.co = (lzl.user_name ? ("回复 " + lzl.user_name + " :") : "") + Tool_co.value;
	if (tmp.co && (tmp.ti || tmp.tid) && tmp.xc && tmp.cs) {
		for (var i = 0; i < tmp.xc; i++) sd();
	}
};
var x = 2,
	tmp = {},
	lzl = (window.LzlEditor && window.LzlEditor._lzl ? window.LzlEditor._lzl.mainData : {}),
	ti = PageData.thread;
$.dialog.open('<div id="result_show">' + (ti ? '' : '标题<input type="text" style="width: 330px;padding: 2px;" id="Tool_ti" autocomplete="off"><br>') + '内容：<textarea id="Tool_co" style="width: 316px; height: 160px;padding: 10px;resize: none;"></textarea><br>线程：<input type="text" style="width: 80px;padding: 2px;" id="Tool_xc" autocomplete="off">成功数：<input type="text" style="width: 80px;padding: 2px;" id="Tool_cs" autocomplete="off"><input type="button" style="padding: 3px;" id="Tool_qd" value="开始"><div>', {
	title: "快捷发帖框",
	showTitle: !0,
	resizeable: !0,
	width: 360,
	time: 10086,
	button: !1
});
Tool_qd.onclick = bc;
