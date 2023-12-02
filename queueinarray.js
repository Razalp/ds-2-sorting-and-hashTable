// let queue = [];
// function enqueue(value) {
//   queue.push(value);
//   console.log(queue);
// }
// function dequeue() {
//   if (!queue.length) {
//     console.log("Queue is empty");
//   } else {
//     queue.shift();
//     console.log(queue);
//   }
// }
// enqueue(1);
// enqueue(2);
// enqueue(3);
// enqueue(4);
// dequeue();
let queue=[];
function enqueue(value){
  queue.push(value);
  console.log(queue)
}
function dequeue(){
  if(!queue.length){
    console.log("the queue is empty")
  }else{
  queue.shift()
  console.log(queue);
  }
}
enqueue(10);
enqueue(20);
dequeue()
