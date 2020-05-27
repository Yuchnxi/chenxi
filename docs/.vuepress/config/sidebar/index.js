//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '随笔 Essay',
            collapsable: true,
            children: [
                'essay/20190928',
                'essay/20191109',
                'essay/20191116',
                'essay/20191130',
                'essay/20200227',
                'essay/20200301'
            ]
        },
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'front-end/js-json',
                'front-end/viaStart',
                'front-end/vue-demo',
                'front-end/reco-info',
                'front-end/vuepress-plugin-boxx',
                'front-end/TCP&UDP',
                'front-end/guide'
            ]
        },
        {
            title: '服务端 Node',
            collapsable: true,
            children: [
                'node/node-commandline'
            ]
        },
        {
            title: 'GIT git',
            collapsable: true,
            children: [
                'git/git'
            ]
        }

    ]
}