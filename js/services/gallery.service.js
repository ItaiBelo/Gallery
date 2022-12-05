
gProject = []

_createProjects()
function _createProjects() {
    gProject.push(_createProject(1, 'pacman', 'title', 'long desc', 1669030088, 'labels'))
    gProject.push(_createProject(2, 'mine sweeper', 'title', 'long desc', 1669202888, 'labels'))
    gProject.push(_createProject(3, 'ball board', 'title', 'long desc', 1668943688, 'labels'))
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
    return gProject
}