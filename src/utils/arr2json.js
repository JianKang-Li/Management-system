/* 
dataSource: [
          {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
          },
          {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
          },
        ],

        columns: [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          },
        ],
*/

export default function arr2json(arr) {
  let columns = [], dataSource = [];
  let headers = arr[0]
  let data = arr.slice(1, arr.length)
  headers.forEach((head, index) => {
    let obj = {}
    obj['title'] = head
    obj['dataIndex'] = index
    obj['key'] = index
    columns.push(obj)
  });

  columns.push({
    title: "操作",
    dataIndex: "operation",
    key: headers.length
  })

  data.forEach((item, index) => {
    let obj = {}
    obj['key'] = String(index)
    for (let i in item) {
      obj[i] = item[i]
    }
    dataSource.push(obj)
  })
  // console.log(dataSource, columns);
  return {
    dataSource,
    columns
  }
}