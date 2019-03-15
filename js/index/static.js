/** 主题图标路径 */
const iconfield = "static/img/theme/";
/** 主题路径 */
const doownfield = 'static/themes/';
/** 主题展示图路径 */
const toimgs = 'static/img/themeto/';
/** 作者图标路径 */
const aouticon = 'static/img/aout/';
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
    toimgs: ['1-1.png', '1-2.png', '1-3.png', '1-4.png', '1-5.png', '1-6.png', '1-7.png']
}, {
    aouts: 'Masuku',
    icon: "2.png",
    link: "https://www.coolapk.com/apk/com.galaxy.masuku",
    name: "银河",
    Version: "EMUI5.1及以下",
    file: '2.hwt',
    toimgs: ['2-1.png', '2-2.png', '2-3.png', '2-4.png', '2-5.jpg', '2-6.png']
}];
/** 作者信息 */
const themesaoutes = {
    /** 作者数据存放区 */
    data: {
        'Masuku': {
            link: "https://www.coolapk.com/apk/com.yuanos.masuku",
            qq: true, wechat: false, aili: false
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
    },
    /** 获取是否有qq捐献码 */
    donateQQ: function (name) {
        return this.data[name].qq;
    },
    /** 获取是你否有微信捐献码 */
    donateWeChat: function (name) {
        return this.data[name].wechat;
    },
    /** 获取是否有支付宝捐献码 */
    donateAili: function (name) {
        return this.data[name].aili;
    }
};
/** 源节点 */
const Themessoure = $('.ThemeSource').clone(true);
/** 主题展示区父节点 */
const ThemesRoot = $('.ThemeSource').parent();