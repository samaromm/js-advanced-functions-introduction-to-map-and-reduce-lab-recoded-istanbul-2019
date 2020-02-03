// Your code here
function mapToNegativize(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*-1)
  }
  return arr2
}

function mapToNNoChange(arr){
  let arr2=[...arr]
  return arr2
}

function mapToNegativize(arr){
  let arr2=[]
  for(let ele of arr){
    arr2.push(ele*2)
  }
  return arr2
}