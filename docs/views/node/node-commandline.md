--- 
title: 跟着老司机玩转Node命令行
date: 2020-5-27
tags:
- Node
categories: 
- '服务端'
isShowComments: false
---

<Boxx/>

[[toc]]

### 跟着老司机玩转Node命令行

> 当我们使用 Node.js 原生开发命令行程序时或许会有一定的门槛，但通过依赖一些开源模块却能够帮助我们简化命令行开发，从而达到事半功倍的效果。本文主要通过一些实例来演示 commander.js、inquirer.js 的一些基本玩法。下面老司机将带着我，我带着大家一起来玩转 Node 命令行吧！

### 温馨提示
- 本文部分代码参考自实验室前端流程工具 [athena](https://github.com/o2team/athena)
- 本文需要一点 Node 基础
- 本文涉及到一些 es6 语法，并且请确保 Node 版本在 4.0及以上
- 不属于本文的知识点一秒带过哈

![前方预警](/img/node-commandline/yuji.jpg)

### 基础准备

1. 新建一个项目，打开 cmd 命令，执行 npm init， 创建 package.json
2. 在根目录下创建一个不带后缀的系统文件，作为主入口文件
3. 安装本文所涉及到的模块commander、inquirer、chalk，在根目录下执行 npm install commander inquirer chalk –save-dev,这时候会看到根目录下多了一个node_modules目录，里面有刚刚安装的几个模块，package.json里面devDependencies依赖了这几个模块，如下图

![根目录](/img/node-commandline/root.jpg)

```javascript
{
  "name": "app",
  "version": "1.0.0",
  "description": "玩转命令行开发",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "ykg",
  "license": "ISC",
  "devDependencies": {
    "chalk": "^1.1.3",
    "commander": "^2.9.0",
    "inquirer": "^1.1.2"
  }
}
```

### 主体内容
我们先来认识一下 commander 吧

### commander 简介
呃~~官方时刻到了哈：commander灵感来自 Ruby，它提供了用户命令行输入和参数解析的强大功能，可以帮助我们简化命令行开发。
根据其官方的描述，具有以下特性:

- 参数解析
- 强制多态
- 可变参数
- Git 风格的子命令
- 自动化帮助信息
- 自定义帮助等

![](/img/node-commandline/nbngfd.jpg)

### 一个简单的实例

下面我们通过一个简单的实例来了解一下它的基本语法吧

```javascript
const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')

program
    .command('module')
    .alias('m')
    .description('创建新的模块')
    .option('-a, --name [moduleName]', '模块名称')
    .action(option => {
        console.log('Hello World')
        //为什么是Hello World 给你个眼神，自己去体会...
    })
    
program.parse(process.argv)
```
执行一下看看效果吧！$ node app.js app (请各位看官自行体会这种执行方式哈)
//输出结果 Hello World

### 全局方式运行

我们可以通过一些配置，然后以 模块名 + command的方式运行，实现这种方式分三步走：
![真的吗](/img/node-commandline/zdm.jpg)

- 配置package.json的bin字段。bin字段有啥用呢？它可以用来存放一个可执行的文件，如下配置所示
``` javascript
"bin": {
    "app": "app"
 }
 ```
 - 执行npm link。它将会把app这个字段复制到npm的全局模块安装文件夹node_modules内，并创建符号链接（symbolic link，软链接），也就是将 app 的路径加入环境变量 PATH
 - 在主入口文件的最上方添加代码 #! /usr/bin/env node, 表明这是一个可执行的应用，如下所示
 ``` javascript
 #! /usr/bin/env node 

const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')

program
    .command('module')
    .alias('m')
    .description('创建新的模块')
    .option('-a, --name [moduleName]', '模块名称')
    .action(option => {
        console.log('Hello World')
    })
    
program.parse(process.argv)
```
做好了以上三步后，然后运行$ app module

//输出结果 Hello World

![鬼知道](/img/node-commandline/guizd.jpg)

### commander API

我们逐个来看看各个属性的功能，一看秒懂哦

- command – 定义命令行指令，后面可跟上一个name，用空格隔开，如 .command( ‘app [name] ‘)
- alias – 定义一个更短的命令行指令 ，如执行命令$ app m 与之是等价的
- description – 描述，它会在help里面展示
- option – 定义参数。它接受四个参数，在第一个参数中，它可输入短名字 -a和长名字–app ,使用 | 或者,分隔，在命令行里使用时，这两个是等价的，区别是后者可以在程序里通过回调获取到；第二个为描述, 会在 help 信息里展示出来；第三个参数为回调函数，他接收的参数为一个string，有时候我们需要一个命令行创建多个模块，就需要一个回调来处理；第四个参数为默认值
- action – 注册一个callback函数,这里需注意目前回调不支持let声明变量
- parse – 解析命令行

![我还是不懂](/img/node-commandline/whsbd.jpg)

### 生成帮助信息

#### 自动生成

执行 $ app m –help

![模块名称](/img/node-commandline/mkmc.jpg)

它会自动将description、option的信息显示在help中

#### 自定义生成

我们也可以通过自定义的方式生成帮助信息

```javascript
const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')

program
    .command('module [moduleName]')
    .alias('m')
    .description('创建新的项目')
    .option('-a, --name [moduleName]', '模块名称')
    .action(option => {
        console.log('Hello World')
    })
    //自定义帮助信息
    .on('--help', function() {
        console.log('  Examples:')
        console.log('')
        console.log('$ app module moduleName')
        console.log('$ app m moduleName')
    })
    
program.parse(process.argv)
```
执行$ app m –help

![](/img/node-commandline/mkmc2.jpg)

#### inquirer

在开发的过程中，我们需要频繁的跟命令行进行交互，借助inquirer这个模块就能轻松实现，它提供了用户界面和查询会话流程。它的语法是这样的（直接从官方拷贝~~）

![](/img/node-commandline/kxbr.jpg)

```javascript
var inquirer = require('inquirer')
inquirer.prompt([/* Pass your questions in here */]).then(function (answers) {
    // Use user feedback for... whatever!! 
})
```

需注意在旧的语法中，采用的是传统的function回调

```javascript
var inquirer = require('inquirer')
inquirer.prompt([/* Pass your questions in here */], function (answers) {
    // Use user feedback for... whatever!! 
})
```

#### inquirer功能简介
- input–输入
- validate–验证
- list–列表选项
- confirm–提示
- checkbox–复选框等等

![](/img/node-commandline/nbngfd.jpg)

这个模块相当简单，看个栗子就全明白了

```javascript
#! /usr/bin/env node 

const program = require('commander')
const inquirer = require('inquirer')
const _ = require('lodash')
const chalk = require('chalk')

program
    .command('module')
    .alias('m')
    .description('创建新的模块')
    .option('--name [moduleName]')
    .option('--sass', '启用sass')
    .option('--less', '启用less')
    .action(option => {
        var config = _.assign({
            moduleName: null,
            description: '',
            sass: false,
            less: false
        }, option)
        var promps = []

        if(config.moduleName !== 'string') {
              promps.push({
                type: 'input',
                name: 'moduleName',
                message: '请输入模块名称',
                validate: function (input){
                    if(!input) {
                        return '不能为空'
                    }
                    return true
                }
              })
        } 

        if(config.description !== 'string') {
            promps.push({
                type: 'input',
                name: 'moduleDescription',
                message: '请输入模块描述'
            })
        }

        if(config.sass === false && config.less === false) {
          promps.push({
            type: 'list',
            name: 'cssPretreatment',
            message: '想用什么css预处理器呢',
            choices: [
              {
                name: 'Sass/Compass',
                value: 'sass'
              },
              {
                name: 'Less',
                value: 'less'
              }
            ]
          })
        }

        inquirer.prompt(promps).then(function (answers) {
            console.log(answers)
        })
    })
    .on('--help', function() {
        console.log('  Examples:')
        console.log('')
        console.log('$ app module moduleName')
        console.log('$ app m moduleName')
    }) 

program.parse(process.argv)
```
执行命令 $ app m

![](/img/node-commandline/mkmc3.jpg)

以上为了代码组织方便使用了一个promps数组来接收参数以及借助了lodash模块的assign方法用来合并对象，lodash不属于本章的知识点哈，这里给大家提供一个中文API文档仅供大家学习参考

#### chalk

最后我们引入chalk这个美化命令行的模块，它具有轻量级、高性能、学习成本低等特点。继续在以上栗子中引入chalk进行输出

```javascript
#! /usr/bin/env node 

const program = require('commander')
const inquirer = require('inquirer')
const _ = require('lodash')
const chalk = require('chalk')

program
    .command('module')
    .alias('m')
    .description('创建新的模块')
    .option('--name [moduleName]')
    .option('--sass', '启用sass')
    .option('--less', '启用less')
    .action(option => {
        var config = _.assign({
            moduleName: null,
            description: '',
            sass: false,
            less: false
        }, option)
        var promps = []
        
        console.log('')
        console.log(chalk.red('开启前端工程化之路'))     
        console.log('')
        
        if(config.moduleName !== 'string') {
              promps.push({
                type: 'input',
                name: 'moduleName',
                message: '请输入模块名称',
                validate: function (input){
                    if(!input) {
                        return '不能为空'
                    }
                    return true
                }
              })
        } 

        if(config.description !== 'string') {
            promps.push({
                type: 'input',
                name: 'moduleDescription',
                message: '请输入模块描述'
            })
        }

        if(config.sass === false && config.less ===false) {
          promps.push({
            type: 'list',
            name: 'cssPretreatment',
            message: '想用什么css预处理器呢',
            choices: [
              {
                name: 'Sass/Compass',
                value: 'sass'
              },
              {
                name: 'Less',
                value: 'less'
              }
            ]
          })
        }

        inquirer.prompt(promps).then(function (answers) {
            console.log(chalk.green('收工咯'))
            console.log(chalk.blue('收工咯'))
            console.log(chalk.blue.bgRed('收工咯')) //支持设置背景
            console.log(chalk.blue(answers))
        })
    }) 
    .on('--help', function() {
        console.log('  Examples:')
        console.log('')
        console.log('$ app module moduleName')
        console.log('$ app m moduleName')
    })

program.parse(process.argv)
```
执行命令 $ app m

![](/img/node-commandline/mkmc4.jpg)

正如你所看到的输出结果，本篇文章收工咯，是不是so easy！

