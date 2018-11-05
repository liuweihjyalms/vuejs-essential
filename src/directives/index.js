import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'

//注册指令
//Vue.directive('validator', validator)

const directives = {
  validator,
  dropdown
}

//使用一个循环，来注册我们的所有指令
for (const [key, value] of Object.entries(directives)) {
  Vue.directive(key, value)
}
