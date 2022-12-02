import { message } from "ant-design-vue"
const copy = {
  name: "copy",
  mounted(el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示。
        // console.log('无复制内容')
        message.info("无复制内容")
        return
      }
      let theClipboard = navigator.clipboard;
      let promise = theClipboard.writeText(el.$value)
      promise.then(() => {
        // console.log("复制成功")
        message.success('复制成功')
      }, (err) => {
        // console.log("复制失败", err)
        console.log(err);
        message.error("复制失败")
      })
    }
    // 绑定点击事件
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新的时候触发
  updated(el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unmounted(el) {
    el.removeEventListener('click', el.handler)
  },
}

export default copy