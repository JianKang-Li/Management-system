import mack1, { mack2 } from "./config.js"


export const getTableData = function (current, pageSize) {
  let uri = "/rule"
  return mack1.get(uri, {
    params: {
      current,
      pageSize
    }
  })
}

export const getCurrentUser = function () {
  let uri = "/currentUserDetail"
  return mack1.get(uri)
}

