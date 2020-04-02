## 配置文件

build-user/config.js

## 多页面形式

src/view 里建立文件夹 里面包含 main.ts
public/view 里建立页面文件 

demo:
建立一个 index.html
```
publick/view/
    index/
        index.ejs
src/view/
    index/
        main.ts
        app.vue
```
## static

ejs页面上 使用 `./assets/`的形式可以调用的静态资源