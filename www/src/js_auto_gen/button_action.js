"use strict";
exports.__esModule = true;
exports.CustomButtons = void 0;
var wasm_sorter_1 = require("wasm-sorter");
// var dropDownListener = document.getElementById("dropdownMenuButton");
// dropDownListener.addEventListener('click', function() {updateAlgoList()});
var CustomButtons;
(function (CustomButtons) {
    function init() {
        updateAlgoList();
    }
    CustomButtons.init = init;
    function updateAlgoList() {
        for (var algo in wasm_sorter_1.SortType) {
            if (isNaN(Number(algo))) {
                var item = document.createElement("a");
                item.classList.add("dropdown-item");
                item.href = "#";
                item.innerText = algo;
                document.querySelector(".dropdown-menu").appendChild(item);
            }
        }
    }
})(CustomButtons = exports.CustomButtons || (exports.CustomButtons = {}));
