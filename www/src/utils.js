export function print_bars(data) {
    for (var i=0 ; i<data.length ; i++) {
        //create mother div
        var mother_div = document.createElement("div");
        mother_div.classList = "progress";
    
        //create child div
        var child_div = document.createElement("div");
        child_div.classList = "progress-bar bg-info";
        child_div.role
        child_div.style = "width: " + data[i] + "%"
        
        mother_div.appendChild(child_div);
        document.querySelector(".canvas-progress-bar").appendChild(mother_div);
    
        console.log("create progress bar with data: " + data[i]);
    }
}