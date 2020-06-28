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
}

#[wasm_bindgen]
pub struct Sorter {
    data: Vec<u32>,
    bubble_swap: Vec<u32>, // two index in a row need to be swapped, can send tuple through wasm
}

#[wasm_bindgen]
impl Sorter {
    pub fn new(data: Vec<u32>) -> Sorter {
        let bubble_swap = Vec::new();
        Sorter {
            data,
            bubble_swap,
        }
    }

    pub fn run(&mut self, sort_type: SortType) {
        match sort_type {
            SortType::Bubble => {
                Sorter::bubble_sort(self);
            },
            SortType::BubbleOptimizied => {
                Sorter::bubble_sort_optimized(self);
            }
        }
    }

    pub fn get_data(&mut self) -> Vec<u32> {
        let data = self.data.clone();
        data
    }

    pub fn get_bubble_indexes(&mut self) -> Vec<u32> {
        let indexes = self.bubble_swap.clone();
        self.bubble_swap.clear();
        indexes
    }

    pub fn update_data(&mut self, data: Vec<u32>) {
        self.data = data;
    }
}

impl Sorter {
    fn bubble_sort(&mut self) {
        println!("BUBBLE SORT");
        // let mut data_sorted = self.data.clone();
        let length = self.data.len();
        for _ in 0..length {
            for j in 0..length-1 {
                if self.data[j+1] < self.data[j] {
                    self.data.swap(j, j+1);
                    self.bubble_swap.push(j as u32);
                    self.bubble_swap.push((j+1) as u32);
                }
            }
        }
    }

    fn bubble_sort_optimized(&mut self) {
        println!("BUBBLE SORT OPTIMIZED");
        let mut is_sorted;
        let length = self.data.len();
        for _ in 0..length {
            is_sorted = true;
            for i in 0..length-1 {
                if self.data[i+1] < self.data[i] {
                    self.data.swap(i, i+1);
                    self.bubble_swap.push(i as u32);
                    self.bubble_swap.push((i+1) as u32);
                    is_sorted = false;
                }
            }
            if is_sorted { return; }
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
}