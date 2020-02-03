// Your code here
function mapToNegativize(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*-1)
  }
  return arr2
}

function mapToNoChange(arr){
  let arr2=[...arr]
  return arr2
}

function mapToDouble(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*2)
  }
  return arr2
}

function mapToSquare(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*ele)
  }
  return arr2
}

function reduceToTotal(arr){
  let total=0
  for(let ele in arr){
    total+=ele
  }
  return total
}