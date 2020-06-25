import { Sorter, SortType } from "wasm-sorter";
import {printBars, getRandomizeData} from "./src/utils.js"
import("./src/dropdown_algo.js");

//Init Data (Should be random generate with a given size)
let data = new Uint32Array();
data = getRandomizeData(5, 100);

let sorter = Sorter.new(data);
sorter.run(SortType.BubbleOptimizied);
// printBars(data);
printBars(sorter.get_data());

//TODO: 
// RETURN un tableau d'index depuis le rust pour afficher l'évolution du tri en temps réel