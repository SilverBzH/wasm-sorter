import {SortType, Sorter} from "wasm-sorter";
import { Utils } from "./utils"

// var dropDownListener = document.getElementById("dropdownMenuButton");
// dropDownListener.addEventListener('click', function() {updateAlgoList()});

export class Printer {

    readonly NB_SAMPLE_MAX = 1000;
    readonly MAX_VALUE_MAX = 1000*1000;

    sorter: Sorter;
    sortType: SortType;
    maxValue: number;


    constructor(sorter: Sorter, maxValue: number) {
        this.sorter = sorter;
        this.maxValue = maxValue;
        this.sortType = SortType.Bubble;
        this.initAlgoList();
        this.initEventListener();
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
            console.log("Algo used: " + this.sortType);
            this.sorter.run(this.sortType);
            Utils.printBars(this.sorter.get_data(), this.maxValue);
        });

        var randomListener = document.getElementById("random_button");
        randomListener.addEventListener('click', () => {
            let nb_samples = Math.floor(Math.random() * Math.floor(this.NB_SAMPLE_MAX));
            this.maxValue = Math.floor(Math.random() * Math.floor(this.MAX_VALUE_MAX));
            let data = Utils.generateRandomData(nb_samples, this.maxValue);
            this.sorter.update_data(data);
            Utils.printBars(data, this.maxValue);
        });
    }
}