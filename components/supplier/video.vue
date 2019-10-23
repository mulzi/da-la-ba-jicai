<template>
  <el-col :span="14" class="leftMi">
    <video-player
      ref="videoPlayer"
      class="video-player vjs-custom-skin"
      :playsinline="true"
      :options="playerOptions"
    />
  </el-col>
</template>

<script>
export default {
  data () {
    return {
      playerOptions: {
        // 播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        // 如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        // aspectRatio: '16:9' ,
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: false,
        sources: [{
          // 类型
          type: 'video/mp4',
          // url地址
          src: 'https://dalabajicai-prod.oss-cn-chengdu.aliyuncs.com/files/dalaba/file/EC5ED634619043528FE73F1AF9C61B08.mp4'
        }],
        // 你的封面地址
        poster: '',
        // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          // 全屏按钮
          fullscreenToggle: true
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .leftMi{
    max-width: 749px;
    height: 546px;
    min-width: 600px;
  .video-player{
    height: 100%;
    width: 100%;
    .video-js{
      height: 546px;
      .vjs-fluid{
        height: 100%;
      }
    }
  }
}
</style>
