<template>
  <el-row class="AddIntelligence">
    <el-row class="contentBox">
      <el-form ref="props" class="formBox demo-ruleForm" :model="fromBox" :rules="pops">
        <el-row v-for="(ti,ii) in fromBox.formO" :key="ii" class="topForm">
          <el-form-item label="公司类别：" prop="type">
            <el-select v-model="ti.categoryId" placeholder="请选择公司类别">
              <el-option v-for="(t,i) in type" :key="i" :label="t.name" :value="t.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="公司名称：" prop="name">
            <el-input v-model="fromBox.formO.name" placeholder="请输入公司名称" />
          </el-form-item>
          <el-form-item label="公司地址：" prop="name">
            <el-input v-model="fromBox.formO.name" placeholder="请输入公司地址" />
          </el-form-item>
          <el-form-item label="联系人：" prop="name">
            <el-input v-model="fromBox.formO.name" placeholder="请输入联系人" />
          </el-form-item>
          <el-form-item label="联系人职位介绍：" prop="name">
            <el-input v-model="fromBox.formO.name" placeholder="请输入联系人职位介绍" />
          </el-form-item>
          <el-form-item label="联系人电话：" prop="name">
            <el-input v-model="fromBox.formO.name" placeholder="请输入联系人电话" />
          </el-form-item>
          <el-form-item label="项目阶段：" prop="name">
            <el-input v-model="fromBox.formO.name" placeholder="请输入项目阶段" />
          </el-form-item>
          <el-form-item label="未定材料：" prop="name">
            <el-input v-model="fromBox.formO.name" placeholder="请输入未定材料" />
          </el-form-item>
          <el-form-item label="项目图片">
            <el-row>
              <el-row>
                <span class="title">请上传情报图片信息</span>
                <span class="caption font-weight-thin">（图片限制在4M以内且只能上传3张,支持PNG\PG\JPEG\GIF格式）</span>
              </el-row>
              <div>
                <el-row :gutter="10">
                  <el-upload
                    action="/api/file/dalaba/file/upload.json"
                    list-type="picture-card"
                    :on-remove="(file, fileList)=>handleRemove(file, fileList,ii)"
                    :limit="3"
                    :on-success="(response, file, fileList)=>uploadPicture(response, file, fileList,ii)"
                    :on-exceed="overList"
                  >
                    <i class="el-icon-plus" />
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                  <el-dialog
                    title="提示"
                    :visible.sync="DialogVisibles"
                    width="30%"
                    center
                  >
                    <span>{{ tipsText }}</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="centerDialogVisible">取 消</el-button>
                      <el-button type="primary" @click="centerDialogVisible">确 定</el-button>
                    </span>
                  </el-dialog>
                </el-row>
              </div>
            </el-row>
            <div v-if="fromBox.formO.length === 1" class="" style="text-decoration:underline" @click="add">
              点击添加多个情报
            </div>
          </el-form-item>
        </el-row>
      </el-form>
    </el-row>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      type: [
        {
          name: '甲方',
          id: 1
        }, {
          name: '设计方',
          id: 2
        }, {
          name: '承建方',
          id: 3
        }, {
          name: '装饰方',
          id: 4
        }],
      DialogVisibles: false,
      dialogVisible: false,
      tipsText: '多少岁',
      dialogImageUrl: '',
      fromBox: {
        formO: [
          {
            // projectId: this.$store.state.projectInfo.id,
            // id: this.$store.state.projectInfo.id,
            categoryId: null,
            name: null,
            companyName: null,
            positionLevel: null,
            positionIntroduce: null,
            address: null,
            telephone: null,
            projectStage: null,
            uncertaintyMaterials: null,
            pics: [] // 图片

          }
        ]
      },
      pops: {
        name: [
          { required: true, message: '请选择活动区域', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择公司类型', trigger: 'change' }
        ]
      }

    }
  },
  methods: {
    overList () {
      this.tipsText = '最多只能传3张图片'
      this.DialogVisibles = true
    },
    add () {
      console.log(2)
    },
    centerDialogVisible () {
      this.DialogVisibles = !this.DialogVisibles
    },
    // 图片上传
    uploadPicture (response, file, fileList, index) {
      this.fromBox.formO[index].pics.push(response.uri)
    },

    // 图片删除
    handleRemove (file, fileList, index) {
      const that = this
      const fileName = file.response.uri
      that.delone(fileName, index)
    },

    // 删除图片函数封装
    delone (fileName, index) {
      const that = this
      const arr = that.fromBox.formO[index].pics
      const del = arr.indexOf(fileName)
      that.fromBox.formO[index].pics.splice(del, 1)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
