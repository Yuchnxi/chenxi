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

![前方预警](/img/node-commandline/前方预警.png)

### 基础准备

1. 新建一个项目，打开 cmd 命令，执行 npm init， 创建 package.json
2. 在根目录下创建一个不带后缀的系统文件，作为主入口文件
3. 安装本文所涉及到的模块commander、inquirer、chalk，在根目录下执行 npm install commander inquirer chalk –save-dev,这时候会看到根目录下多了一个node_modules目录，里面有刚刚安装的几个模块，package.json里面devDependencies依赖了这几个模块，如下图

![根目录](/znote/img/node-commandline/根目录.jpg)

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

![](/znote/img/node-commandline/能不能官方点.jpg)

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


