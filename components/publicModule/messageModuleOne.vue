<template>
  <div class="background">
    <div class="bodyBox">
      <div class="box">
        <div class="closeBox">
          <span>预约到店</span>
          <em class="el-icon-close" />
        </div>
        <div class="form">
          <form action="">
            <div class="phoneBox">
              <div class="left">
                <span> <em>*</em>联系人：</span>
                <input type="text">
              </div>
              <div class="right">
                <span> <em>*</em>联系人手机号码：</span>
                <input type="text">
              </div>
            </div>
            <div class="state">
              <span>
                咨询说明：
              </span>
              <textarea />
            </div>
            <div class="sub">
              <input type="button" value="提交">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageModuleOne'
}
</script>

<style scoped lang="scss">
    .background{
        background: rgba(0,0,0,.6);
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 990;
        .bodyBox{
            width: 550px;
            height: 250px;
            background: #ffffff;
            border-radius: 4px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50% , -50%);
            .box{
                padding: 20px;
                .closeBox{
                    width: 100%;
                    overflow: hidden;
                    span{
                        float: left;
                        height: 20px;
                        line-height: 20px;
                        display: inline-block;
                        font-size: 20px;
                        color: #333333;
                    }
                    em{
                        float: right;
                        display: inline-block;
                        font-size: 20px;
                        width: 20px;
                        height: 20px;
                        color: #888888;
                        cursor: pointer;
                        &:hover{
                            color: #333333;
                            transform: rotateZ(720deg);
                            transition: 1.8s ease-in-out;
                        }
                    }
                }
                .form{
                    margin-top: 30px;
                    width: 100%;
                    form{
                        width: 100%;
                        display: block;
                        .phoneBox{
                            width: 100%;
                            display: flex;
                            display: -ms-flex;
                            justify-items: center;
                            align-items: center;
                            .left{
                                flex: 1;
                                display: flex;
                                display: -ms-flex;
                                justify-items: center;
                                align-items: center;
                                margin-right: 20px;
                                span{
                                    width: 80px;
                                    text-align: right;
                                    height: 30px;
                                    line-height: 30px;
                                    font-size: 14px;
                                    color: #666666;
                                    em{
                                        color: $redColor;
                                    }
                                }
                                input{
                                    width: 120px;
                                    text-indent: 1em;
                                    border: 1px solid $borderE7;
                                    height: 30px;
                                    line-height: 30px;
                                }
                            }
                            .right{
                                flex: 1;
                                display: flex;
                                display: -ms-flex;
                                justify-items: center;
                                align-items: center;
                                span{
                                    width: 120px;
                                    text-align: right;
                                    height: 30px;
                                    line-height: 30px;
                                    font-size: 14px;
                                    color: #666666;
                                    em{
                                        color: $redColor;
                                    }
                                }
                                input{
                                    width: 150px;
                                    text-indent: 1em;
                                    border: 1px solid $borderE7;
                                    height: 30px;
                                    line-height: 30px;
                                }
                            }
                        }
                        .state{
                            display: flex;
                            justify-items: center;
                            align-items: center;
                            margin-top: 25px;
                            span{
                                width: 80px;
                                text-align: right;
                                line-height: 30px;
                                height: 30px;
                                font-size: 14px;
                                color:#666666;
                            }
                            textarea{
                                flex: 1;
                                resize: none;
                                height: 30px;
                                line-height: 30px;
                                font-size: 14px;
                                color: #333333;
                                border: solid 1px $borderE7;
                                text-indent: 1em;
                            }
                        }
                        .sub{
                            width: 100%;
                            overflow: hidden;
                            margin-top: 30px;
                            input{
                                background: $redColor;
                                height:30px ;
                                line-height: 30px;
                                width: 70px;
                                text-align: center;
                                font-size: 14px;
                                color: #ffffff;
                                margin-left: 80px;
                                outline: none;
                                cursor: pointer;
                                &:active{
                                    background: red;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
