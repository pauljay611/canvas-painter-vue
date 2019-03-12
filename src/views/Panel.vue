<template>
  <div class="wrapper">
    <div class="controller center ">
      <div class="container ">
        <a
          id="save"
          class="save center fs-20"
          :href="imageUrl"
          download="dl.png"
          @click="saveImg"
        >
          <i class="material-icons">save</i>SAVE</a>
        <div
          class="clear center fs-20"
          @click="clear"
        ><i class="material-icons">crop_free</i>CLEAR ALL</div>
        <div
          class="undo center fs-20"
          @click="undo"
        ><i class="material-icons">undo</i>UNDO</div>
        <div
          class="redo center fs-20"
          @click="redo"
        ><i class="material-icons">redo</i>REDO</div>
      </div>
      <div class="close"><i class="material-icons">keyboard_arrow_up</i></div>
    </div>
    <div class="canvas">
      <canvas
        id="myCanvas"
        ref="myCanvas"
        width="1280px"
        height="720px"
        @mousedown.prevent="draw($event)"
        @mousemove.prevent="mouseMove($event,false)"
        @mouseup.prevent="mouseUp"
      ></canvas>
    </div>
    <div class="painter">
      <div class="container">
        <div class="pen"><i class="material-icons">brush</i></div>
        <div class="size">SIZE:<input
            type="text"
            v-model="size"
          >px</div>
        <div class="color">
          COLOR:
          <span
            class="white border"
            @click="changeColor('#ffffff')"
          ><i
              v-if="color=='#ffffff'"
              class="material-icons"
            >done</i></span>
          <span
            class="black"
            @click="changeColor('#000000')"
          ><i
              v-if="color=='#000000'"
              class="material-icons"
            >done</i></span>
          <span
            class="light-green"
            @click="changeColor('#9bffcd')"
          ><i
              v-if="color=='#9bffcd'"
              class="material-icons"
            >done</i></span>
          <span
            class="green"
            @click="changeColor('#00cc99')"
          ><i
              v-if="color=='#00cc99'"
              class="material-icons"
            >done</i></span>
          <span
            class="dark-green"
            @click="changeColor('#01936f')"
          ><i
              v-if="color=='#01936f'"
              class="material-icons"
            >done</i></span>
        </div>
      </div>
      <div class="close"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Controller from "@/components/Controller.vue";
import Painter from "@/components/Painter.vue";
export default {
  name: "panel",
  components: {
    Controller,
    Painter
  },
  data() {
    return {
      ctx: null,
      move: false,
      cStep: 0,
      snapshot: [],
      imageUrl: null,
      cvs: null,
      color: "#000000",
      size: 10
    };
  },
  methods: {
    changeColor(color) {
      this.ctx.strokeStyle = color;
      this.color = color;
    },
    saveImg() {
      this.imageUrl = this.$refs.myCanvas.toDataURL();
    },
    clear() {
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
      this.cStep = 0;
    },
    undo() {
      if (this.cStep >= 2) {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        this.cStep--;
        let canvasPic = new Image();
        canvasPic.src = this.snapshot[this.cStep - 1];
        console.log(canvasPic);
        canvasPic.onload = () => {
          this.ctx.drawImage(canvasPic, 0, 0);
        };
      }
    },
    redo() {
      if (this.cStep < this.snapshot.length) {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        this.cStep++;
        let canvasPic = new Image();
        canvasPic.src = this.snapshot[this.cStep - 1];
        console.log(canvasPic);
        canvasPic.onload = () => {
          this.ctx.drawImage(canvasPic, 0, 0);
        };
      }
    },
    mouseUp() {
      this.move = false;
      this.snapshot.push(this.cvs.toDataURL());
      this.cStep++;
    },
    getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      //getBoundingClientRect 取得物件完整座標資訊，包含寬高等
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    },
    mouseMove(evt) {
      if (this.move == true) {
        var mousePos = this.getMousePos(this.$refs.myCanvas, evt);
        //透過getMousePos function 去取得滑鼠座標
        //mousePos 是一個物件，包含x和y的值
        this.ctx.lineTo(mousePos.x, mousePos.y);
        //利用取回的值畫線
        this.ctx.stroke();
        //畫!
      }
    },
    draw(event) {
      var mousePos = this.getMousePos(this.$refs.myCanvas, event);
      //從按下去就會執行第一次的座標取得
      this.ctx.beginPath();
      //建立path物件
      this.ctx.moveTo(mousePos.x, mousePos.y);
      //每次的點用moveTo去區別開，如果用lineTo會連在一起
      this.move = true;
    }
  },
  watch: {
    size() {
      this.ctx.lineWidth = this.size;
      console.log(this.ctx.lineWidth);
    }
  },
  mounted() {
    this.ctx = this.$refs.myCanvas.getContext("2d");
    this.cvs = this.$refs.myCanvas;
  }
};
</script>
<style lang="scss">
.wrapper {
  position: relative;
  width: 1280px;
  height: 800px;
  background-color: #e8e8e8;
  margin-top: 20px;
  .canvas {
    height: 720px;
  }
}
.controller {
  position: relative;
  width: 100%;
  height: 80px;
  background-color: #ffffff;
  padding: 5px;
  border: 2px solid #e8e8e8;
  .container {
    width: 1280px - 667px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .save,
    .clear,
    .undo,
    .redo {
      cursor: pointer;
    }
    .material-icons {
      font-size: 36px;
      margin-right: 14px;
    }
  }
  .close {
    position: absolute;
    width: 56px;
    height: 56px;
    margin-top: 35px;
    border-radius: 50%;
    background-color: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
}
.painter {
  position: absolute;
  left: 25%;
  bottom: 5%;
  width: 730px;
  height: 80px;
  padding: 19px 32px;
  background-color: #ffffff;
  box-shadow: 0px 4px 16px #000000;
  border-radius: 40px;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    .pen {
      flex: 1;
    }
    .size {
      display: flex;
      height: 48px;
      flex: 3;
      font-family: "Open Sans";
      font-size: 20px;
      font-weight: bold;
      color: #000000;
      line-height: 48px;
      input {
        width: 74px;
        text-align: center;
        border-radius: 24px;
        background-color: #e8e8e8;
        margin: 0 5px;
        border: none;
        font-size: 20px;
        font-family: "Open Sans";
        font-weight: bold;
      }
    }
    .color {
      flex: 6;
      font-family: "Open Sans";
      font-size: 20px;
      font-weight: bold;
      color: #000000;
      display: flex;
      justify-content: space-between;
      line-height: 48px;
      span {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    }
  }
  .material-icons {
    font-size: 43px;
  }
  .white {
    background-color: #ffffff;
  }
  .black {
    background-color: #000000;
    i {
      color: #ffffff;
    }
  }
  .light-green {
    background-color: #9bffcd;
  }
  .green {
    background-color: #00cc99;
  }
  .dark-green {
    background-color: #01936f;
  }
}
</style>

