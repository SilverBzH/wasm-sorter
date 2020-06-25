import {SortType} from "wasm-sorter";


// var dropDownListener = document.getElementById("dropdownMenuButton");
// dropDownListener.addEventListener('click', function() {updateAlgoList()});

export namespace CustomButtons {
    
    export function init() {
        updateAlgoList();
    }

    function updateAlgoList() {
        for (let algo in SortType) {
            if (isNaN(Number(algo))) {
                var item = document.createElement("a");
                item.classList.add("dropdown-item");
                item.href = "#";
                item.innerText = algo;
                document.querySelector(".dropdown-menu").appendChild(item);
            }
        }
    }
}

