let _TOAST = {
        show: false,    // Boolean toast显示状态
        component: null // Object toast组件
    };
export default {
    install(Vue) {
        Vue.prototype.$toast = (text, optionTime) => {
            let defaultOpts = {
                position: 'center', // String
                duration: 1000,     // Number
                wordWrap: false,    // Boolean
                // width: '90%'     // String/Number
            };
            optionTime = Object.assign(defaultOpts, optionTime);
            let wordWrap = optionTime.wordWrap ? 'zh-word-wrap' : '',
                style = optionTime.width ? `style="width: ${optionTime.width}"` : '';
            if (_TOAST.show) {
                return;
            }
            if (!_TOAST.component) {
                const ToastComponent = Vue.extend({
                    template: `<div v-show="show" :class="position" class="zh-toast ${wordWrap}" ${style}>{{text}}</div>`,
                    data() {
                        return {
                            show: _TOAST.show,
                            text: text,
                            position: `zh-toast-${optionTime.position}`
                        }
                    },
                })
                _TOAST.component = new ToastComponent()
                document.body.appendChild(_TOAST.component.$mount().$el)
            }
             _TOAST.component.position = `zh-toast-${optionTime.position}`;
            _TOAST.component.text = text;
            _TOAST.component.show = _TOAST.show = true;
            setTimeout(function() {
                _TOAST.component.show = _TOAST.show = false;
            }, optionTime.duration)
        }
    }
}