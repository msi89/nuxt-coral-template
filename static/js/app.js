$(document).ready(function() {
  getDatas()
  $('#myDatatable').DataTable()
  //input tag value
  $('#btn_get_tags').click(() => {
    var tts = getTages()
    for (var item in tts) {
      window.console.log(tts[item])
      $('#list_tag').append('<li>' + tts[item] + '</li>')
    }
  })
  // table responsive
  document.querySelectorAll('.datagrid').forEach(function(table) {
    let labels = Array.from(table.querySelectorAll('th')).map(function(th) {
      return th.innerText
    })
    table.querySelectorAll('td').forEach(function(td, i) {
      td.setAttribute('data-label', labels[i % labels.length])
    })
  })
})
//get tags input
function getTages() {
  var tags = []
  document.querySelectorAll('.input-tag-item').forEach(itag => {
    tags.push(itag.getAttribute('data-value'))
  })
  return tags
}
// load tables datas dynamically
function getDatas() {
  var dt =
    '<tr><td>Assie marc</td><td>Abidjan</td> <td>58min 40s</td> <td>1h23 58min 40s</td> <td>2eme</td></tr>'
  var dt2 =
    '<tr> <td data-label="Nom">Assie marc</td><td data-label="Ville">Abidjan</td><td data-label="Tour 1">58min 40s</td><td data-label="Tour 2">1h23 58min 40s</td><td data-label="Position">2eme</td> </tr>'
  for (let i = 0; i < 5; i++) {
    $('#table1 tbody').append(dt)
    $('#table2 tbody').append(dt2)
    $('#table3 tbody').append(dt)
    $('#table4 tbody').append(dt)
  }
  for (let i = 0; i < 200; i++) {
    $('#myDatatable tbody').append(
      '<tr><td>' +
        i +
        '</td> <td>Oreli</td><td>oreli@mail.ci</td> <td>+22507836510</td> <td>Cocody, 7me tranche</td></tr>'
    )
  }
}
