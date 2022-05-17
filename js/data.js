export default {
    index: {
        title: "你好，我是",
        me: [
            "刘若男",
            "游戏狂热粉丝",
            "游戏开发设计师"
        ],
        bg: "./images/bg.jpg",
        subTitle: "即使前方的路看似绝境，也要有硬生生给自己开出一条路的勇气",
        contact: [{
            name: "Email",
            icon: "fa-envelope",
            link: "mailto:epikoni233@gmail.com"
        },
        {
            name: "GitHub",
            icon: "fa-github",
            link: "https://github.com/Epikoni"
        },
        {
            name: "Wechat",
            icon: "fa-weixin",
            link: "./images/Erweicaihong.png"
        },
        {
            name: "QQ",
            icon: "fa-qq",
            link: "https://wpa.qq.com/msgrd?v=3&uin=957239301&site=qq&menu=yes"
        }
      ],
        loadMore: {
            text: "了解更多",
            class: "lovexhj2"
        }
    },
    about: {
        title: "关于我",
        laozi: {
            img: "./images/me.jpg",
            content: "<span></span>我叫<b>刘若男</b>，今年21岁，是美国威斯康星麦迪逊大学的一名大四在读生，所学专业是<b>计算机科学</b>辅修<b>游戏设计</b>；<br /><span></span>我个人对于游戏设计开发有<b>浓厚的兴趣</b>，喜欢用学习到的知识去设计与开发一些游戏，喜欢通过游戏表达<b>自己的理念</b>。"
        },
        ability: [{
                icon: "fa-gamepad",
                title: "游戏设计",
                subTitle: "MDA Framework, Gee's Learning Principles...",
                color: "#ff4757",
                bfb: "80%"
            },
            {
                icon: "fa-desktop",
                title: "游戏开发",
                subTitle: "RPG Maker, Bitsy, Twine, Unity...",
                color: "#ffa502",
                bfb: "80%"
            },
            {
                icon: "fa-photo",
                title: "设计",
                subTitle: "Photoshop，Premier, AfterEffects...",
                color: "#2ed573",
                bfb: "80%"
            },
            {
                icon: "fa-code",
                title: "编程",
                subTitle: "Java, C/C++, C#, Python...",
                color: "#1e90ff",
                bfb: "50%"
            }
            
        ],
        loadMore: {
            text: "继续浏览",
            class: "lovexhj3"
        }
    },
    project: {
        title: "我的项目",
        list: [{
                name: "Before Lost",
                text: "俯视角，2-d，RPG，像素风游戏",
                nb: [
                    "原创故事", "时光回溯", "保护环境", "战斗设计", "任务系统"
                ],
                url: "https://epikoni.itch.io/before-lost",
                img: "./images/tucao1.png",
                content: `<h2>项目类型</h2>
                <p>期末项目</p>
                <h2>开发周期</h2>
                <p>2022年1月20日 – 2022年5月12日，4人</p>
                <h2>开发工具</h2>
                <p>RPG Maker MV，GitHub，Javascript</p>
                <h2>项目背景</h2>
                <p>以环境保护为主题，考虑到目前工业化给树木和动物带来的危害，设计一个游戏。主角可以利用祖传的机器穿越时间回到过去，在世界还未毁灭前尽全力挽救。</p>
                <h2>玩法介绍</h2>
                <p>1、故事介绍：森林中的一座木屋里，主角从床上醒来，打开门发现外面着火了，河水里漂浮着动物尸体，地上逐渐出现裂缝。慌乱中，他想到爷爷告诉他有办法让时光倒流，
                      于是他赶紧回家，找到了时光穿梭，穿越到两百年前。这个时候，人们才刚刚开始发展工业，砍伐了很多木材。消费急剧增加，地下矿藏被广泛开采和冶炼，导致森林砍伐、
                      气候变暖和臭氧消耗。想到这一切将会带来的影响，他决心做一些改变世界的事情；</p>
                <p>2、核心机制：跟随故事情节跨越地图完成任务目标；</p>
                <p>3、动态玩法：收集任务物品，收集彩蛋物品（信件，面条等），战斗系统，技能、装备升级；</p>
                <p>4、艺术风格：俯视角，像素风，回合制战斗；</p>
                <h2>项目流程</h2>
                <p>1、确定以RPG Maker MV为引擎；</p>
                <p>2、以地图划分故事，每章节故事结合任务以及地图绘；</p>
                <p>3、地图绘制，部分加入手绘图像以获得更好的地图呈现；</p>
                <p>4、加入Events事件，包含NPC，地图互动物品；</p>
                <p>5、引擎内置功能实现任务流程包含NPC对话等，部分利用Javascript；</p>
                <p>6、编程回合制战斗系统，加入不同武器以及技能并调整数值；</p>
                <p>7、加入不同视觉和音乐效果；</p>
                <p>8、每个地图和任务反复测试，修改数值，修改BUG；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/tucao1.png"></li>
                    <li><img src="./images/tucao2.png"></li>
                    <li><img src="./images/tucao3.png"></li>
                    <li><img src="./images/tucao4.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、任务设计；</p>
                <p>2、编写事件，包含任务流程及战斗系统；</p>
                <p>3、修复测试所发现的BUG；</p>`
            },
            {
                name: "小黑屋商城",
                text: "类似于淘宝，实现了电商该有的功能",
                nb: [
                    "Vue", "ElementUI", "MinitUI", "Redis", "SSM", "JAVA", "Mysql"
                ],
                url: "https://gitee.com/lu_chengwei/pc/",
                img: "./images/bg.jpg",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2020年11月2日 – 2020年12月1日，3人/29天</p>
                <h2>开发工具</h2>
                <p>IDEA、Visual Code、MySQL、Redis、Git、Postman</p>
                <h2>项目背景</h2>
                <p>小黑屋商城是一个综合性的B2C平台，类似京东商城、天猫商城。会员可以在商城浏览商品、下订单，以及参加各种活动。管理员、运营可以在平台后台管理系统中管理商品、订单、会员等。</p>
                <h2>模块介绍</h2>
                <p>1、	基本：登陆注册、找回密码、验证码；</p>
                <p>2、	首页：轮播图热点展示、商品分类展示、商品展示；</p>
                <p>3、	商品详情：图片轮流展示、图片放大镜、商品信息展示、打折与原价展示、添加购物车与购买、评论分类展示、二维码分享、热销展示；</p>
                <p>4、	购物车：购物车商品展示、数量修改、商品类型修改、批量管理与购买、删除购物车；</p>
                <p>5、	支付：充值余额、支付宝支付、支付成功/失败展示；</p>
                <p>6、	用户：个人信息管理、地址选择、订单管理、购物车管理、余额管理；</p>
                <h2>项目技术</h2>
                <p>1.	前端分为 PC 与 Mobile 两个客户端，基于 Vue、ElementUI、Mint UI 编写；</p>
                <p>2.	后端采用 Java、SSM 编写 RESTFul API 风格接口；</p>
                <p>3.	前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                <p>4.	图片验证码由后端生成返回Base64并在前端展示，手机验证码则为阿里云短信服务，验证缓存统一放在Redis进行暂存；</p>
                <p>5.	二维码生成采用 QRCode 根据链接进行生成并压缩；</p>
                <p>6.	充值系统基于支付宝沙箱程序模拟真实的支付宝支付验证付款等；</p>
                <p>7.	登录验证采用 JWT 授权，请求需要登录的接口需要提交 Token 才能通过，否则登陆过期；</p>
                <p>8.	Mobile 端采用瀑布流布局来展示商品；</p>
                <h2>项目预览</h2>
                <p>暂无</p>
                <h2>项目职责</h2>
                <p>1、前端功能开发、页面设计；</p>
                <p>2、支付宝支付对接；</p>
                <p>3、Debug测试并修复；</p>`,
            }
        ],
        listLoadMore: "查看",
        loadMore: {
            text: "继续浏览",
            class: "lovexhj4"
        }
    },
    contact: {
        title: "联系我",
        list: [{
                name: "邮箱",
                context: "epikoni233#gmail.com"
            },
            {
                name: "GitHub",
                context: "https://github.com/Epikoni"
            },
            {
                name: "微信",
                context: "h957239301"
            },
            {
                name: "QQ",
                context: "957239301"
            }
        ]
    }
}
