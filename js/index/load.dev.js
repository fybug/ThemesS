/** 生成图片预览 */
function getIMG(imgs, ndne) {
    let img = ndne.children("img"); // 源节点
    /* 根据源节点生成图片 */
    for (let i = 0, im = null; i < imgs.length;) {
        im = img.clone(true);
        im.attr('src', toimgs + imgs[i++]);
        im.click(imgShow);
        ndne.append(im);
    }
    // 移出源节点
    img.remove();
}

/** 生成主题区域 */
function getThemes(data) {
    let themesnojs = Themessoure.clone(true); // 节点
    ThemesRoot.append(themesnojs);
    let tmp; // 临时变量
    // 主题介绍节点
    tmp = themesnojs.children(".icons");
    // 设置主题连接
    tmp.children('a').attr('href', data.link)
    // 设置主题图标
        .children('.icon').attr('src', iconfield + data.icon);
    // 设置主题名称
    tmp.children('.TtileAlt').text(data.name).attr('title', data.name);
    // 设置主题版本支持
    tmp.children('small').text(data.Version);
    // 设置主题下载路径
    tmp.children('.buttons').val(doownfield + data.file);
    // 预览图片生成
    getIMG(data.toimgs, themesnojs.children("div"));
    // 获取作者信息节点
    tmp = themesnojs.children('.aouter').children('a');
    // 设置作者信息
    tmp.attr('href', themesaoutes.getaoutlink(data.aouts));
    tmp.children('.icon').attr({"src": themesaoutes.getaouticon(data.aouts), 'title': data.aouts});
    tmp.parent().children('h1').text(data.aouts);
    /** 设置是否有相关的捐献 */
    tmp = tmp.siblings('.buttons');
    tmp.click(dronButton);
    if (themesaoutes.donateQQ(data.aouts))
        tmp.attr('qq', true);
    if (themesaoutes.donateWeChat(data.aouts))
        tmp.attr('wechat', true);
    if (themesaoutes.donateAili(data.aouts))
        tmp.attr('aili', true);
    return themesnojs;
}

function loadDev() {
    let soure = $('.ThemeSource'); // 源节点
    let le = themes.length; // 主题数量
    for (let i = 0; i < le; i++)
        getThemes(themes[i]);
    /* 最后一个元素不是双数 */
    if (le % 2 !== 0)
        $(".showS .ThemeSource:last-child").attr('id', "full");
    soure.remove();
    $(".showS").attr('val', '');
}