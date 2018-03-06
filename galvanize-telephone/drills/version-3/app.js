function getForm() {
  fetch('https://secure-eyrie-78012.herokuapp.com/roles')
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      populateForm(data)
      return data
    })
}
getForm()
function populateForm(data) {}
