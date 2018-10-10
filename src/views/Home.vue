<template>
  <div class="home">
    <van-address-edit
      :area-list="areaList"
      :search-result="searchResult"
      show-postal
      show-delete
      show-set-default
      show-search-result
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <van-goods-action>
      <van-goods-action-mini-btn 
        icon="chat" 
        text="客服" 
        @click="onClickMiniBtn" />
      <van-goods-action-mini-btn 
        icon="cart" 
        text="购物车" 
        @click="onClickMiniBtn" />
      <van-goods-action-big-btn 
        text="加入购物车" 
        @click="onClickBigBtn" />
      <van-goods-action-big-btn 
        text="立即购买" 
        primary 
        @click="onClickBigBtn" />
    </van-goods-action>
  </div>
</template>
<script>
import {
  AddressEdit,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Toast
} from "vant";
import areaJson from "../assets/area.js";
export default {
  components: {
    [AddressEdit.name]: AddressEdit,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
    [Toast.name]: Toast,
    areaJson
  },
  data() {
    return {
      areaList: {},
      searchResult: []
    };
  },
  mounted() {
    console.log(areaJson);
    this.areaList = areaJson;
    console.log(this.dateFormat(11111111111111, "Y年M月D日 H时I分S秒"));
    this.onLoad();
  },
  methods: {
    async onLoad() {
      var userLocation = await this.getUserLocation();
      console.log(userLocation);
    },
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onClickMiniBtn() {
      Toast("点击图标");
    },
    onClickBigBtn() {
      Toast("点击按钮");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>
<style lang="scss">
$color: #0f0;
.van-cell__title {
  color: $color;
}
</style>
