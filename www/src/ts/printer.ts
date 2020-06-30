import {SortType, Sorter} from "wasm-sorter";
import { Utils } from "./utils"

// var dropDownListener = document.getElementById("dropdownMenuButton");
// dropDownListener.addEventListener('click', function() {updateAlgoList()});

export class Printer {

    readonly NB_SAMPLE_MAX = 100;
    readonly MAX_VALUE_MAX = 1000*1000;
    readonly DELAY         = 10; // ms

    sorter: Sorter;
    sortType: SortType;
    maxValue: number;
    data: Uint32Array;
    isSorted: boolean;

    constructor(sorter: Sorter, maxValue: number, data: Uint32Array) {
        this.sorter = sorter;
        this.maxValue = maxValue;
        this.sortType = SortType.Bubble;
        this.initAlgoList();
        this.initEventListener();
        this.data = data;
        this.isSorted = false;
    }

    public setSortType(type: SortType) {
        this.sortType = type;
    }

    private initAlgoList() {
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

    private initEventListener() {
        //Add event listener on start button
        var startListener = document.getElementById("start_button");
        startListener.addEventListener('click', () => {
            if (!this.isSorted) {
                console.log("Algo used: " + this.sortType);
                this.updateAndPrintBars();
                this.isSorted = true;
            }
        });

        var randomListener = document.getElementById("random_button");
        randomListener.addEventListener('click', () => {
            this.maxValue = Math.floor(Math.random() * Math.floor(this.MAX_VALUE_MAX));
            let data = Utils.generateRandomData(this.NB_SAMPLE_MAX, this.maxValue);
            this.data = data;
            this.sorter.update_data(data);
            Utils.printBars(data, this.maxValue);
            this.isSorted = false;
        });
    }
    
    private async updateAndPrintBars() {
        Utils.printBars(this.data, this.maxValue);
        this.sorter.run(this.sortType);
        let indexes: Uint32Array = this.sorter.get_swapped_indexes();
        let nb_swap: number = indexes.length/2;
        var j: number = 0;
        for (var i=0 ; i<nb_swap ; i++) {
            await this.delayedPrint(indexes[j], indexes[j+1]);
            j+=2;
        }
    }

    private async delayedPrint(index_a: number, index_b: number) {
        await this.delay();
        var temp = this.data[index_a];
        this.data[index_a] = this.data[index_b];
        this.data[index_b] = temp;
        Utils.printBarsColoredIndex(this.data, this.maxValue, index_a, index_b);
    }

    private async delay() {
        return new Promise(resolve => setTimeout(resolve, this.DELAY));
    }
}