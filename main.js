
const headerTabs = document.querySelectorAll('header ul li')

headerTabs.forEach(function(tabs){
  tabs.addEventListener('click', function(){
    headerTabs.forEach(function(tabs){
      tabs.classList.remove('selected-tab')
    })

    tabs.classList.add('selected-tab')
    
  })
})

const sidebarItens = document.querySelectorAll('.sidebar ul li')
console.log(sidebarItens)

sidebarItens.forEach(function(link){
  link.addEventListener('click', function(){
    sidebarItens.forEach(function(link){
      link.classList.remove('selected')
    })

    link.classList.add('selected')
    
  })
})

const text = "David Soares Silva";

let i = 0;
function digitar() {
  if (i < text.length) {
    document.getElementById("text-to_type").innerHTML += text.charAt(i);
    i++;
    setTimeout(digitar, 150);
  }
}

digitar();
