/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a56cb4fb85969affc7b8c5b302f87d61"
  },
  {
    "url": "about/index.html",
    "revision": "a7b93ee16591947269af41dc3a8f26bb"
  },
  {
    "url": "assets/css/0.styles.ec7a9820.css",
    "revision": "caeb8eeb1dfe3a6e044c617f1cffa4c5"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1bb465dc.js",
    "revision": "ac8137eb888a822c1c9715593a000690"
  },
  {
    "url": "assets/js/10.fd835970.js",
    "revision": "2d41438f1f15e5c622fcd8cdf25fc79e"
  },
  {
    "url": "assets/js/11.ae5b59f9.js",
    "revision": "bb89535caefaa182094f347ea3a27176"
  },
  {
    "url": "assets/js/12.b695e59d.js",
    "revision": "ac1e528f5b4d17962b94e7ed14b4bd9a"
  },
  {
    "url": "assets/js/13.9131f23e.js",
    "revision": "19fb0701bf6d518ffbbfa1fb564e77f6"
  },
  {
    "url": "assets/js/14.74a3c2c8.js",
    "revision": "1b60aa15d55e0f24542fe98b202f34e0"
  },
  {
    "url": "assets/js/15.e815187e.js",
    "revision": "c89576405d4399927c2c7b543488efe0"
  },
  {
    "url": "assets/js/16.3ce8f7ce.js",
    "revision": "5a239745cb604bae54cb54509b951f21"
  },
  {
    "url": "assets/js/17.ad1ff88f.js",
    "revision": "bfc99e3a743ae267bac692acf9ad9f42"
  },
  {
    "url": "assets/js/18.229ad5ac.js",
    "revision": "15dd6f0e4bbfbc1e8422dece4169041d"
  },
  {
    "url": "assets/js/19.0d40ae36.js",
    "revision": "4a3af2304da00b6cffd585e2a7662303"
  },
  {
    "url": "assets/js/2.6d6a6032.js",
    "revision": "68ba65c254c4189118960b1cd8305abc"
  },
  {
    "url": "assets/js/20.ab3c9dc6.js",
    "revision": "45808bb976f8cff65ea7f7407694597e"
  },
  {
    "url": "assets/js/21.ae5723c1.js",
    "revision": "2b1e19724ce2be7e4a629c015620b6a0"
  },
  {
    "url": "assets/js/22.adc88627.js",
    "revision": "bcfcaf06b0b00495ce1185d6fc0553d0"
  },
  {
    "url": "assets/js/23.b1fe19b5.js",
    "revision": "50dd14d7227f1e3a48a0c17fa1fc3b77"
  },
  {
    "url": "assets/js/24.09b478f5.js",
    "revision": "f0b8b9ec6cd99b651cacf4d784ffbaff"
  },
  {
    "url": "assets/js/25.86781cbc.js",
    "revision": "8189eebd58186ed413ca3c5c24aa1531"
  },
  {
    "url": "assets/js/26.26975d1f.js",
    "revision": "ac6bd9feaaf12d963277b74cae35cd3a"
  },
  {
    "url": "assets/js/27.b6b5e1e4.js",
    "revision": "fc47b4a352e91a821deec34ac484359e"
  },
  {
    "url": "assets/js/28.da4f977f.js",
    "revision": "a9866c60d2591c6b4a1d1ca1d5f7f16f"
  },
  {
    "url": "assets/js/29.f258acc2.js",
    "revision": "a49b4215fee9ef8b6b331beb5e231e75"
  },
  {
    "url": "assets/js/30.feb2b9a8.js",
    "revision": "75a3ce0858e33e542d255225159fb73c"
  },
  {
    "url": "assets/js/31.bbff8b98.js",
    "revision": "e188741d12b8dce34f65710e95696458"
  },
  {
    "url": "assets/js/32.3b654df7.js",
    "revision": "74263335a51345d7473b86ae34e083d4"
  },
  {
    "url": "assets/js/33.61d7acbf.js",
    "revision": "ebe3aeadf8dff6bf7d1db67cfc722524"
  },
  {
    "url": "assets/js/34.05fab7f4.js",
    "revision": "0fcab0f9094bba05666be7541cd3b4ad"
  },
  {
    "url": "assets/js/35.7a6bc1d0.js",
    "revision": "a73b7b648cd66e6755d4bde099636731"
  },
  {
    "url": "assets/js/36.cd4aab43.js",
    "revision": "63cfc4c0f00de6ea3cbbb66fab24e21e"
  },
  {
    "url": "assets/js/37.99b94e37.js",
    "revision": "0bfc243c5a04594a66dd5bd45196e3d9"
  },
  {
    "url": "assets/js/38.b8f74441.js",
    "revision": "18d63d6b8889b4dd37e1fa497f1ec2da"
  },
  {
    "url": "assets/js/39.f24dbebd.js",
    "revision": "9bda72a5ec66126fbd71abfe457afa8e"
  },
  {
    "url": "assets/js/40.c717fdb4.js",
    "revision": "e06fa3f0aa5d26b5b130978c69c80cbb"
  },
  {
    "url": "assets/js/5.5400c696.js",
    "revision": "2539b04edf7cfb1782dc797fb3e0273b"
  },
  {
    "url": "assets/js/6.476af78d.js",
    "revision": "dc471d9dd1e28e74bccf5845f4fcfa85"
  },
  {
    "url": "assets/js/7.31426a4c.js",
    "revision": "704176d40e61a30fc48db2da5a21f642"
  },
  {
    "url": "assets/js/8.7d8776a5.js",
    "revision": "52d0635082867cc5f717c98e63252988"
  },
  {
    "url": "assets/js/9.b31f276d.js",
    "revision": "037c47021b398376d5b4b59f21995f05"
  },
  {
    "url": "assets/js/app.ff8b176a.js",
    "revision": "406168b8ec340c68e7288999ae3a4d6f"
  },
  {
    "url": "assets/js/vendors~flowchart.87ffc682.js",
    "revision": "cd0c654a4591a16a6f0f97221818a942"
  },
  {
    "url": "categories/Git/index.html",
    "revision": "821cf8cbd46611602903f17f23f1cf58"
  },
  {
    "url": "categories/index.html",
    "revision": "db1cc2bb5802bde948fbe5ddd381c129"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9f5b584c07e944371479a573f24940b1"
  },
  {
    "url": "categories/服务端/index.html",
    "revision": "9aa68958e8412430d951e7055628a618"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "f8648f1a10dc9b2bf108ba6a34513904"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "img/backEnd/jwt.png",
    "revision": "08f10cff7fa522a07bdb68b8615c23d2"
  },
  {
    "url": "img/essay/lmNRgg.png",
    "revision": "fd3cc2df1c32d13e911fc6349b4dc164"
  },
  {
    "url": "img/essay/lmUIQe.png",
    "revision": "b4204c68b6174c07220733dcaf165c3b"
  },
  {
    "url": "img/essay/lmUjW8.png",
    "revision": "1b4e086bec1e1c053c726cd7ba14b480"
  },
  {
    "url": "img/essay/lmUkxe.png",
    "revision": "ee27e01c1867214c85ea23a998707e7c"
  },
  {
    "url": "img/essay/lmUQG8.png",
    "revision": "4551e4806b560715c4910501cd4c756e"
  },
  {
    "url": "img/essay/NiceBlogExamples.png",
    "revision": "4ae74d1a112937624ddcb289604d9d2b"
  },
  {
    "url": "img/essay/ToDo.png",
    "revision": "6aa4b2d90ea09c3cbb13dbc24b5d3947"
  },
  {
    "url": "img/node-commandline/guizd.jpg",
    "revision": "49740875590c51303744e57707ce8926"
  },
  {
    "url": "img/node-commandline/kyxbr.jpg",
    "revision": "407f336e25208aebe5ace8e195bc44d9"
  },
  {
    "url": "img/node-commandline/mkmc.jpg",
    "revision": "48935ea644ce1af889acc496ea47ac57"
  },
  {
    "url": "img/node-commandline/mkmc2.jpg",
    "revision": "443aa1917f094827e081090fc7424784"
  },
  {
    "url": "img/node-commandline/mkmc3.jpg",
    "revision": "1862caecdd7c4390a6ee08a62d986734"
  },
  {
    "url": "img/node-commandline/mkmc4.jpg",
    "revision": "71359a8afa9e73128a8d8268087c3cde"
  },
  {
    "url": "img/node-commandline/nbngfd.jpg",
    "revision": "d8da1dca0b215ed520aea94f676d80ae"
  },
  {
    "url": "img/node-commandline/root.jpg",
    "revision": "16c37d607ad6b1322a7aae932ecd6ab7"
  },
  {
    "url": "img/node-commandline/whsbd.jpg",
    "revision": "2e548d9d530d7ca728491e4228aa36a3"
  },
  {
    "url": "img/node-commandline/yuji.jpg",
    "revision": "bba6d5890326b96898d45157faff7a85"
  },
  {
    "url": "img/node-commandline/zdm.jpg",
    "revision": "03cb35edb99a5f0de9794807b2a3ac5a"
  },
  {
    "url": "img/other/comment.png",
    "revision": "6878f2fce5e82c12f91eef87bde8bd2c"
  },
  {
    "url": "img/other/git_001.png",
    "revision": "dad7a6694ad6026308d580ada34703f5"
  },
  {
    "url": "img/other/http001.jpg",
    "revision": "856031f897fce74ca2103cd443e81fae"
  },
  {
    "url": "img/rabbitmq/mq001.png",
    "revision": "06c224d930a517e0c68f6db2032e4a07"
  },
  {
    "url": "img/rabbitmq/mq002.png",
    "revision": "4dee5cf620627c17c267d1a033d7ca86"
  },
  {
    "url": "img/rabbitmq/mq003.png",
    "revision": "ffb23d11d23ddbd85c04820b3d016cc6"
  },
  {
    "url": "img/rabbitmq/rabbitmq.png",
    "revision": "f8ed6faa42fcdba67c8ed7b2c59ac495"
  },
  {
    "url": "img/rabbitmq/topic.png",
    "revision": "76d56b40d2a16592fef156f73f228d20"
  },
  {
    "url": "img/rabbitmq/队列模型.png",
    "revision": "805d0059bd3df57f88b1fb5e0631a654"
  },
  {
    "url": "img/redis/redis02.png",
    "revision": "c48e246e53e5d501cd0fcbdf87258d33"
  },
  {
    "url": "img/redis/缓存更新.png",
    "revision": "29bb26641ac9ff576cffab4de9b0a4f7"
  },
  {
    "url": "img/redis/缓存查询.png",
    "revision": "2fc82232bd83608e50aa29ecba90b733"
  },
  {
    "url": "img/swagger2/swagger2.png",
    "revision": "0ac3840245a81620a4365409ce608e81"
  },
  {
    "url": "img/viaStart/thumb.png",
    "revision": "0d4c9d70e021216c051bf1ce37a37da3"
  },
  {
    "url": "img/vuedemo/1.png",
    "revision": "ebc5b5e16665f1d3494b9ca7afce270f"
  },
  {
    "url": "img/vuedemo/2.png",
    "revision": "8c7a40b960334a58a097b1c2292a8fa4"
  },
  {
    "url": "img/vuedemo/3.png",
    "revision": "acb3adcb4752f27bc621c244252a63ae"
  },
  {
    "url": "img/vuedemo/4.png",
    "revision": "e0600647cb12f4f3a100383f91baa7c2"
  },
  {
    "url": "img/vuedemo/5.png",
    "revision": "c0b6c66dd9e8df10c0dda568268ff314"
  },
  {
    "url": "img/vuedemo/6.png",
    "revision": "2ccae59d8c1134edc7fdaf0a6e41e78d"
  },
  {
    "url": "index.html",
    "revision": "7d53666f08564ae7fc6d7eea2b284991"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/project.html",
    "revision": "6f93cb70bcef75cfc67d2b659c6be998"
  },
  {
    "url": "tag/index.html",
    "revision": "e1553f7297ab187c12ee2ba0767b9db0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a4346ce6e15c5af09e3adedde8a8f973"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "31daaaffb27b46a54e91549969995c52"
  },
  {
    "url": "tags/json/index.html",
    "revision": "22f0ec4f1aa103cdf66e66c6e23c7f03"
  },
  {
    "url": "tags/Node/index.html",
    "revision": "df2aa21f6d93da60fd90ab43459edd6b"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "dc414b25c9f8ffe7c7144fa6ba87b2cd"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "7372a159ff09395b61bd38888ccbd89e"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "5d8bc907ed001490052ccf8bf01862a0"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "9399ece8f1c27a0f694494c90527ea5f"
  },
  {
    "url": "tags/网络协议/index.html",
    "revision": "d9076fb552d945a223a07f65835160fe"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "ea4ee46c2da1b3e5a03b00624d2f5a77"
  },
  {
    "url": "timeline/index.html",
    "revision": "490b07be84cda69b3473fdf7a247fbfd"
  },
  {
    "url": "view/index.html",
    "revision": "471c6fd66ac302098c025d89a0777b81"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/love.html",
    "revision": "68de52e48f4306179d313c0604d4ef57"
  },
  {
    "url": "view/rddek.gif",
    "revision": "638c77362a2c110318d58cc3935f3177"
  },
  {
    "url": "view/比心.png",
    "revision": "670fc28313d53244812aea340dccdcf3"
  },
  {
    "url": "view/比心1.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "045dfbe579a4648596f02df49b1e57ee"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "75d221e24b14b7fd8fe258528d214b4a"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "6c70d0f870ee325be7fd06c5b73b3017"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "316b158ec42be6b28481d0b579febb9a"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "997572cb64c628b89ec403f3a78dae01"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "82f8aefecf02ba02573104d81e94140c"
  },
  {
    "url": "views/front-end/guide.html",
    "revision": "6687955c8c86c3c55f9bffc19673372b"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "a3af5aa5c23fd5f131f6f8959536c72d"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "cf1b4965bb85a4f7be73c9072889dd0f"
  },
  {
    "url": "views/front-end/TCP&UDP.html",
    "revision": "37ff370f65d3e9aae46eb1cc147e4800"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "abcb5d0ad115ea14a2eb64a04a5a55cc"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "9c5fbf9b9d11a8a385fea28deb7f9d01"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "a6091b0183aa54ceb14ec067b4758c9a"
  },
  {
    "url": "views/git/git.html",
    "revision": "a0d2a088d11c90491b6573646e2913a2"
  },
  {
    "url": "views/index.html",
    "revision": "db63025ad4285fa79a4d50b4ab8d1d98"
  },
  {
    "url": "views/node/node-commandline.html",
    "revision": "8f74956bbeeff36ec2375e00bb2c7050"
  },
  {
    "url": "views/todo/finalChapter_19.html",
    "revision": "174a5ce9b08b96472f497ae09db69fbd"
  },
  {
    "url": "views/todo/test.html",
    "revision": "f93a383258f55a5b9f968ec84d6bc787"
  },
  {
    "url": "vuepress/fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "115e1575b73e998feb635c8af6271ca1"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/topic.jpg",
    "revision": "cd7eaefc7504b7b555da447808360363"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  },
  {
    "url": "vuepress/zpj80231-logo.png",
    "revision": "a2aa1799583b0104477b398b98b757c3"
  },
  {
    "url": "vuepress/zpj80231-logo2.png",
    "revision": "97de419e4928299047a1de1b2b249f63"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
