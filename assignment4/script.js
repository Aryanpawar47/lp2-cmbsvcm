
let data = [
    {name:"AI Workshop", category:"Tech", date:"2026-12-10"},
    {name:"Music Concert", category:"Music", date:"2026-12-15"},
    {name:"Cricket Match", category:"Sports", date:"2026-12-20"},
    {name:"Web Workshop", category:"Tech", date:"2026-12-05"}
];


function show(){
      let s = document.getElementById('search').value.toLowerCase();
      let c = document.getElementById('category').value;
      let d = document.getElementById('date').value;
      let sort = document.getElementById('sort').value;


      let output = "";
      let list = [...data];
      let count = 0;
   
       if(sort == "asc"){
          list.sort((a,b)=> a.date<b.date ? 1 : -1);
       }

       if(sort == "desc"){
          list.sort((a,b)=> a.date>b.date ? 1 : -1);
       }

       for(let e of list){
          if(e.name.toLowerCase().includes(s)&&(c == "" || c == e.category) && (d == "" || d == e.date)){
             output += `<div class="card">
               <h3>${e.name}</h3>
               <h3>${e.category}</h3>
               <h3>${e.date}</h3>
             </div>`

             count++;
          }

       }

       if(count == 0){
         
       }

       document.getElementById('events').innerHTML = output;

}

show();