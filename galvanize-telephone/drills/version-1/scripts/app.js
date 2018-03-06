const apiUrl = 'https://quiet-bayou-99554.herokuapp.com/api/v1/contacts'
fetch(apiUrl)
  .then(response => response.json())
  .then(response => {
    console.log(response)
    return response
  })
  .then(response => {
    renderData(response)
  })

function renderData(response) {
  return response.data.forEach(data => {
    var list = document.querySelector('#characters')
    var $li = document.createElement('li')
    list.appendChild($li)

    var $img = document.createElement('img')
    $img.src = data.imageURL
    $li.appendChild($img)

    var $span = document.createElement('span')
    $span.textContent = data.name && data.phone
    $li.appendChild($span)

    var $p = document.createElement('p')
    $p.textContent = data.message
    $li.appendChild($p)

    var $a = document.createElement('a')
    $a.textContent = `Leave ${data.name} a message`
    $a.href = `contact.html?character=${data.name}`
    $li.appendChild($a)
  })
}
// function renderImage($img) {
//   var $img = document.createElement('img')
//   $img.src = data.imageURL
//   return $img
//   console.log($img)
// }
