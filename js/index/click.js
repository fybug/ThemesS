$(".frmwork>.foot>.headAndFoot>a").click(function () {
    alert('还没想好放什么')
});
// 设置捐献按钮
$(".showS>section>.ThemeSource>.aouter>.buttons").click(function () {
    hideIMG();
    $('#see #don').removeClass('hidenow');

    let self = $(this);
    let aout = self.parent().children('h1').text(); // 作者

    if (self.attr('qq')) {
        // todo
    }

    shouSEE();
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

/** 展示浮动框 */
function shouSEE() {
    const s = $("#see");
    s.removeClass("hidenow");
}

/** 展示图片 */
function showIMG(src) {
    const img = $("#see>#screen");

    shouSEE();

    img.removeClass('hidenow');
    img.css("background-image", "url(" + src + ")");
}

/** 隐藏展示区域 */
function hideIMG() {
    $("#see").addClass('hidenow');
    $('#see').children('*').attr('style', '');
}