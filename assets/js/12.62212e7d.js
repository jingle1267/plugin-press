(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{364:function(t,e,a){"use strict";a.r(e);var n=a(25),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一言"}},[t._v("#")]),t._v(" 一言")]),t._v(" "),a("h2",{attrs:{id:"部署流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署流程"}},[t._v("#")]),t._v(" 部署流程")]),t._v(" "),a("h3",{attrs:{id:"解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[t._v("#")]),t._v(" 解压")]),t._v(" "),a("p",[t._v("将 "),a("a",{attrs:{href:"https://github.com/fz6m/nonebot-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("本插件"),a("OutboundLink")],1),t._v(" 下载解压，将解压得到的 "),a("code",[t._v("CQHitokoto")]),t._v(" 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项："),a("br"),t._v("\n保证你的 NoneBot 主程序 "),a("code",[t._v("main.py(这里假设为main.py)")]),t._v(" 和 "),a("code",[t._v("hitokoto")]),t._v(" 文件夹在同一级目录，文件夹 "),a("code",[t._v("CQHitokoto")]),t._v(" 里已经包含了一个示例主程序 "),a("code",[t._v("main.py")]),t._v(" 可供参考，如果你还有其他插件，你可以直接把 "),a("code",[t._v("main.py")]),t._v(" 中有关导入本插件的部分拷贝进你的主程序 "),a("code",[t._v("_.py")]),t._v(" 文件。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#导入本插件")]),t._v("\n    nonebot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hitokoto'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hitokoto'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"安装依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),a("p",[t._v("本插件需要安装以下依赖：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("    pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ujson\n")])])]),a("p",[t._v("注：如果安装 "),a("code",[t._v("ujson")]),t._v(" 依赖失败，你可以不安装，从而会自动使用已有 "),a("code",[t._v("json")]),t._v(" 库代替 "),a("code",[t._v("ujson")]),t._v(" （性能较低），你也可以在 "),a("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 下载对应你 "),a("code",[t._v("python")]),t._v(" 版本和位数的 "),a("code",[t._v("ujson")]),t._v(" 安装包，之后执行本地安装即可：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("    pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 本地 ujson 安装包"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".whl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("路径\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("你可以在群内使用如下指令触发一言功能：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    一言\n    一言 anime\n    一言 comic\n    一言 game\n    一言 novel\n    一言 myself\n    一言 internet\n    一言 other\n")])])]),a("p",[t._v("参数的含义如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("anime")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("动画")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("comic")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("漫画")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("game")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("游戏")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("novel")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("小说")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("myself")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("原创")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("internet")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("来自网络")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("other")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("其他")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("空")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("随机")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("错误的参数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("随机")])])])]),t._v(" "),a("h2",{attrs:{id:"备份"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[t._v("#")]),t._v(" 备份")]),t._v(" "),a("p",[t._v("一言数据源自 "),a("code",[t._v("https://v1.hitokoto.cn/")]),t._v("。")]),t._v(" "),a("p",[t._v("为了防止倒闭，所有使用过的一言都会以 "),a("code",[t._v(".json")]),t._v(" 形式保存在 "),a("code",[t._v("hitokoto/data/backup.json")]),t._v(" 中，目前还没有调用本地备份数据的功能，如果他倒闭了会再出此功能。")])])}),[],!1,null,null,null);e.default=s.exports}}]);