import { Sorter, SortType } from "wasm-sorter"
import { Utils } from "./utils"
import { CustomButtons } from "./button_action"

//Init button
CustomButtons.init();

//Init Data
let data = new Uint32Array();
let nb_samples = 10;
let max_value = 500;
data = Utils.getRandomizeData(10, 500);

let sorter = Sorter.new(data);
sorter.run(SortType.BubbleOptimizied);
Utils.printBars(data, max_value);
