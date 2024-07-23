
const clicked = document.getElementById('clicked');

button1.addEventListener('click', (event) => 
    {
        if(event.target.tagname==='BUTTON'){
     
    console.log(`Button clicked! ID: ${event.target.id}`);
    
    }
});

button1.addEventListener('click', () => 
    {
        button1.style.backgroundColor = 'red';
        button2.style.backgroundColor = 'white'; 
        button3.style.backgroundColor = 'white';
        button4.style.backgroundColor = 'white';
});

button2.addEventListener('click', () => 
    {
        button1.style.backgroundColor = 'white'; 
        button2.style.backgroundColor = 'blue';
        button3.style.backgroundColor = 'white';
        button4.style.backgroundColor = 'white';
});

button3.addEventListener('click', () => 
    {
        button1.style.backgroundColor = 'white'; 
        button2.style.backgroundColor = 'white';
        button3.style.backgroundColor = 'green';
        button4.style.backgroundColor = 'white';
});

button4.addEventListener('click', () => 
    {
        button1.style.backgroundColor = 'white'; 
        button2.style.backgroundColor = 'white';
        button3.style.backgroundColor = 'white';
        button4.style.backgroundColor = 'orange';
    });