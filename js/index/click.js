$(".frmwork>.foot>.headAndFoot>a").click(function () {
    alert('啊♂♂')
});

// 设置捐献按钮
$(".showS>section>.ThemeSource>.aouter>.buttons").click(function () {
    hideIMG();
    $('#see #don').removeClass('hidenow');

    let self = $(this);
    let aout = self.parent().children('h1').text(); // 作者
    let has= false;
    let bu=null;

    if (self.attr('qq')) {
        has=true;
        bu=$('#don #qq');
        bu.removeClass('hidenow');
        bu.attr('val',aout+'-qq');
    }
    if(self.attr('wechat')){
        has=true;
        bu=$('#don #wechat');
        bu.removeClass('hidenow');
        bu.attr('val',aout+'-wechat');
    }
    if(self.attr('aili')){
        has=true;
        bu=$('#don #mayun');
        bu.removeClass('hidenow');
        bu.attr('val',aout+'-aili');
    }
    if(has)
        shouSEE();
    else{
    hideIMG();
    alert("该作者没有上传捐献码......");
    }
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
    $('#see').children('*').attr({'style': '',"val":''});
}