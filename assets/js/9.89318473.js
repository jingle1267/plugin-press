(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{361:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"v-运势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v-运势"}},[t._v("#")]),t._v(" V 运势")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("这个插件必须要求 酷Q Pro 版本，因为要发送图片。"),s("br"),t._v("\n同时保证所有配置文件在 UTF-8 编码下保存。"),s("br"),t._v("\n若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8")])]),t._v(" "),s("h2",{attrs:{id:"部署流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署流程"}},[t._v("#")]),t._v(" 部署流程")]),t._v(" "),s("h3",{attrs:{id:"解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解压"}},[t._v("#")]),t._v(" 解压")]),t._v(" "),s("p",[t._v("将 "),s("a",{attrs:{href:"https://github.com/fz6m/nonebot-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("本插件"),s("OutboundLink")],1),t._v(" 下载解压，将解压得到的 "),s("code",[t._v("CQVortune")]),t._v(" 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项："),s("br"),t._v("\n保证你的 NoneBot 主程序 "),s("code",[t._v("main.py(这里假设为main.py)")]),t._v(" 和 "),s("code",[t._v("vortune")]),t._v(" 文件夹在同一级目录，文件夹 "),s("code",[t._v("CQVortune")]),t._v(" 里已经包含了一个示例主程序 "),s("code",[t._v("main.py")]),t._v(" 可供参考，如果你还有其他插件，你可以直接把 "),s("code",[t._v("main.py")]),t._v(" 中有关导入本插件的部分拷贝进你的主程序 "),s("code",[t._v("_.py")]),t._v(" 文件。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#导入本插件")]),t._v("\n    nonebot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__file__"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vortune'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vortune'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),s("p",[t._v("本插件需要安装以下依赖：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("    pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" ujson\n    pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" python-dateutil\n    pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pillow\n")])])]),s("p",[t._v("注：如果安装 "),s("code",[t._v("ujson")]),t._v(" 依赖失败，你可以不安装，从而会自动使用已有 "),s("code",[t._v("json")]),t._v(" 库代替 "),s("code",[t._v("ujson")]),t._v(" （性能较低），你也可以在 "),s("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v(" 下载对应你 "),s("code",[t._v("python")]),t._v(" 版本和位数的 "),s("code",[t._v("ujson")]),t._v(" 安装包，之后执行本地安装即可：")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("    pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 本地 ujson 安装包"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".whl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("路径\n")])])]),s("h2",{attrs:{id:"开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),s("p",[t._v("你可以在群内发送如下指令之一触发该插件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    今日人品\n    今日运势\n    抽签\n    人品\n    运势\n    小狐狸签\n    吹雪签\n")])])]),s("p",[t._v("当使用 "),s("code",[t._v("小狐狸签")]),t._v(" 和 "),s("code",[t._v("吹雪签")]),t._v(" 时，底图固定为白上吹雪。")]),t._v(" "),s("h2",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("h3",{attrs:{id:"触发命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发命令"}},[t._v("#")]),t._v(" 触发命令")]),t._v(" "),s("p",[t._v("你可以在 "),s("code",[t._v("CQVortune/vortune/main.py")]),t._v(" 的第 12 行找到如下触发指令列表：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("    commandList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'今日人品'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'今日运势'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'抽签'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'人品'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'运势'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'小狐狸签'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'吹雪签'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"文案增改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文案增改"}},[t._v("#")]),t._v(" 文案增改")]),t._v(" "),s("p",[t._v("你可以在 "),s("code",[t._v("CQVortune/vortune/data/fortune/copywriting.json")]),t._v(" 找到所有运势文案内容，按照其已有格式添加结构即可：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"good-luck"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"曾经的努力和经验会成为他人眼中魅力的样子"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中："),s("br"),t._v(" "),s("code",[t._v("good-luck")]),t._v(" ： 吉凶度 的编号，在同文件夹的 "),s("code",[t._v("CQVortune/vortune/data/fortune/goodLuck.json")]),t._v(" 可以找到吉凶度设定，受字体限制，吉凶度是日语，请不要加入中文。"),s("br"),t._v(" "),s("code",[t._v("content")]),t._v(" ：运势文案内容。")]),t._v(" "),s("h3",{attrs:{id:"文案来源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文案来源"}},[t._v("#")]),t._v(" 文案来源")]),t._v(" "),s("p",[t._v("插件自带了 100 余个运势文案，来自于 hololive 早安系列第 3.21 - 3.29 期，如果想自己添加文案却没有头绪，可以参考其他期视频添加。")]),t._v(" "),s("h3",{attrs:{id:"吉凶度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#吉凶度"}},[t._v("#")]),t._v(" 吉凶度")]),t._v(" "),s("p",[t._v("配置 吉凶度 设定的 "),s("code",[t._v("goodLuck.json")]),t._v(" 文件，如果需要改动，要保证新增满足如下结构：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"good-luck"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"大吉"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("其中："),s("br"),t._v(" "),s("code",[t._v("name")]),t._v("：为吉凶度名称，最多 3 个汉字或假名，必须为日语。"),s("br"),t._v(" "),s("code",[t._v("good-luck")]),t._v("：代表 吉凶度 代号，默认已经提供了 19 个吉凶度可供选择，其吉凶排序来自于 "),s("a",{attrs:{href:"https://ja.wikipedia.org/wiki/%E5%90%89%E5%87%B6",target:"_blank",rel:"noopener noreferrer"}},[t._v("wiki"),s("OutboundLink")],1),t._v(" 百科。")]),t._v(" "),s("p",[t._v("要问为什么 吉 在 小吉 之后，我也不知道，实际使用时可以根据习惯来选择吉凶度，单独给予每一个吉凶度代号是为了方便不会日语的人，不需要在意其具体好坏。")]),t._v(" "),s("p",[t._v("一些吉凶度说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("半吉")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("没有 大吉、中吉、小吉、吉 那么好，但是要比 末吉、末小吉 要好")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("末吉")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("这里的“末”指好运将要到来的意思，也就是现在并没有好坏，未来将会演变为 吉、小吉、中吉 等，当然也有可能变为 大吉")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("仕事運")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("“仕事”是工作的意思，也就是工作、职场上的好运")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("勉強運")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("“勉強”是学习的意思，也就是与学习、学业相关的运气")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("関係運")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("指人际关系方面的运气")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);