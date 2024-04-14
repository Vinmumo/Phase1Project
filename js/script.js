document.addEventListener('DOMContentLoaded',async(event)=>{
    fetchDataAndSetupButton('kil', 'https://phase1project-qtim.onrender.com/Kilimani');
    fetchDataAndSetupButton('park', 'https://phase1project-qtim.onrender.com/Parklands');
    fetchDataAndSetupButton('Lang', 'https://phase1project-qtim.onrender.com/Langata');
    fetchDataAndSetupButton('upper', 'https://phase1project-qtim.onrender.com/pperhill');
    fetchDataAndSetupButton('river', 'https://phase1project-qtim.onrender.com/RiverRoad');
      })
      // Function to clear previous contents and add new contents
    // Function to clear previous contents and add new contents
    function updateCardContent(homes) {
        let card = document.querySelector("#car");
        // Clear previous content
        card.innerHTML = '';
    
        // Iterate through each home and create a new div for each
        homes.forEach(home => {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cardd');
            newDiv.innerHTML = `
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img width=300px height=300px src="${home.poster}" class="img-fluid" />
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
                  <!-- Additional stars and content -->
                </ul>
                <p class="mb-2">${home.type}</p>
                <p class="card-text">${home.description}</p>
                <p class="card-text status-text">Status: ${home.status}</p>
                <hr class="my-4" />
                <p class="lead"><strong>Caretaker's contact: ${home.caretaker}</strong></p>
                <ul class="list-unstyled list-inline d-flex justify-content-between">
                    <li class="list-inline-item me-0">
                        <div class="chip me-0">Rent ${home.rent}</div>
                    </li>
                </ul>
                <button class="btnn">Book</button>
              </div>
            `;
            card.appendChild(newDiv);
    
            let bookButton = newDiv.querySelector('.btnn');
            let statusText = newDiv.querySelector('.status-text');
            bookButton.addEventListener('click', function() {
                const newStatus = bookButton.textContent === "Book" ? "Booked" : "Available";
                bookButton.textContent = newStatus === "Booked" ? "Booked" : "Book";
                statusText.textContent = `Status: ${newStatus}`;
                // API Call to update the server
                fetch(`${baseURL}/${home.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ status: newStatus })
                })
                .then(response => response.json())
                .then(data => console.log("Updated Successfully", data))
                .catch(error => console.error('Error updating:', error));
            });
        });
    }
    
    function fetchDataAndSetupButton(buttonId, url) {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            const button = document.getElementById(buttonId);
            button.addEventListener("click", () => {
                updateCardContent(data); // Pass the entire data array to the update function
            });
        });
    }
    
    