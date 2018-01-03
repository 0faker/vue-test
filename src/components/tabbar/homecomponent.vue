<template>
  <div>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbo"  :key="item.img">
             <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbo: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
        if (result.body.status === 0) {
          this.lunbo = result.body.message;
        } else {
          Toast("false");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item:nth-of-type(1) {
    background-color: rgb(56, 34, 119);
  }
  .mint-swipe-item:nth-of-type(2) {
    background-color: rgb(100, 175, 138);
  }
  .mint-swipe-item:nth-of-type(3) {
    background-color: rgb(235, 86, 28);
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
