import { shallowMount } from '@vue/test-utils'
import test from 'ava'
import TcColorList from './color-list.vue'
import TcIcon from './ui/icon.vue'

test(`color list - empty`, (t) => {
  const wrapper = shallowMount(TcColorList, {
    stubs: { TcIcon },
    propsData: {},
  })
  t.snapshot(wrapper.html())
})
