const questions = document.querySelectorAll(".card-question");

questions.forEach((question) =>{
    const questionBtn = question.querySelector(".question-btn");
    
    questionBtn.classList.toggle("rotate");
    questionBtn.addEventListener("click", ()=>{
        questions.forEach((item)=>{
            if (item != question){
                item.classList.remove("show");
            }
        });
        question.classList.toggle("show");
    });
});
