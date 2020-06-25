export function printBars(data) {
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
    }
}

export function getRandomizeData(nb_data, max_value) {
    var data = new Array();
    for (var i=0; i<nb_data ; i++) {
        let d = Math.floor(Math.random() * Math.floor(max_value));
        data.push(d);
    }
    return Uint32Array.from(data);
}