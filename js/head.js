// 设置主导航按钮
$('#navigation').click(function () {
    let ins = $(this).attr('in'); // 当前状态
    /* 设置状态 */
    $(this).attr('in', ins === '' ? 'get' : '');
    return false;
});
var lastY = $(document).scroll(function () {
    let solY = Number(lastY) - Number($(document).scrollTop());
    /* 隐藏 */
    if (solY < 0) {
        $("#navigation").attr("sold", "scoll");
        $("#navigation").attr("in", "");
    } else if (solY > 0) {
        $("#navigation").attr("sold", "");
    }
    lastY = $(document).scrollTop();
}).scrollTop();
$('#navig i').click(function () {
    window.open($(this).attr('href'))
});