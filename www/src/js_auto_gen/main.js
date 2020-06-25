"use strict";
exports.__esModule = true;
var wasm_sorter_1 = require("wasm-sorter");
var utils_1 = require("./utils");
var button_action_1 = require("./button_action");
//Init button
button_action_1.CustomButtons.init();
//Init Data
var data = new Uint32Array();
var nb_samples = 10;
var max_value = 500;
data = utils_1.Utils.getRandomizeData(10, 500);
var sorter = wasm_sorter_1.Sorter["new"](data);
sorter.run(wasm_sorter_1.SortType.BubbleOptimizied);
utils_1.Utils.printBars(data, max_value);
