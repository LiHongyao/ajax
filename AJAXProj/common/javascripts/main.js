/**
 * Created by LiHongyao on 2017/8/7.
 */


var oContent = document.querySelector('.content');

/**
 * 1、HTML 请求
 */
{
    var oHtmlRequestBtn = document.querySelector('ul li:first-child');
    oHtmlRequestBtn.onclick = function () {
        // 1、创建请求对象
        var request = new XMLHttpRequest();
        // 2、配置请求
        request.open('GET', 'datas/content.html', true);
        // 3、发送请求
        request.send(null);
        // 4、监听
        request.onreadystatechange = function () {
            // 判断请求是否完成
            if(request.readyState == 4) {
                // 判断请求是否成功
                if(request.status == 200) {
                    oContent.innerHTML = request.responseText;
                }else {
                    oContent.textContent = '请求失败！';
                }
            }
        }
    }
}

/**
 * 2、Text 请求
 */

{
    var oTextRequestBtn = document.querySelector('ul li:nth-child(2)');
    oTextRequestBtn.onclick = function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'datas/infos.txt');
        request.send(null);
        request.onreadystatechange = function () {
            if(request.readyState == 4) {
                if(request.status == 200) {
                    oContent.innerHTML = request.responseText;
                }else {
                    oContent.innerHTML = '数据加载失败...';
                }
            }
        }
    }
}

/**
 * 3、JSON 请求
 */

{
    var oJsonRequestBtn = document.querySelector('ul li:nth-child(3)');
    oJsonRequestBtn.onclick = function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'datas/roleInfos.json', true);
        request.send(null);
        request.onreadystatechange = function () {
            if(request.readyState == 4) {
                if(request.status == 200) {
                    var infos = JSON.parse(request.responseText);
                    oContent.innerHTML = `
                        <h1>王者荣耀角色信息</h1>
                        <p>
                            <b>角色：</b>
                            <span>${infos.role}</span>
                        </p>
                        <p>
                            <b>职业：</b>
                            <span>${infos.profession}</span>
                        </p>
                         <p>
                            <b>位置：</b>
                            <span>${infos.position}</span>
                        </p>
                         <p>
                            <b>被动：</b>
                            <br>
                            <span>${infos.skills.passive.name}</span>
                            <br>
                            <span>${infos.skills.passive.des}</span>
                        </p>
                        <p>
                            <b>技能1：</b>
                            <br>
                            <span>${infos.skills.skill_I.name}</span>
                            <br>
                            <span>${infos.skills.skill_I.des}</span>
                        </p>
                        <p>
                            <b>技能2：</b>
                            <br>
                            <span>${infos.skills.skill_II.name}</span>
                            <br>
                            <span>${infos.skills.skill_II.des}</span>
                        </p>
                        <p>
                            <b>技能3：</b>
                            <br>
                            <span>${infos.skills.skill_III.name}</span>
                            <br>
                            <span>${infos.skills.skill_III.des}</span>
                        </p>
                    `;
                }else {
                    oContent.innerHTML = '数据加载失败！';
                }
            }
        }
    }
}

/**
 * 4、JavaScript 请求
 */

{
    var oJSRequestBtn = document.querySelector('ul li:nth-child(4)');
    oJSRequestBtn.onclick = function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'datas/ajaxJS.js', true);
        request.send(null);
        request.onreadystatechange = function () {
            if(request.readyState == 4) {
                if(request.status == 200) {
                    var oScript = document.createElement('script');
                    oScript.appendChild(document.createTextNode(request.responseText));
                    document.body.appendChild(oScript);
                }
            }
        }
    }
}





{
    $('ul li:last-child').on('click', function () {
       $.ajax({
           type: "GET",
           url: "datas/content.html",
           success: function (data) {
               $('.content').html(data)
           },
           error: function () {
               $('.content').text('数据加载失败！');
           }
       });
    });
}










































