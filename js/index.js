$(".frmwork>.foot>.headAndFoot>a").click(function () {
    alert('还没想好放什么')
});
// 点击展示图片
$(".showS>section>.conins>div>img").click(function () {
    var s = $("#see");
    var img = s.children("#screen");

    s.removeClass("hidenow");

    img.css("background-image", "url(" + $(this).attr('src') + ")");
});
// 展示区域点击隐藏
$("#see").click(function () {
    $("#see").addClass('hidenow');
    return false;
});
// 设置捐献隐藏
$("#aoutDonate").click(function () {
    $("#aoutDonate").addClass('hidenow');
    return false;
});
// 设置捐献按钮
$(".aouter>button").click(function () {
    var aout = $(this).siblings("a").children("img").attr('title');

    $("#aoutDonate").removeClass("hidenow");

    $("#qqplay").css('background-image', "url(static/img/" + aout + "-" + "qq)");
    $("#wechatplay").css('background-image', 'url(static/img/' + aout + '-' + 'wechat)');
    $("#ailiplay").css('background-image', 'url(/static/img/' + aout + '-' + 'aili)');
});