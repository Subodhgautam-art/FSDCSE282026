//console.log("hi");
const root =document.getElementById('root');
console.log(root);
const button =document.getElementById('btn')
console.log(button);
const h2=document.createElement('h2');
const h1=document.createElement('h1');
//const img=document.createElement('img');
const loader=document.createElement('h1');
loader.innerHTML='Loading data....';
function showData() {
  try{
    loader.innerHTML='<h2>Loading data.......</h2>';
    root.appendChild(loader);
    const serverData = await fetch('https://fakestoreapi.com/products')
    const jsonData=await serverData.json();
   
    
    }
    //h1.innerHTML='<h2 styles=color:red>${jsonData[0].tittle}</h2>'
 // h2.innerText ='welcome ';
  //root.appendChild(h2);
  //h1.innerHTML ='well well ';
  //root.appendChild(h1);
  //img.src='https://wallpaperaccess.com/full/268146.jpg';
 // img.setAttribute('height',200);
 // img.setAttribute('width',200);
  //root.appendChild(img);
 // alert("hiiiii");
}catch(e){
  console.log(e)
}
finally{
  root.removeChild(loader)
}
button.addEventListener('click',showData);