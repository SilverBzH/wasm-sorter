export namespace Utils {
    export function printBars(data: Uint32Array, max_value: number) {
        //Clear the canvas first
        var canvas = document.getElementById("canvas");
        canvas.innerHTML = "";
        
        //print the new canvas
        for (var i=0 ; i<data.length ; i++) {
            var mother_div = document.createElement("div");
            mother_div.classList.add("progress");
            
            var child_div = document.createElement("div");
            child_div.classList.add("progress-bar");
            child_div.setAttribute("style", "width: " + data[i]*100/max_value + "%");
            mother_div.appendChild(child_div);
            document.querySelector(".canvas-progress-bar").appendChild(mother_div);
        }
    }

    export function printBarsColoredIndex(data: Uint32Array, max_value: number, index_a: number, index_b: number) {
        //Clear the canvas first
        var canvas = document.getElementById("canvas");
        canvas.innerHTML = "";
        
        //print the new canvas
        for (var i=0 ; i<data.length ; i++) {
            var mother_div = document.createElement("div");
            mother_div.classList.add("progress");
            
            var child_div = document.createElement("div");
            child_div.classList.add("progress-bar");
            child_div.setAttribute("style", "width: " + data[i]*100/max_value + "%");
            child_div.id = i.toString();
            mother_div.appendChild(child_div);
            document.querySelector(".canvas-progress-bar").appendChild(mother_div);

            if (i == index_a || i == index_b) {
                console.log("Color index" + i + "to red");
                $("#" + i.toString()).addClass("progress-bar-red");
            }
        }
    }

    export function generateRandomData(nb_samples: number, max_value: number) : Uint32Array {
        let data = new Array();
        for (var i=0 ; i<nb_samples ; i++) {
            let d = Math.floor(Math.random() * Math.floor(max_value));
            data.push(d); 
        }
        return Uint32Array.from(data);
    }
}