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
                name: "吐槽网",
                text: "类似于论坛，面向青年群众的吐槽网站！",
                nb: [
                    "Vue", "ElementUI", ".NET Core", "Redis", "SQLServer"
                ],
                url: "https://gitee.com/n0ts/tucao",
                img: "./images/tucao1.png",
                content: `<h2>项目类型</h2>
                <p>练手项目</p>
                <h2>开发周期</h2>
                <p>2021年2月2日 – 2021年3月12日，5人/38天</p>
                <h2>开发工具</h2>
                <p>Visual Studio，Visual Code，SQLServer、Redis、Git、Postman</p>
                <h2>项目背景</h2>
                <p>快乐减压，健康生活，是本网站的主旨。吐槽网是以人们真实趣味事为主题的笑话网站，话题轻松休闲。在吐槽网中可以查看他人发布的趣事，也可以与其他的人分享自己亲身经历或听说到的悲剧、搞笑、有意思的、不顺心的等各类情形的生活中的事。</p>
                <h2>模块介绍</h2>
                <p>1、基本：登录注册，找回密码，密保，短信与图片验证码；</p>
                <p>2、首页：精华、热门、关注、分类的吐槽文章跳转展示，瀑布流展示最新吐槽文章，侧栏展示热门文章与近期评论，并且可以加载更多文章（一次性加载十个，可控）；</p>
                <p>3、文章页：文章标题、作者、浏览、点赞、收藏信息展示，文章内容展示，点赞收藏功能，评论与回复评论功能，评论邮件通知功能；</p>
                <p>4、发布文章页：支持富文本编辑框，图片视频上传，心情选择，存为草稿或者发布，文章信息显示；</p>
                <p>5、搜索页：支持全站模糊搜索吐槽文章，并分页展示；</p>
                <p>6、后台管理：公告查看，吐槽文章类型数据可视化展示，文章编辑、存为草稿、删除，评论管理，关注管理；</p>
                <p>7、管理员：全站文章管理、用户管理、评论管理，关注管理，公告发布等；</p>
                <h2>项目技术</h2>
                <p>1、前端采用 Vue + ElementUI 编写，拟态化简约风格设计；</p>
                <p>2、后端采用 .NET Core 编写 RESTFul API 接口，与前端进行数据交互；</p>
                <p>3、验证信息等数据在Redis进行缓存，分担了服务器的压力；</p>
                <p>4、前端资源全部采用 lazy-load 懒加载，并且存储在阿里云OOS进行调用；</p>
                <p>5、吐槽文章采用瀑布流布局分页展示，可通过加载更多每次加载更多吐槽；</p>
                <p>6、文章发布采用富文本编辑框实现，支持上传图片视频，emoji 表情等常用功能；</p>
                <p>7、前端请求统一采用自己封装的Axios与后端交互；</p>
                <p>8、使用 Echarts 完成后台数据可视化展示以及管理员的全站信息可视化展示；</p>
                <p>9、后端采用 JWT 验证用户登录状态，Token等信息存储在Redis进行管理；</p>
                <p>10、后端有专门的过滤器来防止XSS，SQL注入等攻击；</p>
                <p>11、后端配置了允许任何 Origin 解决了 CROS 跨域问题；</p>
                <p>12、短信验证码采用阿里云短信服务，配置对应的SDK来实现发送操作；验证码的临时数据则是存储在Redis中暂存，当验证码被使用或者超过三分钟则自动销毁；</p>
                <p>13、图片验证码由后端随机生成字符串并且绘制图案，然后以Base64格式返回图片到前端进行显示，验证码缓存数据由Redis进行存储，验证成功或超时三分钟则自动销毁；</p>
                <p>14、使用 .NET Core MailMessage 实现了邮件通知功能；</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/tucao1.png"></li>
                    <li><img src="./images/tucao2.png"></li>
                    <li><img src="./images/tucao3.png"></li>
                    <li><img src="./images/tucao4.png"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、数据库设计，模块设计；</p>
                <p>2、全栈开发；</p>
                <p>3、修复测试人员发现的BUG；</p>`
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
                name: "博客",
                context: "blog.n0ts.cn"
            },
            {
                name: "邮箱",
                context: "mail@n0ts.cn"
            },
            {
                name: "QQ",
                context: "1656071287"
            },
            {
                name: "微信",
                context: "n0tssss"
            }
        ]
    }
}
