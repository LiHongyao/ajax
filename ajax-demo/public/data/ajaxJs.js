

$(function () {
    $(`.content`).html(`
		<p>看似我是一段文本，实际上我是一个叫做javascriptFile.js文件里的语句内容</p>
		<button id="runTestJS" type="button">但就算是这样，我也可以被点击</button>
	`);
    $(`#runTestJS`).click(function () {
        alert(`我是被点击过的按钮的弹出框！`);
    });
});









