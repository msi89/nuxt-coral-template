//document.addEventListener('DOMContentLoaded', function() {
var InputTagItemNumber = 0
var InputTagItems = []

function addInputTagItem(tag) {
  InputTagItems[InputTagItemNumber] = tag
  var parent = document.querySelector('.input-tag-content')
  var newTag =
    '<span id="tagItem' +
    InputTagItemNumber +
    '" class="input-tag-item" data-indice="' +
    InputTagItemNumber +
    '" data-value="' +
    tag +
    '">' +
    tag +
    '<i>x</i></span>'
  parent.insertAdjacentHTML('beforeend', newTag)
  InputTagItemNumber++
}

// table responsive
document.querySelectorAll('.datagrid').forEach(function(table) {
  let labels = Array.from(table.querySelectorAll('th')).map(function(th) {
    return th.innerText
  })
  table.querySelectorAll('td').forEach(function(td, i) {
    td.setAttribute('data-label', labels[i % labels.length])
  })
})

window.addEventListener('click', function(e) {
  //remove tag input
  document.querySelectorAll('.input-tag-item i').forEach(itag => {
    if (itag.contains(e.target)) {
      var itag_id = itag.parentNode
      var itag_indice = itag_id.getAttribute('data-indice')
      itag_id.parentNode.removeChild(itag_id)
      InputTagItems.splice(itag_indice, 1)
      InputTagItemNumber--
    }
  })

  // dropdown
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    if (dropdown.contains(e.target)) {
      dropdown.classList.toggle('is-active')
    } else {
      dropdown.classList.remove('is-active')
    }
  })

  //input tag
  document.addEventListener('keyup', function(e) {
    var ti = document.getElementById('tag_input')
    if (ti.contains(e.target)) {
      //     /*space =32 ,=188 ;=59*/

      var tag = ''
      if (e.keyCode == '188') {
        tag = ti.value.replace(',', '')
        if (tag != '') {
          addInputTagItem(tag)
          ti.value = ''
        }
      }
      if (e.keyCode == '190') {
        tag = ti.value.replace(';', '')
        if (tag != '') {
          addInputTagItem(tag)
          ti.value = ''
        }
      }
      if (e.keyCode == '32') {
        /* var tag = this.value.replace(/\s/g, ""); if(tag !="") { 	addInputTagItem(tag); 	this.value =''; }*/
      }
    }
  })

  //accordion
  document.querySelectorAll('.menu-list li a').forEach(atg => {
    if (atg.contains(e.target)) {
      atg.classList.add('switched')
      if (atg.getAttribute('data-expand') == 'true') {
        atg.classList.toggle('collapsed')
        atg.classList.toggle('collapsed')
        var panel = atg.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.display = 'none'
          panel.style.maxHeight = null
        } else {
          panel.style.display = 'block'
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      }
    } else {
      atg.classList.remove('switched')
    }
  })

  //others
})
//})
