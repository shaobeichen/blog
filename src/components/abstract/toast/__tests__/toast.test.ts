import { mount } from '@vue/test-utils'
import { sleep } from '@/utils/index'

import UIToast from '../toast.vue'
import Toast from '../toast'

test('创建一个弹窗，持续3秒', () => {
  const wrapper = mount(UIToast, {
    props: {
      message: '提示成功',
      duration: 3000
    }
  })
  // expect(wrapper.find('.toast')).toBeTruthy()
  expect(wrapper.text()).toContain('提示成功')
})

test('命令式调用，创建一个弹窗', async () => {
  Toast('提示成功')
  await sleep()
  expect(document.body.querySelector('.toast')).toBeTruthy()
})
