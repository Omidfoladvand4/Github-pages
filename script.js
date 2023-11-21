document.addEventListener('click' , (e) => {

  let span = document.createElement('span')
  
  span.style.left = e.clientX + 'px';
  span.style.top = e.clientY + 'px';
  span.classList.add('snowflake')
  let size = Math.floor(Math.random() * 130)
  span.style.width = size + 'px'
  span.style.height = size + 'px'
  

  setTimeout(() => {
    span.remove()
  } , 1500)

  document.body.append(span)


  //   random background Color

  let red , blue , green 
   red = Math.floor(Math.random() * 256)
   blue = Math.floor(Math.random() * 256)
   green = Math.floor(Math.random() * 256)

   document.body.style.background = `rgba(${red} , ${blue} , ${green})`



})

let cursorElm = document.createElement('span')
cursorElm.classList.add('cursor')
document.addEventListener('mousemove' , (e) => {
    cursorElm.style.left = e.clientX + 'px'
    cursorElm.style.top = e.clientY + 'px'

    document.body.append(cursorElm)

    document.addEventListener('mouseleave' , () => {
        cursorElm.remove()
    })

})