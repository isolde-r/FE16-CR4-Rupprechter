let duties = JSON.parse(tasks);
let taskOverview = document.querySelector(".cards");

function printCard() {
    taskOverview.innerHTML = "";
    for (let i = 0; i < duties.length; i++) {
        taskOverview.innerHTML += `<div class="shadow p-3 mb-5 bg-body rounded col-lg-3 col-md-5 col-s-12 m-0 
        container-fluid d-flex flex-column justify-content-between">

    
        <header class="cardheader d-flex justify-content-between my-2">
            <button type="button" class="btn btn-info btn-sm text-white">Task</button>
            <div>
                <i class="bi bi-bookmark"></i>
                <i class="bi bi-three-dots-vertical"></i>
            </div>
        </header>
        <img src="${duties[i].image}" class="card-img-top img-thumbnail" alt="...">
        <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${duties[i].taskName}</h5>
            <p class="card-text">${duties[i].description}</p>
            <p>Location: ${duties[i].location} </p>
            <div>
            <hr>
                <p class="d-inline me-2"><i class="bi bi-exclamation-triangle-fill me-2 "></i>Priority Level:</p>
                <button type="button" class="btn btn-sm btn-success prio-button">${duties[i].importance}</button>
                <hr>
            </div>
            <div class="text-end align-self-end">
                <button type="button" class="btn btn-danger"><i class="bi bi-trash me-2"></i>Delete</button>
                <button type="button" class="btn btn-success"><i
                        class="bi bi-check2-circle me-2"></i>Done</button>
            </div>
        </div>
    
    </div>`

    }

    let prioButtons = document.querySelectorAll(".prio-button");

    prioButtons.forEach((item, i) => {
        item.addEventListener("click", () => {
            if (duties[i].importance < 5) {
                duties[i].importance++;
                item.innerHTML = duties[i].importance;
                colorize(duties[i].importance, item);
            } else {
                item.innerHTML = `
                <div class="alert alert-danger" role="alert"> Maximum priority reached, just DO THE TASK!</div>`
            }
        })
        colorize(duties[i].importance, item);
    })
}
printCard();


function colorize(newPrio, prioButton) {
    if (newPrio < 2) {
        prioButton.setAttribute("class", "btn btn-sm bg-success prio-button")
    } else if (newPrio < 4) {
        prioButton.setAttribute("class", "btn btn-sm bg-warning prio-button")
    } else {
        prioButton.setAttribute("class", "btn btn-sm bg-danger prio-button")
    }
}

let sortButton = document.querySelector(".sortMe");
sortButton.addEventListener("click", sortPrint);

function sortPrint() {
    console.log("sortPrint")
    duties = duties.sort(sortImp);
    printCard();
}

function sortImp(a, b) {
    let difference = b.importance - a.importance
    // console.log(`${b.taskName}(${b.importance}) - ${a.taskName}(${a.importance}) = ${difference}`);
    return difference;
}





