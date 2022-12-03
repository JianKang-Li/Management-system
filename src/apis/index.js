import mock1, { mock2 } from "./config.js"

export const getTableData = function (current, pageSize) {
  let uri = "/rule"
  return mock1.get(uri, {
    params: {
      current,
      pageSize
    }
  })
}

export const getCurrentUser = function () {
  let uri = "/currentUserDetail"
  return mock1.get(uri)
}


