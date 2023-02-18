export function rendVideo(file) {
  return new Promise((resolve) => {
    let render = new FileReader()
    render.readAsDataURL(file)
    render.onload = (e) => {
      resolve(e.target.result)
    }
  })
}