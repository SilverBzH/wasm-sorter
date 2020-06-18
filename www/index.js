import { Sorter, SortType } from "wasm-sorter";

console.log("BUBBLE: " + SortType.Bubble);
console.log("BUBBLE OPTIMIZED: " + SortType.BubbleOptimizied);

//Init Data (Should be random generate with a given size)
let data = new Uint32Array();
data = [0,5,4,8,9,6,2,1,4,5,7,98,6,3,2,1,5,20,15412,54,0,0];
let sorter = Sorter.new(data);
sorter.run(SortType.BubbleOptimizied);
console.log("Data sort: " + sorter.get_data());