<template>

</template>

<script>
import $ from 'jquery'
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['dates'],
  data () {
    return {
      imagesBox: [],
      date: this.dates
    }
  },
  mounted () {
    console.log(this.date)
    $(function () {
      $('#topListBox').children().first().children('.titNameChange').addClass('active')
      $('#topListBox').children().first().children('.titNameChange').children('i').removeClass('el-icon-caret-right')
      $('#topListBox').children().first().children('.titNameChange').children('i').addClass('el-icon-caret-bottom')

      $('#topListBox .span').on('click', function () {
        $(this).parent().parents().siblings().children('.boLiList').slideUp('normal')
        $(this).parent().siblings('.boLiList').slideToggle('slow')
        $(this).parent().parents().siblings().children('.titNameChange').removeClass('active')
        $(this).parent().toggleClass('active')
        $(this).parent().parents().siblings().children('.titNameChange').children().siblings('i').removeClass()
        $(this).parent().parents().siblings().children('.titNameChange').children().siblings('i').addClass('el-icon-caret-right')
        if ($(this).siblings('i').hasClass('el-icon-caret-right')) {
          $(this).siblings('i').removeClass()
          $(this).siblings('i').addClass('el-icon-caret-bottom')
        } else if ($(this).siblings('i').hasClass('el-icon-caret-bottom')) {
          $(this).siblings('i').removeClass()
          $(this).siblings('i').addClass('el-icon-caret-right')
        }
      })
    })
  },
  methods: {
    show (index) {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
