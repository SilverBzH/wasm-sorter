import { Sorter, SortType } from "wasm-sorter"
import { Utils } from "./utils"
import { Printer } from "./printer"

//Init Data
let data = new Uint32Array();

//default Init values, can be changed by the user later
let nb_samples = 10;
let maxValue = 500;
data = Utils.getRandomizeData(nb_samples, maxValue);
Utils.printBars(data, maxValue);

//Init Sorter and Printer
let sorter = Sorter.new(data);
let printer = new Printer(sorter, maxValue);