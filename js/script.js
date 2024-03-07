// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: March 2024
// This file contains the JS functions for index.html

let length = 5
let width = 3
const area = length*width
const perimeter = 2*(length+width)

function myButtonClicked() {
  document.getElementById("area-of-rectangle").innerHTML = area + "cm"
  document.getElementById("perimeter-of-rectangle").innerHTML = perimeter + "cm"
}
