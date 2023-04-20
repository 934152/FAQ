/*
Need to add .show-text class when the plus icon is clicked
Need to remove .show-text icon when the minus icon is clicked
*/


// traversing the dom (option 1)

/*
const btns = document.querySelectorAll('.question-btn')


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
       const question = e.currentTarget.parentElement.parentElement;
       question.classList.toggle('show-text');
    })
})

*/

//using selectors inside the element (Option 2)
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    //console.log(question);
    const btn = question.querySelector('.question-btn')
    btn.addEventListener('click', () => {

        questions.forEach((item) => {
            if (item !== question){
                item.classList.remove('show-text');
            };
        });


        question.classList.toggle('show-text')
    });
});








