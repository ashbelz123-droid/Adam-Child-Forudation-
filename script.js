let posts = JSON.parse(localStorage.getItem("posts")) || [];

function showPosts(){

let container = document.getElementById("postList");
container.innerHTML="";

posts.forEach(p=>{

container.innerHTML += `
<div class="card">

<h3>${p.title}</h3>
<p>${p.desc}</p>

<img src="${p.image}">

<video width="100%" controls>
<source src="${p.video}">
</video>

<button>Support / Order</button>

<div class="comments">
<input placeholder="Write comment">
<button>Post</button>
</div>

</div>
`;

});

}

showPosts();
