# vue-storybook-jest
> ft.六角學院地下城挑戰 F7畫板

demo:https://upbeat-mccarthy-22471d.netlify.com/#/

## 工具
- Canvas

## 技巧
1. 畫圖
先知道基本 canvas 畫直線是 
```
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(300,150);
ctx.stroke();
```

再來使用 mousedown 取得目前所在 canvas 內座標
```
canvas.getBoundingClientRect();
```
使用 mousemove 取得的座標並畫線
```
this.ctx.lineTo(mousePos.x, mousePos.y);
//利用取回的值畫線
this.ctx.stroke();
//畫!
```
2. 儲存圖
利用 toDataURL() 讓 canvas 轉成 base64 再用 img tag 裡的 src 下載下來

3. 清除
利用 this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height) 重新設定寬高清除

4. redo & undo
當 mouseup 時儲存每個 toDataURL() 快照，再創建一個 Image 物件，把 URL 塞進 src 內，利用 this.ctx.drawImage(canvasPic, 0, 0) 方法畫快照圖
*記得要在圖片物件創建後才能畫圖，還有需要在 clearRect 一次才畫得出來喔!*

5. 畫筆
利用基本 stokeStyle & linewidth 完成

6. 收工

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
