<template>
  <van-dialog
    v-model="isShow"
    get-container="#app"
    className="basedialog"
    @close="close"
  >
    <i class="icon-close" @click="handleClose"></i>
    <slot name="top">
      <div class="top">
        {{ title }}
      </div>
    </slot>
    <slot name="center"></slot>
    <slot name="bottom"></slot>
  </van-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';

@Component
export default class BaseDialog extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean;
  @Prop({ type: String, default: '提示' }) private title!: string;

  private isShow: boolean = false;

  @Watch('show')
  public onShow(newVal: boolean, oldVal: boolean): any {
    if (newVal !== oldVal) {
      this.isShow = this.show;
    }
  }

  @Emit()
  close() {}

  private handleClose() {
    this.close();
  }
}
</script>

<style lang="scss">
.basedialog {
  .van-dialog__header,
  .van-dialog__footer {
    display: none;
  }
}

.basedialog {
  padding-bottom: 38px;
  width: 660px; // 弹窗-宽
  .icon-close {
    z-index: 1;
    position: absolute;
    right: 20px;
    top: 20px;
    content: '';
    display: inline-block;
    @include wh(60px, 60px);
    @include bgimg-stretch('../assets/img/icon-close.png');
  }

  .top {
    padding-top: 38px;
    padding-bottom: 10px;
    font-weight: 500;
    line-height: 38px;
    text-align: center;
  }
}
</style>
