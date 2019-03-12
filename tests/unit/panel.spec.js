import { mount } from '@vue/test-utils'
import Panel from '@/views/Panel.vue'

describe('Panel', () => {
    let wrapper = mount(Panel)
    it('render controller when enter the page', () => {
        expect(wrapper.contains('.controller')).toBe(true)
    })
    it('render painter when enter the page', () => {
        expect(wrapper.contains('.painter')).toBe(true)
    })
    it('render painter when enter the page', () => {
        expect(wrapper.contains('canvas')).toBe(true)
    })
})