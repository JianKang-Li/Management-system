import focus from "./focus"
import resize from "./resize";
import copy from "./copy"

const directiveArr = [focus, resize, copy]

export default function install(app) {

  for (let item of directiveArr) {
    app.directive(item.name, item)
  }
}