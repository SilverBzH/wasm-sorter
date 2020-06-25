import { Sorter, SortType } from "wasm-sorter";

//Generate sort algorithm available for the dropwDown button
for (let algo in SortType) {
    if (isNaN(Number(algo))) {
        var item = document.createElement("a");
        item.classList = "dropdown-item";
        item.href = "#";
        item.innerText = algo
        document.querySelector(".dropdown-menu").appendChild(item);
    }
}