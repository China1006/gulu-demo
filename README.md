# 轱辘	一个vue的造轮子

[![Build Status](https://travis-ci.org/China1006/gulu-demo.svg?branch=master)](https://travis-ci.org/China1006/gulu-demo)
## 介绍
这是我在学习 Vue 过程中做的一个UI框架，希望对你有用
## 开始使用
1. 添加css样式

    使用本框架前，请在css中开启border-box
    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE 8 及以上浏览器都支持此样式。
    你还需要设置默认颜色等变量（后续会改成scss变量）
    ```
    :root {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
        }
    ```
    IE 15 及以上浏览器都支持此样式。
2. 安装gulu-新
   ```
   npm i --save gulu-xin
   yarn add gulu-xin
   ```
3. 引入gulu
   ```
   import {Button,ButtonGroup,Icon} from 'gulu-xin'
   import 'gulu-xin/dist/index.css'
   export default {
        name: 'app',
        components:{
            'g-button': Button,
            'g-icon': Icon
        }
   }
   ```
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
