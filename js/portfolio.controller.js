
'use strict'
renderProject()

function renderProject() {
    var projects = getProjects()
    // console.log(projects)
    var strHtmls = `
    <div class="row">`

    // console.log(strHtmls)
    var projRenderStrs = projects.map(proj => {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
         <a class="portfolio-link" data-toggle="modal" onclick="onOpenModal(${proj.id})" href="#portfolioModal1">
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

    strHtmls += projRenderStrs.join('')
    strHtmls += `</div>`

    var elContainer = document.getElementById('portfolio')
    elContainer.innerHTML = strHtmls
}

function renderModal(project) {
    var strHtml =
        ` <h2>${project.name}</h2>
        <p class="item-intro text-muted">${project.desc}.</p>
        <img class="img-fluid d-block mx-auto" src="img/portfolio/0${project.id}-full.jpg" alt="">
        <p>very long description</p>
        <ul class="list-inline">
          <li>Published at: ${project.publishedAt}</li>
          <br>
          <li>Labels:  ${project.labels}</li>
          <br>
          <li><button type="button" class="btn btn-success" onclick="openUrl('${project.url}')">try it out</button></li>
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`

    var elModal = document.getElementById('modal')
    // console.log(elModal)
    elModal.innerHTML = strHtml
    // console.log(elModal)
}

function onOpenModal(projId) {
    var proj = getProjById(projId)
    renderModal(proj)
}

function onSendEmail() {
    sendEmail()
}