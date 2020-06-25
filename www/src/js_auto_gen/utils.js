"use strict";
exports.__esModule = true;
exports.Utils = void 0;
var Utils;
(function (Utils) {
    function printBars(data, max_value) {
        for (var i = 0; i < data.length; i++) {
            var mother_div = document.createElement("div");
            mother_div.classList.add("progress");
            var child_div = document.createElement("div");
            child_div.classList.add("progress-bar");
            child_div.setAttribute("style", "width: " + data[i] * 100 / max_value + "%");
            mother_div.appendChild(child_div);
            document.querySelector(".canvas-progress-bar").appendChild(mother_div);
        }
    }
    Utils.printBars = printBars;
    function getRandomizeData(nb_data, max_value) {
        var data = new Array();
        for (var i = 0; i < nb_data; i++) {
            var d = Math.floor(Math.random() * Math.floor(max_value));
            data.push(d);
        }
        return Uint32Array.from(data);
    }
    Utils.getRandomizeData = getRandomizeData;
})(Utils = exports.Utils || (exports.Utils = {}));
