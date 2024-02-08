import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tasks"
export default class extends Controller {
  connect() {
    
  }

  toggle(e){
    const id = e.target.dataset.id
    const csrfToken = document.querySelector("meta[name='csrf-token']").content
    const url = `/tasks/${id}/toggle`

  fetch(url, {
    method: "PATCH",
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      "X-CSRF-Token": csrfToken,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      completed: e.target.checked
    })
  })
  .then(response => response.json())
  .then((data) => {
    alert(data.message)
  })
  }
}
