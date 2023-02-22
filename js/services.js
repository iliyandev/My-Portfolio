
(function(){
    const titleServices = [...document.querySelectorAll('.services__title')];
    console.log(titleServices)

    titleServices.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('services__padding--add');
            question.children[0].classList.toggle('services__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();