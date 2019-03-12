<template>
  <div class="controller center ">
    <div class="container ">
      <a
        id="save"
        class="save center fs-20"
        :href="imageUrl"
        download="dl.png"
        @click="save"
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
</template>

<script>
export default {
  name: "controller",
  props: ["cvs"],
  data() {
    return {
      imageUrl: "#"
    };
  },
  methods: {
    save() {
      this.$emit("saveImg");
      this.imageUrl = this.$refs.myCanvas.toDataUrl();
      console.log(this.cvs);
    },
    clear() {},
    undo() {},
    redo() {}
  },
  mounted() {}
};
</script>
<style lang="scss">
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
</style>