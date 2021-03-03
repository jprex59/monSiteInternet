const counter = document.getElementById('counter')


const updateCounter = async () => {
    const data =  await fetch('https://api.countapi.xyz/hit/JeanParis-projet-monsiteinternet/visits')
    const count = await data.json();
    /*console.log(count);*/
    counter.innerHTML = count.value;
}

updateCounter()