

export const setData = (changeData, changeKeys ) => {
  let res = JSON.parse(JSON.stringify(changeData))
  res.forEach(item => {
   changeKeys.map(key => {
      if(item[key] && typeof item[key] === 'number') {
        item[key] = doubleVal(item[key])
      }
    })
  });
  return res
}


export const doubleVal = (val) => {
  return val * 2
}



