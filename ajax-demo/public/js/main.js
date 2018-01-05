/**
 * Created by LiHongyao on 2017/8/7.
 */


$(function () {

    let $content = $(".content");

    /**
     * 1、XMLHttpRequest
     */
    {
        $("li").first().on("click", function () {
            // 1. 创建请求
            let xhr = new XMLHttpRequest();
            // 2. 配置请求
            xhr.open("GET", "data/content.html", true);
            // 3. 发送请求
            xhr.send(null);
            // 4、监听请求
            xhr.onreadystatechange = function () {
                if(xhr.readyState == 4 && xhr.status == 200 ) {
                    let htmlStr = xhr.responseText;
                    $content.html(htmlStr);
                }
            };
        });
    }

    /**
     * 2、$.get()
     */
    {
        $("li").eq(1).on("click", function () {
            $.get("data/info.txt", function (response, status) {
                if(status == "success") {
                    $content.html(response);
                }
            }, "text");
        });
    }

    /**
     * 3、$.getJSON()
     */
    {
        $("li").eq(2).on("click", function () {
            $.getJSON("data/role.json", function (response, status) {
                if (status == "success") {
                    let role = response;
                    $content.html(`
                        <h1>王者荣耀角色信息</h1>
                        <p>
                            <b>角色：</b>
                            <span>${role["role"]}</span>
                        </p>
                        <p>
                            <b>职业：</b>
                            <span>${role["profession"]}</span>
                        </p>
                         <p>
                            <b>位置：</b>
                            <span>${role["position"]}</span>
                        </p>
                         <p>
                            <b>被动：</b>
                            <br>
                            <span>${role["skills"]["passive"]["name"]}</span>
                            <br>
                            <span>${role["skills"]["passive"]["des"]}</span>
                        </p>
                        <p>
                            <b>技能1：</b>
                            <br>
                            <span>${role["skills"]["skill_I"]["name"]}</span>
                            <br>
                            <span>${role["skills"]["skill_I"]["des"]}</span>
                        </p>
                        <p>
                            <b>技能2：</b>
                            <br>
                            <span>${role["skills"]["skill_II"]["name"]}</span>
                            <br>
                            <span>${role["skills"]["skill_II"]["des"]}</span>
                        </p>
                        <p>
                            <b>技能3：</b>
                            <br>
                            <span>${role["skills"]["skill_III"]["name"]}</span>
                            <br>
                            <span>${role["skills"]["skill_III"]["des"]}</span>
                        </p>
                    `);
                }
            });
        });
    }


    /**
     * 4、$.getScript
     */
    {
        $("li").eq(3).on("click", function () {
            $.getScript("data/ajaxJs.js");
        });
    }


    /**
     * 5、$.post()
     */
    {
        $("li").eq(4).on("click", function () {

        });
    }

    /**
     * 6、$.ajax()
     */
    {
        $("li").eq(5).on("click", function () {
            $.ajax({
                url: "data/user.xml",
                type: "GET",
                dataType: "xml",
                success: function (xml) {
                    let htmlStr = "";
                    htmlStr += "<p>姓名：<span>" + $(xml).find("name").text() +"</span></p>";
                    htmlStr += "<p>年龄：<span>" + $(xml).find("age").text() +"</span></p>";
                    htmlStr += "<p>职业：<span>" + $(xml).find("profession").text() +"</span></p>";
                    htmlStr += "<p>地址：<span>" + $(xml).find("address").text() +"</span></p>";
                    $content.html(htmlStr);
                }

            });
        });
    }

});























































