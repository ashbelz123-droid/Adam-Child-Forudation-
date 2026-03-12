const API = "http://localhost:3000"

async function loadPosts(){
  const res = await fetch(API+"/posts")
  const posts = await res.json()

  const feed = document.getElementById("feed")
  feed.innerHTML=""

  posts.forEach(p=>{
    const div=document.createElement("div")
    div.className="post"

    div.innerHTML=`
    <h3>${p.author}</h3>
    <p>${p.text}</p>
    ${p.image ? `<img src="${p.image}" width="100%">`:""}
    ${p.video ? `<video controls width="100%"><source src="${p.video}"></video>`:""}
    <br>
    👍 ${p.likes}
    <button onclick="likePost('${p._id}')">Like</button>
    `

    feed.appendChild(div)
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
      author:"Admin",
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
