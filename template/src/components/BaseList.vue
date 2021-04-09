<template>
  <van-list v-model="isLoading" :finished="isFinished" @load="load">
    <div class="baselist">
      <template v-if="listData.length > 0">
        <div
          v-for="(item, index) in listData"
          :key="'baselist-' + index"
          class="baselist-item"
          @click="goDetail(item)"
        >
          <div class="baselist-desc">
            <span class="ft-1">{{ item.Desc }}</span>
            <span class="ft-2">{{ item.Time }}</span>
          </div>

          <div :class="['baselist-num', clsName]" :style="{ color: color }">
            <span>{{ symbol + item.Num }}</span>
            <span class="arrow" v-show="symbol === '-'"></span>
          </div>
        </div>
      </template>
      <!-- <template v-else>
        <div class="nodata" v-show="isFinished">暂无数据</div>
      </template> -->
    </div>
    <template v-slot:finished>
      <div style="margin-bottom:100px;">{{ finishedText }}</div>
    </template>
  </van-list>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

@Component
export default class BaseList extends Vue {
  @Prop({ type: Array, default: () => [] }) private listData!: [];
  @Prop({ type: String, default: '' }) private color!: string;
  @Prop({ type: String, default: '' }) private symbol!: string;
  @Prop({ type: Boolean, default: false }) private loading!: boolean;
  @Prop({ type: Boolean, default: false }) private finished!: boolean;

  private isLoading: boolean = false;
  private isFinished: boolean = false;
  private finishedText: string = '';

  get clsName() {
    return this.symbol === '+' ? 'baselist-num--light' : 'baselist-num--dark';
  }

  @Watch('loading')
  onLoading(newVal: boolean, oldVal: boolean) {
    if (newVal !== oldVal) {
      this.isLoading = newVal;
    }
  }

  @Watch('finished')
  onFinished(newVal: boolean, oldVal: boolean) {
    if (newVal !== oldVal) {
      this.isFinished = newVal;
    }
  }

  @Watch('listData', { immediate: true, deep: true })
  onListData(newVal: object[], oldVal: object[]) {
    if (newVal !== oldVal) {
      this.finishedText = newVal.length === 0 ? '暂无数据' : '没有更多了';
    }
  }

  @Emit()
  goDetail(item: any) {
    return item;
  }

  @Emit()
  load() {}
}
</script>

<style lang="scss">
.baselist {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  .baselist-item {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom: 2px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:last-child {
      border-bottom: transparent;
    }
  }

  .baselist-desc {
    display: flex;
    flex-direction: column;
    .ft-1 {
      @include font-sc(30px, $ft-black-1);
      margin-bottom: 10px;
      @include ellipsis(1);
      width: 300px;
    }
    .ft-2 {
      @include font-sc(28px, $ft-gray-4);
    }
  }

  .baselist-num {
    font-size: 40px;
    &--light {
      color: #ff7800;
    }
    &--dark {
      color: #b0b0b0;
    }
    .arrow {
      display: inline-block;
      margin-left: 20px;
      @include wh(32px, 32px);
      @include bgimg-stretch('../assets/img/icon-arrow.png');
      position: relative;
      top: 2px;
    }
  }

  /* .nodata {
    text-align: center;
    @include font-sc(28px, $ft-gray-4);
    padding: 40px 0;
  } */
}
</style>
