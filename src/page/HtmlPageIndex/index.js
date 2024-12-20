import React from 'react'
import 'bootstrap/dist/js/bootstrap.js'

export default function HtmlPageIndex() {
  return (
    <div className="container text-center" style={{ width: "100%" }}>
      <div className="row">
        <div className="col">
          <div className="accordion m-auto" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Javascript 高雄旅遊網
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <a className="btn btn-outline-primary" target="_blank" href={process.env.PUBLIC_URL + "/hexschool/js/index.html"} > Javascript 高雄旅遊網</a>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  Javascript BMI
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  <a className="btn btn-outline-primary" target="_blank" href={process.env.PUBLIC_URL + "/hexschool/js-BMI/index.html"} > Javascript BMI</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
