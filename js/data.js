export default {
    index: {
        title: "Hello, I am ",
        me: [
            "Shirley Liu",
            "A Crazy Gamer",
            "Designer/Developer"
        ],
        bg: "./images/bg.jpg",
        subTitle: "Even if the road ahead looks desperate, you have to have the courage to drive a hard road for yourself",
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
            text: "Learn more",
            class: "method"
        }
    },
    about: {
        title: "About me",
        meme: {
            img: "./images/ME.PNG",
            content: "<span></span>I am <b>Shirley</b>，21 years old，a senior in University of Wisconsin-Madison，major in <b>Computer Science</b> and minor in <b>Game Design</b>；<br /><span></span>I have a <b>strong interest</b> in game design and development, I like to use the knowledge I have learned to design and develop some games, and I like to <b>express my ideas through games</b>.；<br /><span></span>I am a <b>teamworker</b> and willing to <b>keep learn</b> new stuffs."
        },
        ability: [{
                icon: "fa-gamepad",
                title: "Game Design",
                subTitle: "MDA Framework, Gee's Learning Principles...",
                color: "#ff4757",
                bfb: "80%"
            },
            {
                icon: "fa-desktop",
                title: "Game Development",
                subTitle: "RPG Maker, Bitsy, Twine, Unity...",
                color: "#ffa502",
                bfb: "80%"
            },
            {
                icon: "fa-photo",
                title: "Design",
                subTitle: "Photoshop，Premier, AfterEffects...",
                color: "#2ed573",
                bfb: "80%"
            },
            {
                icon: "fa-code",
                title: "Code",
                subTitle: "Java, C/C++, C#, Python...",
                color: "#1e90ff",
                bfb: "50%"
            }
            
        ],
        loadMore: {
            text: "Keep explore",
            class: "method3"
        }
    },
    project: {
        title: "My projects",
        list: [{
                name: "Before Lost",
                text: "top-down view，2-d，RPG，pixeled game",
                nb: [
                    "Original Story", "Time Travel", "Combat Design", "Missions", "Hand-draw","Javascript"
                ],
                url: "https://epikoni.itch.io/before-lost",
                img: "./images/icon.png",
                content: `<h2>Project type</h2>
                <p>Game design and development</p>
                <h2>Working Period</h2>
                <p>1/20/2022 – 5/12/2022，Group of 4</p>
                <h2>Development Tool</h2>
                <p>RPG Maker MV，GitHub，Javascript</p>
                <h2>Project Background</h2>
                <p>With the theme of environmental protection, design a game that takes into account the harm that current industrialization brings to trees and animals. The protagonist can use the ancestral machine to travel back in time and do his best to save the world before it is destroyed.</p>
                <h2>Gameplay</h2>
                <p>1、Story: In a wooden house in the forest, the protagonist wakes up from his bed and opens the door to find a fire outside, dead animals floating in the river and cracks gradually appearing on the ground. In a panic, he thinks of his grandfather telling him that there is a way to turn back the clock.
                      So he rushed home, found a time warp, and traveled back two hundred years. At this time, people were just starting to develop industry and cut down a lot of wood. Consumption had increased dramatically, and underground mineral deposits were being extensively mined and smelted, leading to deforestation,
                      climate warming and ozone depletion. Thinking of the impact all this would have, he resolved to do something to change the world.</p>
                <p>2、Core mechanism: follow the storyline across the map to complete the mission objectives;</p>
                <p>3、Dynamic: collect mission items, collect easter egg items (letters, noodles, etc.), battle system, skills, and equipment upgrades；</p>
                <p>4、Art style: bird's-eye view, pixel style, turn-based combat;</p>
                <h2>Project plan</h2>
                <p>1、Determine the RPG Maker MV as the engine；</p>
                <p>2、Dividing the story by maps, with each chapter of the story combined with quests as well as map drawing;</p>
                <p>3、Map drawing, partly with hand-drawn images for better map presentation;</p>
                <p>4、Add Events events, including NPCs, interactive items on the map;</p>
                <p>5、The engine's built-in functions to implement quest flow including NPC dialogues, etc., partly using Javascript;</p>
                <p>6、Program the turn-based combat system, add different weapons and skills and adjust the values;</p>
                <p>7、Add different visual and sound effects;</p>
                <p>8、Repeatedly testing each map and mission, modifying values and fixing bugs;</p>
                <h2>Project preview</h2>
                <ul>
                    <li><img src="./images/STONE.PNG"></li>
                    <li><img src="./images/EVENT.PNG"></li>
                    <li><img src="./images/BATTLE.PNG"></li>
                    <li><img src="./images/FACTOR.PNG"></li>
                </ul>
                <h2>Responsibility</h2>
                <p>1、Mission Design;</p>
                <p>2、Write events script, including mission flow and combat system;</p>
                <p>3、Testing and debugging.</p>`
            },
            {
                name: "Facial Emotion Recognition(Deep CNN)",
                text: "Face emotion recognition using CNN with an accuracy of about 66%",
                nb: [
                    "TensorFlow", "Convolutional Neural Networks", "Data Visualization", "Grad-CAM", "Python"
                ],
                url: "https://github.com/Epikoni/CS639/tree/gh-pages",
                img: "./images/FACE.PNG",
                content: `<h2>Project Type</h2>
                <p>Paper and presentation in Computer Vision and AI</p>
                <h2>Development Period</h2>
                <p>8/26/2021 – 12/21/2021，Group of 4</p>
                <h2>Development Tool</h2>
                <p>Visual Studio, GitHub</p>
                <h2>Project Motivation</h2>
                <p>Facial expressions are an important communication tool for human beings. Through facial expressions, people can recognize the mental state of others, such as happiness, anger, sadness, etc. Facial emotion recognition (FER) is achieved by measuring changes in various body parameters, such as measuring heart rate, eye activity, EEG, etc., or by analyzing facial images. 
                   The latter is popular due to its abundant computational resources and cost-effectiveness. FER studies based on camera inputs can be divided into two groups, conventional methods and methods using neural networks. Conventional FER methods are based on hand-designed features to recognize facial emotions. 
                   The typical process involves detecting regions, extracting features, and then using a pre-trained classifier to recognize facial emotions. With the availability of large datasets, it has become a general approach for computer vision. In the published study, Kim et al. proposed a hybrid model consisting of CNN and long short-term memory (LSTM) with the highest performance and accuracy of 78.61%</p>
                <h2>Project Details</h2>
                <p>1、Methods：Convolution, Activation, Pooling, Batch Normalization, Dropout;</p>
                <p>2、Database：The Facial Expression Recognition 2013 (FER-2013) database，inlcuding 28709 training samples and 3589 validation samples;</p>
                <p>3、Results：</p>
                <p>&nbsp;&nbsp;3.1、Unbalanced data：Of the seven emotions, happy emotions accounted for the highest proportion, about 30% of the total sample. Disgusting emotions were relatively rare, accounting for only 3% of the total sample;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;Training is performed using 10 epochs and performance is evaluated using a validation dataset. The overall accuracy of the trained CNN model is 65%;</p>
                <p>&nbsp;&nbsp;3.2、Balanced data：</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;3.2.1、Random undersampling method：Achieved by imblearn API function RandomUnderSampler;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The model requires about 40 epochs to converge, with an accuracy of about 40%, which is a 62.5% drop compared to the model using the original images;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;3.2.2、Random oversampling method：Achieved by imblearn API function RandomOverSampler;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The model requires 5 epochs to converge, with a final accuracy of about 60%;</p>
                <p>4、Training with augmented data: as the input image changes in each epoch, the accuracy is close to 70% for 60 epochs.</p>
                <h2>Project preview</h2>
                <ul>
                    <li><img src="./images/INTRO.PNG"></li>
                    <li><img src="./images/DATA1.PNG"></li>
                    <li><img src="./images/DATA2.PNG"></li>
                    <li><img src="./images/DATA3.PNG"></li>
                </ul>
                <h2>Responsibility</h2>
                <p>1、Research on modern FER methods;</p>
                <p>2、Data visualization using open source methods;</p>
                <p>3、Data Training.</p>`,
            }
        ],
        listLoadMore: "View",
        loadMore: {
            text: "Keep explore",
            class: "method4"
        }
    },
    contact: {
        title: "Contact ME",
        list: [{
                name: "Email",
                context: "epikoni233@gmail.com"
            },
            {
                name: "GitHub",
                context: "https://github.com/Epikoni"
            },
            {
                name: "Wechat",
                context: "h957239301"
            },
            {
                name: "QQ",
                context: "957239301"
            }
        ]
    }
}
