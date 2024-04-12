document.addEventListener('DOMContentLoaded',async(event)=>{
    getHomes()
    // showDetails()
  })
  function getHomes(){ 
  fetch('http://localhost:3000/Kilimani',{
  method:"GET",
  headers:{
    "Content-type":"application/json",
    "Accept":"application/json"
  }
  }
  )
  .then(res => res.json())
  .then(data => { 
    data.forEach(home => { 
    //  console.log(home)
    // })})}
    let card = document.querySelector("#car")
      const hom = document.createElement('div')
      hom.classList.add('cardd')
      hom.innerHTML=`
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="${home.poster}" class="img-fluid" />
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title font-weight-bold"><a>${home.name}</a></h5>
          <ul class="list-unstyled list-inline mb-0">
            <li class="list-inline-item me-0">
              <i class="fas fa-star text-warning fa-xs"> </i>
            </li>
            <li class="list-inline-item me-0">
              <i class="fas fa-star text-warning fa-xs"></i>
            </li>
            <li class="list-inline-item me-0">
              <i class="fas fa-star text-warning fa-xs"></i>
            </li>
            <li class="list-inline-item me-0">
              <i class="fas fa-star text-warning fa-xs"></i>
            </li>
            <li class="list-inline-item">
              <i class="fas fa-star-half-alt text-warning fa-xs"></i>
            </li>
            <li class="list-inline-item">
              <p class="text-muted">4.5 (413)</p>
            </li>
          </ul>
          <p class="mb-2">${home.type}</p>
          <p class="card-text">
          ${home.description}
          </p>
          <p class="card-text">Status:
          ${home.status}
          </p>
          <hr class="my-4" />
          <p class="lead"><strong>Caretaker's contact:${home.caretaker}</strong></p>
          <ul class="list-unstyled list-inline d-flex justify-content-between">
            <li class="list-inline-item me-0">
              <div class="chip me-0">Rent ${home.rent}</div>
            </li>
          </ul>
          <a href="#!" class="btn btn-link link-secondary p-md-1 mb-0">Book</a>
        </div>
        
      `
      card.appendChild(hom)
  
 
  })})}