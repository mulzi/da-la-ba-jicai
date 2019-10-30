<template>
  <div class="background">
    <div class="BG" @click="backgroundClose" />
    <div ref="ruleForm" class="bodyBox">
      <div class="box">
        <div class="closeBox">
          <span>预约到店</span>
          <em class="el-icon-close" @click="messageShow" />
        </div>
        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="form">
          <div class="phoneBox">
            <div class="left">
              <span>
                <em>*</em>姓名:
              </span>
              <el-form-item prop="name" class="ones">
                <el-input v-model="ruleForm.name" type="text" autocomplete="off" />
              </el-form-item>
            </div>
            <div class="right">
              <span>
                <em>*</em>电话号码:
              </span>
              <el-form-item prop="phone">
                <el-input v-model="ruleForm.phone" type="text" autocomplete="off" />
              </el-form-item>
            </div>
          </div>
          <div class="state">
            <span>
              咨询说明:
            </span>
            <el-form-item prop="text">
              <el-input v-model="ruleForm.text" type="text" autocomplete="off" />
            </el-form-item>
          </div>
          <div class="sub">
            <span @click="subOrder()">
              提交
            </span>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeService } from '@/services/home.js'
export default {
  data () {
    const checkPhone = (rule, value, callback) => {
      const mobile = /^((13[0-9]{9})|(18[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})|(19[0-9]{9}))$/
      const tel = /^\d{3,4}-\d{7,9}$/
      if (!mobile.test(value) && !tel.test(value)) {
        return callback(new Error('请输入正确的电话'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        phone: '',
        text: ''
      },
      rules: {
        phone: [{ required: true, trigger: 'blur', validator: checkPhone }],
        name: [{ required: true, trigger: 'blur', message: '请填写姓名' }],
        text: [{ required: true, trigger: 'blur', message: '请填写咨询说明' }]
      }
    }
  },
  mounted () {
  },
  methods: {
    messageShow () {
      this.$store.commit('home/changeMesShow')
    },
    order (params) {
      const homeService = new HomeService({ $axios: this.$axios, app: { $cookies: this.$cookies } })
      homeService.order(params).then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.$message({
            showClose: true,
            message: '留言成功！等待回访',
            type: 'success'
          })
        }
      })
    },
    subOrder () {
      const params = {
        supplierId: this.$route.params.id,
        name: this.ruleForm.name,
        mobile: this.ruleForm.phone,
        supplement: this.ruleForm.text }
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          console.log('error submit!!')
          return
        }
        alert('submit!')
        this.order(params)
        this.$refs.ruleForm.resetFields()
        this.$store.commit('home/changeMesShow')
      })
    },
    backgroundClose () {
      this.$store.commit('home/changeMesShow')
    }
  }
}
</script>

<style scoped lang="scss">
    .background{
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 990;
         .BG{
           position: absolute;
           top: 0;
           left: 0;
           height: 100%;
           width: 100%;
           background: rgba(0,0,0,.6);
           z-index: 901;
         }
        .bodyBox{
           z-index: 902;
            width: 550px;
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

                        .phoneBox{
                            width: 100%;
                            display: flex;
                            display: -ms-flex;
                            justify-items: center;
                            align-items: center;
                            .left{
                                display: flex;
                                display: -ms-flex;
                                justify-items: center;
                                align-items: center;
                                margin-right: 20px;
                               .el-form-item{
                                margin-bottom: 0;
                                 width: 120px;
                                 margin-left: 10px;
                              }
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
                              .el-form-item{
                                margin-bottom: 0;
                                margin-left: 10px;

                              }
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
                            margin-top: 35px;
                          .el-form-item{
                            flex: 1;
                            margin-bottom: 0;
                            margin-left: 10px;
                            input{
                              height: 36px;
                              line-height: 36px;
                            }

                          }
                            span{
                                width: 80px;
                                text-align: right;
                                line-height: 30px;
                                height: 30px;
                                font-size: 14px;
                                color:#666666;
                            }
                        }
                        .sub{
                            width: 100%;
                            overflow: hidden;
                            margin-top: 30px;
                            span{
                              display: inline-block;
                                background: $redColor;
                                height:30px ;
                                line-height: 30px;
                                width: 70px;
                                text-align: center;
                                font-size: 14px;
                                color: #ffffff;
                                margin-left: 90px;
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
   .el-input__inner{
    border: 0;
     height: 36px;
     line-height: 36px;
   }
</style>
