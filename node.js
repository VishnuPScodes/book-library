

// function callme(name,callback){
//     process.nextTick(()=>{
//  callback("the text", name);
//     })
   
// }
// callme('tested',(x,y)=>{
//     console.log(x,y)
// })

// console.log('end');

const name =(x)=> new Promise((resolve, reject)=>{
   if(x>2){
    resolve('done')
   }
   else{
    reject("done");
   }
  
});

name(1).then((e)=>{
    console.log(e)
}).catch((er)=>{
    console.log('catch ',er)
})
