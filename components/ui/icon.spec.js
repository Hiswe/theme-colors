import { shallowMount } from '@vue/test-utils'
import test from 'ava'
import TcIcon from './icon.vue'

test(`icon content`, (t) => {
  const wrapper = shallowMount(TcIcon, {
    propsData: { name: `test` },
  })
  t.is(wrapper.text(), `test`)
})

test(`icon render`, (t) => {
  const wrapper = shallowMount(TcIcon, {
    propsData: { name: `test` },
  })
  t.snapshot(wrapper.html())
})
