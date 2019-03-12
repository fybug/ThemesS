/** 主题信息
 * 作者:aout，主题连接:link，主题图标:icon，主题名称:name，主题版本支持:Versionsupport，主题文件存放路径:file，主题展示图标组:toimgs
 */
const themes = [{
    aouts: 'Masuku',
    icon: "1.png",
    link: "https://www.coolapk.com/apk/com.yuanos.masuku",
    name: "原OS",
    Version: "EMUI8.0及以下",
    file: '1.hwt',
    toimgs: ['1-1.png', '1-2.png', '1-3.png', '1-4.png', '1-5.jpg', '1-6.png', '1-7.png']
}];
/** 作者信息 */
const themesaoutes = {
    /** 作者数据存放区 */
    data: {
        'Masuku': {
            link: "https://www.coolapk.com/apk/com.yuanos.masuku"
        }
    },
    /** 绑定的数据
     *
     * @var themes|null
     */
    bin: themes,
    /** 获取作者连接
     *
     * @param name 要获取的作者的名字
     * @return string
     */
    getaoutlink: function (name) {
        return this.data[name].link;
    },
    /** 获取作者图标
     *
     * @param name 要获取的作者的名称
     * @return string
     */
    getaouticon: function (name) {
        return aouticon + name;
    },
    /** 通过绑定的数据获取作者连接
     *
     * @param id 对应的绑定数据的 id
     * @return string|null
     */
    getlink: function (id) {
        /* 检测是否有绑定数据 */
        if (this.bin === null)
            return null;
        else
            return this.getaoutlink(this.bin[id][aouts]);
    },
    /** 通过绑定的数据获取作者图标
     *
     * @param id 对应的绑定数据 id
     * @return string|null
     */
    geticon: function (id) {
        /* 检测是否有绑定数据 */
        if (this.bin === null)
            return null;
        else
            return this.getaoutlink(this.bin[id][aouts]);
    }
};
/** 源节点 */
const Themessoure = $('.ThemeSource').clone(true);
/** 主题展示区父节点 */
const ThemesRoot = $('.ThemeSource').parent();

/** 生成图片预览 */
function getIMG(imgs, ndne) {
    let img = ndne.children("img"); // 源节点
    /* 根据源节点生成图片 */
    for (let i = 0, im = null; i < imgs.length; i++) {
        im = img.clone(true);
        im[0].src = toimgs + imgs[i];
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
    tmp.children('a')[0].href = data.link;
    // 设置主题图标
    tmp.children('a').children('.icon')[0].src = iconfield + data.icon;
    // 设置主题名称
    tmp.children('.TtileAlt').text(data.name);
    tmp.children('.TtileAlt').attr('title', data.name);
    // 设置主题版本支持
    tmp.children('small').text(data.Version);
    // 设置主题下载路径
    tmp.children('.buttons').val(doownfield + data.file);
    // 预览图片生成
    tmp = themesnojs.children("div");
    getIMG(data.toimgs, tmp);
    // 获取作者信息节点
    tmp = $('.ThemeSource .aouter');
    // 设置作者信息
    tmp = tmp.children('a');
    tmp.attr('href', themesaoutes.getaoutlink(data.aouts));
    tmp.children('.icon').attr({"src": themesaoutes.getaouticon(data.aouts), 'title': data.aouts});
    tmp.parent().children('h1').text(data.aouts);
    // todo 设置作者捐献信息
    return themesnojs;
}

function load() {
    let soure = $('.ThemeSource'); // 源节点
    let le = themes.length;
    for (let i = 0; i < le; i++)
        getThemes(themes[i]);
    /* 最后一个元素不是双数 */
    if (le % 2 !== 0)
        $(".showS>section>.ThemeSource:last-child")[0].id = "full";
    $(soure[0]).remove();
}