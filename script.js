 
 function createUser({imageUrl,title,author,time,date,content,readMoreUrl}){


 document.querySelector(".user-list").innerHTML+=`
<div class="cards">
<div class="one">
<img class="user-pic" src="${imageUrl}" alt="pic">
</div>
<div class="two">

<p class="titleall">${title}</p>
<p class="author-time"><strong class="aa">Short</strong> by ${author} / ${time} on ${date}</p>

<p class="news">${content}</p>
<p class="read">read more at <a href="${readMoreUrl}">Instagram</a></p>
</div>
</div>
 `
 }


async function getUser(){


const data= await fetch(
    "https://inshortsapi.vercel.app/news?category=all",
{method:"GET"}
)
const resp= await data.json()
const result=resp.data
console.log(result)
let numofpages=Math.ceil(result.length/5)
var loadnews=document.querySelector(".loadnews")
console.log(numofpages)

loadnews.addEventListener("click",()=>{
   
        console.log("happy")

     for(let i=1;i<result.length;i++){
  // n=numofpages
  //  pageUsers= result.slice(n,n+5)
console.log(i)
pageUsers= result.slice((i-1)*5, i*5)
     //  document.querySelector(".user-list").innerHTML=""
      pageUsers.forEach(ele=>{
         createUser(ele)
         
    })
     
    }
})

let firstfivenews=result.slice(0,5)
firstfivenews.forEach(ele=>{
   // console.log(ele)
   createUser(ele)

})
}

getUser()

document.querySelector(".btn-secondary").addEventListener("click",()=>{
    console.log("hiiii")
    document.querySelector(".bar").style.display="flex";
    document.querySelector(".btn-secondary").style.display="none";
})

document.querySelector(".closebtn").addEventListener("click",()=>{
console.log("close bar")
document.querySelector(".bar").style.display="none";
document.querySelector(".btn-secondary").style.display="flex";

})







