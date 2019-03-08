$(".frmwork>.foot>.headAndFoot>a").click(function () {
    alert('还没想好放什么')
});
// 先隐藏展示区域
$("#see").hide(0);
$(".showS>section>.conins>div>img").click(function () {
    var s = $("#see");
    s.children("img").attr("src", $(this).attr('src'));
    s.show(0);
});
// 展示区域点击隐藏
$("#see").click(function () {
    var self = $("#see");
    self.children("img").attr("src", "");
    self.hide(0);
    return false;
});