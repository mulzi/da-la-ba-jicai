<template>
  <div class="supplierBody">
    <div class="bodyBox">
      <el-row class="HeaderBreadcrumb">
        <el-col :span="24">
          <div class="breadcrumb">
            <span class="iconfont">&#xe635;</span>
            <span style="margin-right: 0;color: #8e8e8e">当前位置：</span>
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <nuxt-link to="/works">
              作品精选
            </nuxt-link>
            <span class="iconfont right">&#xe603;</span>
            <span>详情</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="works_content_box marginBottom100">
        <el-row class="l_content_box">
          <el-row class="article_top">
            <el-row class="nameTit_box">
              <el-col class="name">
                这个是文章标题
              </el-col>
              <div class="span">
                加入收藏
              </div>
              <div class="span">
                取消收藏
              </div>
            </el-row>
            <el-row class="Top_timeBox">
              <div class="L_time">
                2018-551-551发布
              </div>
              <div class="number_icon">
                <i class="el-icon-view">&nbsp;88</i>
                <i class="el-icon-chat-dot-square">&nbsp;55</i>
                <i class="iconfont">&#xe680;&nbsp;88</i>
              </div>
            </el-row>
          </el-row>
          <el-row class="content_box">
            <div class="tit">
              【作品介绍】
            </div>
            <div class="content_c">
              <p>
                作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品
                品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍作品介绍。
              </p>
              <p>
                <img src="@/assets/img/0123.jpg" alt="">
              </p>
            </div>
            <div class="content_b">
              <p>项目名称：啊实打实大</p>
              <p>项目地址：S大萨达</p>
              <p>经典之处：S大萨达ad阿萨德</p>
            </div>
            <div class="praise">
              <div class="circle active">
                <i class="iconfont">&#xe680;</i>
              </div>
              <span>
                点赞
              </span>
              <span>
                取消赞
              </span>
            </div>
          </el-row>
          <el-row class="comment_box">
            <div class="top_form">
              <div class="text_Box">
                <textarea placeholder="想说点什么呢..." />
              </div>
              <div class="sub">
                <span>评&nbsp;&nbsp;论</span>
              </div>
            </div>
            <div class="b_list_Box">
              <comment />
            </div>
          </el-row>
        </el-row>
        <el-row class="r_content_box">
          <div class="top_img_box">
            <div class="img">
              <img src="@/assets/img/0123.jpg" alt="">
            </div>
            <div class="name">
              加一几点设计
            </div>
            <div class="adds_a">
              重庆 | 设计方
            </div>
            <nuxt-link to="" class="click">
              点击查看公司详情
            </nuxt-link>
          </div>
          <el-row class="selection">
            <div class="tit">
              作品精选
            </div>
            <div class="list_a">
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
              <nuxt-link to="">
                <span>
                  撒大声地啊实打实大阿萨德阿萨德阿萨德按时按时啊实打实的
                </span>
                <em>655555</em>
              </nuxt-link>
            </div>
            <div class="moreList">
              <nuxt-link to="">
                查看更多<i class="el-icon-arrow-right" />
              </nuxt-link>
            </div>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="fxiedComment">
        <div class="BG">
        </div>
        <div class="comment">
          <div class="bodyContent">
            <div class="close">
              <span class="el-icon-close"></span>
            </div>
            <div class="name">
              你想对 <span>用户名字</span>说什么
            </div>
            <div class="text">
              <textarea placeholder="写点什么吧"/>
            </div>
            <div class="sub">
                 <span>提交</span>
            </div>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
import Comment from '@/components/works/Comment'
export default {
  components: { Comment },

  layout: 'main'
}
</script>

<style scoped lang="scss">
  .works_content_box{
    width: 100%;
    margin-top: 20px;
    display: flex;
    display: -ms-flex;
    .l_content_box{
      overflow: hidden;
      flex: 1;
      -ms-flex: 1;

      .article_top{
        width: 100%;
        border-bottom: 1px solid $borderE7;
        background: #ffffff;
        .nameTit_box{
          width: 92%;
          margin: 30px auto 0;
          display: flex;
          display: -ms-flex;
          justify-items: center;
          align-items: center;
          .name{
            flex: 1;
            -ms-flex: 1;
            height: 24px;
            line-height: 24px;
            font-size: 22px;
            color: #333333;
            margin-right: 40px;
            @include over;
          }
          .span{
            cursor: pointer;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 114px;
            background: #FFD100;
            border-radius: 4px;

          }
        }
        .Top_timeBox{
          width: 92%;
          margin:30px auto 10px;
          overflow: hidden;
          .L_time{
            float: left;
            width: 200px;
            font-size: 14px;
            color: #999999;
            height: 16px;
            line-height: 16px;
          }
          .number_icon{
            float: right;
            height: 16px;
            line-height: 16px;
            color: #999999;
            font-size: 14px;
            i{
              margin: 0 8px;
            }
          }
        }
      }
      .content_box{
        width: 100%;
        margin: 0 auto ;
        padding-top: 40px;
        background: #ffffff;
        .tit{
          width: 92%;
          margin: 0 auto;
          text-align: center;
          color: #333333;
          font-size:18px ;
        }
        .content_c{
          width: 92%;
          margin: 20px auto 40px;
          p{
            width: 100%;
            text-indent: 2em;
            color:#333333 ;
            font-size: 16px;
            line-height: 28px;
            margin-bottom: 20px;
            img{
              max-width: 94%;
              display: block;
              margin: 0 auto;
            }
          }
        }
        .content_b{
          width: 92%;
          margin: 20px auto 0;
          p{
            width: 100%;
            text-indent: 2em;
            color:#333333 ;
            font-size: 16px;
            line-height: 28px;
          }
        }
        .praise{
          width: 100%;
          margin: 40px auto;
          text-align: center;
          .circle{
            margin: 0 auto;
            width: 60px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            color: #ffffff;
            border-radius: 50%;
            background: #d9d9d9;
            cursor: pointer;
            &.active{
              background: #f88685;
            }
            i{
              font-size: 24px;
            }
          }
          span{
            display: inline-block;
            margin-top: 10px;
            font-size:14px;
            color: #333333;
          }
        }
      }
      .comment_box{
        background: #ffffff;
        margin: 40px auto 0;
        width: 100%;
        overflow: hidden;
        .top_form{
          width: 100%;
          margin-top: 30px ;
          .text_Box{
            width: 94%;
            margin: 0 auto;
            border: 1px solid $borderE7;
            border-radius: 6px;
            textarea{
              width: 94%;
              margin: 20px auto;
              height: 96px;
              line-height: 24px;
              font-size: 16px;
              color: #333333;
              display: block;
              resize: none;
              outline: none;
            }
          }
          .sub{
            width: 94%;
            margin: 20px auto;
            overflow: hidden;
            span{
              display: block;
              float: right;
              width: 100px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              color: #ffffff;
              background: $redColor;
              cursor: pointer;
            }
          }
        }
        .b_list_Box{
          width: 94%;
          margin: 30px auto ;
          overflow: hidden;

        }
      }
    }
    .r_content_box{
      width:326px ;
      margin-left: 30px;
      .top_img_box{
        background: #ffffff;
        width: 100%;
        overflow: hidden;
        .img{
          width: 86px;
          height: 86px;
          border-radius: 50%;
          overflow: hidden;
          margin: 30px auto 0;
          img{
            @include img;
          }
        }
        .name{
          width: 92%;
          margin: 20px auto 0 ;
          height: 20px;
          line-height: 20px;
          font-size: 18px;
          color: #333333;
          text-align: center;
          @include over;
        }
        .adds_a{
          width: 92%;
          margin: 10px auto 0 ;
          height: 20px;
          line-height: 20px;
          font-size: 15px;
          color: #999999;
          text-align: center;
          @include over;
        }
        .click{
          display: block;
          margin: 20px auto ;
          width: 140px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          color: #333333;
          background: #FFD100;
          border-radius: 4px;

        }
      }
      .selection{
        width: 100%;
        background: #ffffff;
        margin: 10px auto;
        .tit{
          height: 50px;
          line-height: 50px;
          text-indent: 20px;
          color: #333333;
          font-size: 18px;
          border-bottom: 1px solid $borderE7;

        }
        .list_a{
          margin: 10px auto 0;
          width: 100%;
          border-bottom: 1px solid $borderE7;
          a{
            display: flex;
            display: -ms-flex;
            justify-items: center;
            align-items: center;
            &:last-child{
              margin-bottom: 10px;
            }
            &:hover{
              span{
                color: $redColor;
              }
              em{
                color: $redColor;
              }
            }
            span{
              flex: 1;
              -ms-flex: 1;
              margin-left: 20px;
              font-size: 16px;
              color: #333333;
              @include over;
              height: 36px;
              line-height: 36px;
              display: inline-block;
            }
            em{
              width: 70px;
              margin-left: 10px;
              margin-right: 20px;
              color: #999999;
              font-size: 14px;
              text-align: right;
              display: inline-block;
            }
          }
        }
        .moreList{
          width: 100%;
          text-align: center;
          a{
            display: inline-block;
            margin: 20px auto;
            color: #333333;
            font-size: 16px;
            &:hover{
              color: $redColor;
            }
          }
        }
      }
    }
  }
</style>

\
