import { Sorter, SortType } from "wasm-sorter"
import { Utils } from "./utils"
import { Printer } from "./printer"

//Init Data
let data = new Uint32Array();

//default Init values, can be changed by the user later
let nb_samples = 100;
let maxValue = 500;
data = Utils.generateRandomData(nb_samples, maxValue);
Utils.printBars(data, maxValue);

//Init Sorter and Printer
let sorter = Sorter.new(data);
let printer = new Printer(sorter, maxValue, data);

//Updating algorithm via dropDowm menu button
$(document).ready(function() {
    $("#dropDown-sort a").click(function() {
        let sortName: string = $(this).text();
        switch(sortName) {
            case "Bubble":
                printer.setSortType(SortType.Bubble);
                break;
            case "BubbleOptimizied":
                printer.setSortType(SortType.BubbleOptimizied);
                break;
            case "QuickSort":
                printer.setSortType(SortType.QuickSort);
                break;
            default:
                console.log("Unknown algorithm");
                break;
        }
        document.getElementById("dropdownMenuButton").innerHTML = sortName;
    });
});
