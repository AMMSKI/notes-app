let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes,filters)

document.querySelector('#new').addEventListener('click', function(e) {
    const id = uuidv4()
    notes.push({
        id: id,
        title:'',
        body:''
    })

    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters) 
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

const now = moment()
//now.subtract(1, 'year').subtract(43, 'minutes')
console.log(now.toString())
console.log(now.format('MMMM Do, YYYY'))
console.log(now.fromNow())
const nowTimeStamp = now.valueOf()
console.log(moment(nowTimeStamp).toString())