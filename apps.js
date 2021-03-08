
    const enlaces = document.querySelectorAll('#categorias a');
    const activo = document.querySelectorAll('.categorias a');
    enlaces.forEach((elemento)=>{
        // console.log(elemento);
        elemento.addEventListener('click', (evento) =>{
            evento.preventDefault();
            enlaces.forEach((enlaces) =>  enlaces.classList.remove('active'));
            evento.target.classList.add('active');
    
            const categoria = evento.target.innerHTML.toLowerCase();
            console.log(categoria);
            
        });
    });






