// your code here
document.addEventListener("DOMContentLoaded", () => {

  const SubmitHandler = () => {
    document.addEventListener('submit', e => {
      e.preventDefault()
      const tasks = document.querySelector('#tasks')

      const form = e.target

      const taskLi = document.createElement('li')
      const desc = form[0].value
      taskLi.innerText = desc

  

      tasks.innerHTML = `
      <span>${desc}</span>
      <button>x</button>
      `

      tasks.append(taskLi);
    })
  }

const clickHandler = () => {
  document.addEventListener('click', e => {
    if(e.target.matches('#btn')) {
      const button = e.target
      const buttonLi = button.parentElement
      buttonLi.remove();
    }
  })
}
  

    clickHandler();
    SubmitHandler(); 
});