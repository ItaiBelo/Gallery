
var gProjects = []

_createProjects()
function _createProjects() {
    gProjects.push(_createProject(1, 'Pacman', 'title', 'We all know that game right?', 'https://itaibelo.github.io/Pacman/', 1669030088, 'Matrixes,Mouse and keyboard events'))
    gProjects.push(_createProject(2, 'mine sweeper', 'title', 'Classy one, try no to explode ', 'https://minesweeper.online/', 1669202888, 'Matrixes,Mouse events'))
    gProjects.push(_createProject(3, 'ball board', 'title', 'Lets see if you can catch them all', 'https://itaibelo.github.io/Ball-Board/', 1668943688, 'Matrixes,Mouse and keyboard events'))
}

function _createProject(id, name, title, desc, url, publishedAt, labels) {
    var project =
    {
        id,
        name,
        title,
        desc,
        url,
        publishedAt,
        labels,
    }
    return project
}

function getProjects() {
    return gProjects
}

function getProjById(projId) {
    return gProjects.find(proj => proj.id === projId)
}

function sendEmail() {
    var emailText = document.getElementById("email-text").value
    var emailAddress = document.getElementById("email-address").value
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=subject&body=${emailText}&bcc=itaibe2904@gmail.com`, '_blank')
}

function openUrl(projUrl) {
    console.log(projUrl)
    window.open(`${projUrl}`, '_blank')
}