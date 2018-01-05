


$(function () {

    let urls = [
        "http://v.juhe.cn/weather/index?format=2&cityname=%E8%8B%8F%E5%B7%9E&key=11244bdbf1d1be26af6e8fac074a2577",
        "https://api.douban.com/v2/book/27199630",
        "https://lihongyao.github.io/ajax/test.php"
    ];


    /**
     * 1. jsonp
     */
    $(".btn").eq(0).on("click", function () {
        $.ajax({
            url: urls[2],
            type: "GET",
            async: "true",
            dataType: "jsonp",
            success: function (response) {
                console.log(response);
            }
        });
    });


    /**
     * 2. cros
     */
    $(".btn").eq(1).on("click", function () {
        $.ajax({
            url: "https://api.douban.com/v2/book/27199630",
            type: "GET",
            success: function (response) {
                console.log(response);
            }
        });
    });
});






