<template>
  <div class="painter">
    <div class="container">
      <div class="pen"><i class="material-icons">brush</i></div>
      <div class="size">SIZE:<p>10</p>px</div>
      <div class="color">
        COLOR:
        <span class="white border"></span>
        <span class="black"></span>
        <span class="light-green"></span>
        <span class="green"></span>
        <span class="dark-green"></span>
      </div>
    </div>
    <div class="close"></div>
  </div>
</template>

<script>
export default {
  name: "painter"
};
</script>
<style lang="scss">
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
      p {
        width: 74px;
        text-align: center;
        border-radius: 24px;
        background-color: #e8e8e8;
        margin: 0 5px;
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