
'use strict'
renderProject()
renderModals()

function renderProject() {
    var projects = getProjects()
    // console.log(projects)
    var strHtmls = `
    <div class="row">`

    // console.log(strHtmls)
    var temp = projects.map(proj => {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
         <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
      <div class="portfolio-hover">
      <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
      </div>
      </div>
      <img class="img-fluid" src="img/portfolio/0${proj.id}-thumbnail.jpg" alt="">
      </a>
      <div class="portfolio-caption">
      <h4>${proj.name}</h4>
        <p class="text-muted">${proj.desc}</p>
   </div> </div> `
    })

    var temp1 = temp.join('')
    strHtmls += temp1
    strHtmls += `</div>`

    var elContainer = document.getElementById('portfolio')
    elContainer.innerHTML = strHtmls
}


function renderModals() {
    const project = getProjects()
    var strHtmls = project.map(project => {
        return ` <h2>${project.name}</h2>
        <p class="item-intro text-muted">${project.desc}.</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/0${project.id}-full.jpg" alt="">
        <p>${project.desc}</p>
        <ul class="list-inline">
          <li>Date: ${project.publishedAt}</li>
          <li>Client: ${project.url}</li>
          <li>Category:  ${project.labels}</li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`
    })

    var elModal = document.getElementById('modal')
    elModal.innerHTML = strHtmls.join('')
}

function onOpenModal(proj) {

}