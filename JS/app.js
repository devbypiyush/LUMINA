const products=[
{name:'Arc Lounge Chair',cat:'seating',price:'₹48,000',img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85'},
{name:'Linea Floor Lamp',cat:'lighting',price:'₹22,500',img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85'},
{name:'No. 07 Ceramic',cat:'objects',price:'₹7,800',img:'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85'},
{name:'Mori Lounge Sofa',cat:'seating',price:'₹1,15,000',img:'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=900&q=85'},
{name:'Halo Pendant',cat:'lighting',price:'₹31,000',img:'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=900&q=85'},
{name:'Stone Tray',cat:'objects',price:'₹5,400',img:'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85'},
{name:'Form Side Chair',cat:'seating',price:'₹28,000',img:'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=85'},
{name:'Lune Table Lamp',cat:'lighting',price:'₹18,900',img:'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85'}
];
function renderProducts(cat='all'){const el=document.querySelector('#products');if(!el)return;el.innerHTML=products.filter(p=>cat==='all'||p.cat===cat).map((p,i)=>`<article class="product" onclick="openProduct(${products.indexOf(p)})"><div class="product-img" style="background-image:url('${p.img}')"></div><h3>${p.name}</h3><div class="product-meta"><span>${p.cat.toUpperCase()}</span><b>${p.price}</b></div></article>`).join('')}
function filterProducts(cat,btn){document.querySelectorAll('.filter button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderProducts(cat)}
function openProduct(i){const p=products[i];const m=document.createElement('div');m.className='modal';m.innerHTML=`<div class="modal-box"><div style="height:230px;background:url('${p.img}') center/cover"></div><p class="kicker" style="margin-top:20px">${p.cat}</p><h3>${p.name}</h3><p style="margin:10px 0;color:#777">${p.price}</p><p style="font-size:11px;color:#777">A carefully considered piece made for timeless interiors. Designed with durable materials and a quiet visual language.</p><div style="display:flex;gap:8px;margin-top:20px"><button class="btn dark" onclick="addWishlist('${p.name}')">Save piece</button><button class="btn" onclick="this.closest('.modal').remove()">Close</button></div></div>`;document.body.appendChild(m)}
function addWishlist(name){let a=JSON.parse(localStorage.getItem('lumina_wishlist')||'[]');if(!a.includes(name))a.push(name);localStorage.setItem('lumina_wishlist',JSON.stringify(a));document.querySelectorAll('.modal').forEach(x=>x.remove());toast(name+' saved to your collection')}
function toggleTheme(){document.body.classList.toggle('dark');localStorage.setItem('lumina_dark',document.body.classList.contains('dark')?'1':'')}
function toggleMenu(){document.querySelector('.nav nav').style.display=document.querySelector('.nav nav').style.display==='flex'?'none':'flex'}
function subscribe(e){e.preventDefault();localStorage.setItem('lumina_email',email.value);document.querySelector('#subMsg').textContent='Thank you. You are on the list.';e.target.reset();toast('Welcome to the Lumina letter')}
function readArticle(e,title){e.preventDefault();toast('Opening: '+title)}
function toast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2400)}
if(localStorage.getItem('lumina_dark'))document.body.classList.add('dark');renderProducts();
