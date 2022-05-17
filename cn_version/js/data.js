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
            name: "微信",
            icon: "fa-weixin",
            link: "./images/Erweicaihong.png"
        },
        {
            name: "QQ",
            icon: "fa-qq",
            link: "https://wpa.qq.com/msgrd?v=3&uin=957239301&site=qq&menu=yes"
        }，{
            name: "英文",
            icon: "fa-language",
            link: "www.epikoni.com"
        }
      ],
        loadMore: {
            text: "了解更多",
            class: "method2"
        }
    },
    about: {
        title: "关于我",
        meme: {
            img: "./images/ME.PNG",
            content: "<span></span>我叫<b>刘若男</b>，今年21岁，是美国威斯康星麦迪逊大学的一名大四在读生，所学专业是<b>计算机科学</b>辅修<b>游戏设计</b>；<br /><span></span>我个人对于游戏设计开发有<b>浓厚的兴趣</b>，喜欢用学习到的知识去设计与开发一些游戏，喜欢通过游戏表达<b>自己的理念</b>；<br /><span></span>有<b>团队合作经验，沟通能力强</b>；适应力强，能很快融入集体；上进心强，愿意不断学习充实自己。"
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
            class: "method3"
        }
    },
    project: {
        title: "我的项目",
        list: [{
                name: "Before Lost",
                text: "俯视角，2-d，RPG，像素风游戏",
                nb: [
                    "原创故事", "时光回溯", "战斗设计", "任务系统", "手绘场景","Javascript"
                ],
                url: "https://epikoni.itch.io/before-lost",
                img: "./images/RPG.jpg",
                content: `<h2>项目类型</h2>
                <p>游戏设计开发</p>
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
                    <li><img src="./images/STONE.PNG"></li>
                    <li><img src="./images/EVENT.PNG"></li>
                    <li><img src="./images/BATTLE.PNG"></li>
                    <li><img src="./images/FACTOR.PNG"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、任务设计；</p>
                <p>2、编写事件，包含任务流程及战斗系统；</p>
                <p>3、测试以及修复测试所发现的BUG；</p>`
            },
            {
                name: "人脸情绪识别(FER)",
                text: "利用CNN实现人脸情绪识别，准确率约为66%",
                nb: [
                    "TensorFlow", "卷积神经网络", "数据可视化", "梯度加权类激活图（Grad-CAM）", "Python"
                ],
                url: "https://github.com/Epikoni/CS639/tree/gh-pages",
                img: "./images/FACE.jpg",
                content: `<h2>项目类型</h2>
                <p>计算机视觉+人工智能论文及演讲</p>
                <h2>开发周期</h2>
                <p>2021年8月26日 – 2021年12月21日，4人</p>
                <h2>开发工具</h2>
                <p>Visual Studio, GitHub</p>
                <h2>项目背景</h2>
                <p>面部表情是人类重要的交流工具，通过面部表情，人们可以识别他人的心理状态，如快乐、愤怒、悲伤等。面部情绪识别 (FER) 是通过测量各种身体参数的变化来实现的，例如测量心率、眼睛活动、脑电图等，或者通过分析面部图像来实现。 
                   而后者由于计算资源丰富且具有成本效益而受到欢迎。基于相机输入的 FER 研究可分为两组，常规方法和使用神经网络的方法。传统的 FER 方法基于手工设计的特征来识别面部情绪。 
                   典型的过程包括检测区域，提取特征，然后使用预训练的分类器来识别面部情绪。随着大数据集的可用性，它已成为计算机视觉的通用方法。在已发表的研究中，Kim 等人提出了一个由CNN和长短期记忆（LSTM）组成的混合模型，其性能最高，准确率为78.61%。</p>
                <h2>项目详情</h2>
                <p>1、方法：Convolution, Activation, Pooling, Batch Normalization, Dropout；</p>
                <p>2、数据库：The Facial Expression Recognition 2013 (FER-2013) database，包含28709 training样本和3589 validation样本；</p>
                <p>3、结果：</p>
                <p>&nbsp;&nbsp;3.1、不平衡数据：在 7 种情绪中，快乐情绪占比最高，约占总样本的 30%。厌恶情绪比较少见，仅占总样本的 3%；</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;使用 10 个 epoch 进行训练，并使用验证数据集评估其性能。训练好的 CNN 模型的整体准确率为 65%；</p>
                <p>&nbsp;&nbsp;3.2、平衡数据：</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;3.2.1、Random undersampling method：通过imblearn API function RandomUnderSampler实现；</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该模型需要约 40 个 epochs 才能汇流，最终准确率约为 40%，与使用原始图像的模型相比下降了 62.5%；</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;3.2.2、Random oversampling method：通过imblearn API function RandomOverSampler实现；</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该模型需要 5 个 epochs 才能汇流，最终准确率约为60%；</p>
                <p>4、使用增强的数据进行训练：随着每个 epoch 中的输入图像发生变化，60 个 epoch 的准确率接近 70%。</p>
                <h2>项目预览</h2>
                <ul>
                    <li><img src="./images/INTRO.PNG"></li>
                    <li><img src="./images/DATA1.PNG"></li>
                    <li><img src="./images/DATA2.PNG"></li>
                    <li><img src="./images/DATA3.PNG"></li>
                </ul>
                <h2>项目职责</h2>
                <p>1、对现代FER方法调研；</p>
                <p>2、利用开源方法实现数据可视化；</p>
                <p>3、数据训练；</p>`,
            },{
                name: "在开放世界中学习",
                text: "用Gee's learning Principles分析塞尔达：旷野之息",
                nb: [
                    "游戏设计", "教育意义", "游戏体验"
                ],
                url: "https://docs.google.com/document/d/1bDk6lm1CFCZk4OpGlQvwLiFKHj7SxS_Q/edit?usp=sharing&ouid=117446574999903310626&rtpof=true&sd=true",
                img: "./images/ZELDA.jpg",
                content: `<h2>项目类型</h2>
                <p>游戏设计论文</p>
                <h2>开发周期</h2>
                <p>2021年8月26日 – 2021年12月21日</p>
                <h2>论文大纲</h2>
                <p>在本文中，我使用《塞尔达传说：荒野之息》作为我的主题游戏。这是一款开放世界的动作冒险游戏，由Monolith Soft公司和任天堂公司共同开发。主人公林克在赫鲁尔大陆的地下废墟中醒来，追寻着不可思议的声音，开始了冒险。
                踏上了冒险之旅。我将使用Gee's learning Principles, 操纵和分布式知识及专业知识的循环来证明为什么塞尔达是一个好的游戏，以及这个游戏如何教玩家玩游戏。然后，我将通过参考 Play that can 
                Do Good 一文和布朗的书来支持我的论点。</p>
                <h2>主要观点</h2>
                <p>1、James Paul Gee：除了人物之外，好的游戏还为玩家提供了复杂、有效和容易操作的世界物体，这些物体成为执行玩家目标的工具; </p>
                <p>2、Adam Eichenbaum, Daphne Bavelier and C. Shawn Green：创造一个环境，鼓励用户投入大量的时间来学习，在一个任务上花费更多的时间意味着更多的学习，视频游戏鼓励玩家把时间放在任务上;</p>
                <p>3、Harry J. Brown: 冒险游戏邀请玩家居住在一个想象的世界里，并在玩游戏的过程中，"制定对这个世界的理解。;</p>
                <p>4、游戏重构: 增加更多的战斗技能，增加大型怪物的种类</p>`
            },{
                name: "持续更新...",
                img: "./images/MORE.png"
            }
        ],
        listLoadMore: "查看",
        loadMore: {
            text: "继续浏览",
            class: "method4"
        }
    },
    contact: {
        title: "联系我",
        list: [{
                name: "邮箱",
                context: "epikoni233@gmail.com"
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
