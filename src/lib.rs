mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum SortType {
    Bubble,
    BubbleOptimizied,
    QuickSort,
}

#[wasm_bindgen]
pub struct Sorter {
    data: Vec<u32>,
    swapped_index: Vec<u32>, // two index in a row need to be swapped, can send tuple through wasm
}

#[wasm_bindgen]
impl Sorter {
    pub fn new(data: Vec<u32>) -> Sorter {
        let swapped_index = Vec::new();
        Sorter {
            data,
            swapped_index,
        }
    }

    pub fn run(&mut self, sort_type: SortType) {
        self.swapped_index.clear();
        match sort_type {
            SortType::Bubble => {
                println!("BUBBLE SORT");
                Sorter::bubble_sort(self);
            },
            SortType::BubbleOptimizied => {
                println!("BUBBLE SORT OPTIMIZED");
                Sorter::bubble_sort_optimized(self);
            },
            SortType::QuickSort => {
                println!("QUICK SORT");
                let first_index = 0;
                let last_index = self.data.len()-1;
                Sorter::quick_sort(self, first_index, last_index);
            }
        }
    }

    pub fn get_data(&mut self) -> Vec<u32> {
        let data = self.data.clone();
        data
    }

    pub fn get_swapped_indexes(&mut self) -> Vec<u32> {
        let indexes = self.swapped_index.clone();
        self.swapped_index.clear();
        indexes
    }

    pub fn update_data(&mut self, data: Vec<u32>) {
        self.data = data;
    }
}

impl Sorter {
    fn bubble_sort(&mut self) {
        // let mut data_sorted = self.data.clone();
        let length = self.data.len();
        for _ in 0..length {
            for j in 0..length-1 {
                if self.data[j+1] < self.data[j] {
                    self.data.swap(j, j+1);
                    self.swapped_index.push(j as u32);
                    self.swapped_index.push((j+1) as u32);
                }
            }
        }
    }

    fn bubble_sort_optimized(&mut self) {
        let mut is_sorted;
        let length = self.data.len();
        for _ in 0..length {
            is_sorted = true;
            for i in 0..length-1 {
                if self.data[i+1] < self.data[i] {
                    self.data.swap(i, i+1);
                    self.swapped_index.push(i as u32);
                    self.swapped_index.push((i+1) as u32);
                    is_sorted = false;
                }
            }
            if is_sorted { return; }
        }
    }

    fn partition(&mut self, first_index: usize, last_index: usize) -> usize {
        let pivot = self.data[last_index];
        let mut i = first_index;
        for j in first_index..last_index {
            if self.data[j] < pivot {
                self.data.swap(i, j);
                self.swapped_index.push(i as u32);
                self.swapped_index.push(j as u32);
                i += 1;
            }
        }
        self.data.swap(i, last_index);
        self.swapped_index.push(i as u32);
        self.swapped_index.push(last_index as u32);
        i
    }

    fn quick_sort(&mut self, first_index: usize, last_index: usize) {
        if first_index < last_index {
            let pivot = Sorter::partition(self, first_index.clone(), last_index.clone());
            let pivot_low = if pivot == 0 { 0 } else { pivot-1 };
            let pivot_high = if pivot >= last_index { last_index } else { pivot+1 };
            Sorter::quick_sort(self, first_index, pivot_low);
            Sorter::quick_sort(self, pivot_high, last_index);
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn bubble() {
        let mut data = vec![0,5,2,3,6,9,4,2,5,7,8,1,5,6];
        let mut sorter = Sorter::new(data.clone());
        sorter.run(SortType::Bubble);
        data.sort();
        let sucess = if data == sorter.get_data() {true} else {false};
        assert_eq!(sucess, true);
    }

    #[test]
    fn bubble_optimized() {
        let mut data = vec![0,5,2,3,6,9,4,2,5,7,8,1,5,6];
        let mut sorter = Sorter::new(data.clone());
        sorter.run(SortType::BubbleOptimizied);
        data.sort();
        let sucess = if data == sorter.get_data() {true} else {false};
        assert_eq!(sucess, true);
    }

    #[test]

    fn quick_sort() {
        let mut data = vec![0,5,2,3,6,9,4,2,5,7,8,1,5,6];
        let mut sorter = Sorter::new(data.clone());
        sorter.run(SortType::QuickSort);
        println!("data: {:?}", data);
        data.sort();
        let sucess = if data == sorter.get_data() {true} else {false};
        assert_eq!(sucess, true);
    }
}