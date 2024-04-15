<template>
  <div class="forms-demo">
    <el-button @click="handleSubmit">Submit</el-button>
    <el-form ref="ipForms" :model="form" :rules="rules">
      <el-form-item 
        v-for="(item, index) in form.ipList"
        :key="index" :label="`IP地址${index + 1}`"
        :prop="`ipList.` + index + `.ip`" :rules="rules.ip">
        <el-input @input="validateAll(index)" class="ip-input" v-model="item.ip" /> <span> :</span>
        <el-input class="port-input" v-model="item.port" />
      </el-form-item>
  </el-form>
  </div>
</template>

<script>
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'

const ipList = new Array(200).fill({
  ip: '',
  port: ''
}).map((item, index) => {
  item = {...item}
  item.ip = `${index + 1}.${index + 1}.${index + 1}.${index + 1}`
  item.port = '8080'
  return item
})

export default {
  name: 'Forms',
  components: {
    ElButton,
    ElForm,
    ElInput,
    ElFormItem
  },
  data() {
    return {
      form: {
        ipList
      },
      rules: {
        ip: [
          {
            required: true,
            message: 'ip address is required',
            trigger: ['blur', 'change'],
          },
          {
            trigger: ['blur', 'change'],
            validator: (rule, value, cb) => {
              const result = []
              this.form.ipList.forEach(item => {
                if (item.ip === value) {
                  result.push(value)
                }
              })
              result.length > 1 ? cb('重复的IP地址') : cb()
            }
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log(this.form);
    },
    oldValidateAll() { // 优化前的校验方法，validate输入一次执行一次，每次校验表单中所有表单项
      this.$refs.ipForms.validate() // 不传参数，校验所有
    },
    validateAll(index) { // 优化后的校验方法，validate只在输入结束后执行，每次只校验数据array中重复的项
      const current = this.form.ipList[index].ip
      const indexArr = []
      const validate = () => {
        this.form.ipList.forEach((item, index) => {
          if (item.ip === current) {
            indexArr.push(index)
          }
        })
        this.$refs.ipForms.validate(indexArr.map(index => `ipList.${index}.ip`)) // 接受一个数组参数，只校验这里面的项
      }
      const timer = null
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        validate()
      }, 500)
    }
  }
}
</script>

<style>
.forms-demo {
  width: 500px;
}
.ip-input {
  width: 80%;
}
.port-input {
  width: 18%;
}
</style>
