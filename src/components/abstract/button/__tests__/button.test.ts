import { mount } from '@vue/test-utils'

import UIButton from '../button.vue'

test('type为success', () => {
  const wrapper = mount(UIButton, {
    props: {
      type: 'success'
    }
  })
  expect(wrapper.classes()).toContain('button--success')
})
