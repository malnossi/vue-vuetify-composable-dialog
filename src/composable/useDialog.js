import { createApp, mergeProps } from 'vue'
import Dialog from '@/components/Dialog.vue'
import vuetify from '@/plugins/vuetify'

export const getVAppRoot = () => document.body
export const createContainer = () => document.createElement('div')

export const useDialog = (props) => {    
    const rootElement = getVAppRoot()
    const container = createContainer()
    return new Promise((resolve) => {
        const componentApp = createApp(Dialog, mergeProps(
            props,
            { modelValue: true },
            {
                onSubmit() {
                    resolve(true)
                },
                onCancel() {
                    resolve(false)
                }
            }
        ))
        rootElement.appendChild(container)
        componentApp.use(vuetify).mount(container)
    })
}