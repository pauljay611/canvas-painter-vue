import { mount } from '@vue/test-utils'
import Controller from '@/components/Controller.vue'

describe('Controller', () => {
    let wrapper = mount(Controller)
    let vm = wrapper.vm
    it('click save for save in .png', () => {
        wrapper.setData({ imageUrl: '' })
        let saveBtn = wrapper.find('.save')
        saveBtn.trigger('click')
        expect(wrapper.vm.imageUrl).toBe(true)
    })
    it('click clear all for clear canvas', () => {
        wrapper.setProps({ imageStack: ['12346.url', '12345.url'], currentImage: '12346.url' })
        expect(vm.imageStack.length).toBe(0)
        expect(vm.currentImage).toBe('')
    })
    it('click undo for undo canvas', () => {
        wrapper.setProps({ imageStack: ['12346.url', '12345.url'], currentImage: '12345.url' })
        let undoBtn = wrapper.find('.undo')
        undoBtn.trigger('click')
        expect(vm.currentImage).toBe('12346.url')
    })
    it('click redo for redo canvas', () => {
        wrapper.setProps({ imageStack: ['12346.url', '12345.url'], currentImage: '12346.url' })
        let redoBtn = wrapper.find('.redo')
        redoBtn.trigger('click')
        expect(vm.currentImage).toBe('12345.url')
    })
})