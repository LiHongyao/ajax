
$(function () {

	/**
	 *
	 *  获取豆瓣网api
	 *  1. 进入豆瓣网 https://book.douban.com/
	 *  2. 随便点一本书进去获取网址中的书本id https://book.douban.com/subject/27199630/?icn=index-editionrecommend
	 *     地址中 27199630 为书本id
	 *  3. 然后将id拼接在api地址 “https://api.douban.com/v2/book/” 后面即可
	 */

    let urls = [
        "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=11244bdbf1d1be26af6e8fac074a2577",
        "https://api.douban.com/v2/book/27199630",
    ];


    /**
     * 1. jsonp
     */
    $(".btn").eq(0).on("click", function () {
        $.ajax({
            url: urls[1],
            type: "GET",
            async: "true",
            dataType: "jsonp", // 指定服务器返回的数据类型
            // jsonp: "callBack", // 指定参数名称
            // jsonpCallback: "getData", // 指定回调函数名称
            success: function (response) {
                console.clear();
                console.log(response);
            }
        });
    });


});






