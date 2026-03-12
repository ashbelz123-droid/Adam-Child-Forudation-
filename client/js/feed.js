const API="http://localhost:3000"

async function loadPosts(){

const res=await fetch(API+"/posts")
const posts=await res.json()

const feed=document.getElementById("feed")
feed.innerHTML=""

posts.forEach(p=>{

const div=document.createElement("div")
div.className="post"

div.innerHTML=`

<h3>${p.user}</h3>

<p>${p.text}</p>

${p.image ? `<img src="${p.image}">`:""}

${p.video ? `<video controls width="100%"><source src="${p.video}"></video>`:""}

<br><br>

👍 ${p.likes}

<button onclick="likePost('${p._id}')">Like</button>

<div class="comment-box">

<input id="name-${p._id}" placeholder="Your name">
<input id="comment-${p._id}" placeholder="Write comment">

<button onclick="addComment('${p._id}')">Comment</button>

</div>

<div id="comments-${p._id}"></div>

`

feed.appendChild(div)

loadComments(p._id)

})

}

async function createPost(){

const text=document.getElementById("postText").value
const image=document.getElementById("imageUrl").value
const video=document.getElementById("videoUrl").value

await fetch(API+"/posts",{
method:"POST",
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
user:"Admin",
text,
image,
video
})
})

loadPosts()

}

async function likePost(id){

await fetch(API+"/likes/"+id,{method:"POST"})
loadPosts()

}

loadPosts()
