export function rendVideo(file) {
  return new Promise((resolve) => {
    let render = new FileReader()
    render.readAsArrayBuffer(file)
    render.onload = (e) => {
      let blob = new Blob([e.target.result])
      resolve(URL.createObjectURL(blob))
    }
  })
}