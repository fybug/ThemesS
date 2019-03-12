$(".frmwork>.foot>.headAndFoot>a").click(function () {
    alert('还没想好放什么')
});
// 点击展示图片
$(".showS>section>.ThemeSource>div>img").click(function () {
    showIMG($(this).attr('src'));
});
// 展示区域点击隐藏
$("#see").click(function () {
    hideIMG();
    return false;
});

/** 展示图片 */
function showIMG(src) {
    var s = $("#see");
    var img = s.children("#screen");

    s.removeClass("hidenow");

    img.css("background-image", "url(" + src + ")");
}

/** 隐藏展示区域 */
function hideIMG() {
    $("#see").addClass('hidenow');
    $("#see").children("#screen").img.css("background-image", "");
}