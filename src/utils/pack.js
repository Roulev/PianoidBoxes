// src/utils/pack.js

/**
 * Packs items into boxes by capacity
* @param {Array} items - an array, each element of which contains the length at position [3]
* @param {number} boxCapacity - the maximum capacity of a box (default 10)
* @returns {Array} an array of boxes, each box an array of nested items
 */
export function packIntoBoxes(items, boxCapacity = 10) {
    const boxes = [];
    let currentBox = [];
    let currentLength = 0;
  
    for (const item of items) {
      const length = item[3];
  
      if (currentLength + length <= boxCapacity) {
        currentBox.push(item);
        currentLength += length;
      } else {
        boxes.push(currentBox);
        currentBox = [item];
        currentLength = length;
      }
    }
  
    if (currentBox.length > 0) {
      boxes.push(currentBox);
    }
  
    return boxes;
  }
  