---
title: Binary Search
layout: post.html
seo:
  title: Binary Search | Rivaldi Putra
date: 2023-12-09T11:52:04+07:00
category: Structure Data And Algorithms
excerpt: In the programming world, we frequently need to search for a particular element on the list or array. one of the methods we can use for searching that element with using algorithms binary search.
description: Binary Search is a search algorithm that has a time complexity of O(log n). With this approach, we don't have to iterate through all the elements in the array.
tags:
  - posts
---

In the programming world, we frequently need to search for a particular element on the list or array. one of the methods we can use for searching that element with using algorithms binary search. on this blog, we will discuss the basic concept of binary search, how this algorithms work, and example of its implementations in javascript.

1. What is Binary Search
   Binary Search is a search algorithm that has a time complexity of O(log n). With this approach, we don't have to iterate through all the elements in the array. Binary search utilizes three pointers: "left," "mid," and "right." The "left" pointer refers to index 0, "right" refers to an index length of the array minus one, and "mid" is the result of dividing (left + right) by 2.
2. How linear Search Work
For example, let's consider an array [1, 2, 3, 4, 5], and the target we want to search for is 4. It's important to note that binary search only works with sorted arrays and returns the index of the target element. During the process, we need to follow the following steps:

* Check if the element at the index "mid" of the array is equal to the target value. If it is, return the index of the array as the result.

* If the target value is greater than the element at the "mid" index, we can conclude that the target value is located in the right part of the array. Therefore, we can ignore the left part of the array. To do that, we set the "left" pointer to mid + 1.
 
 * If the target value is less than the element at the "mid" index, we can conclude that the target value is located in the left part of the array. Therefore, we can ignore the right part of the array. To do that, we set the "right" pointer to mid _ 1.

* Repeat the steps described above until we either find an element equal to the target value or until the "left" pointer becomes greater than the "right" pointer. If the "left" pointer becomes greater than the "right" pointer, it means that the target does not exist inside the array, and in such case, we can return -1 to indicate that the target was not found.
Using the binary search approach described above, we can perform an efficient search in logarithmic time relative to the size of the array.

3. Implement Binary Search in Javascrit
 Here's an example implementation of the binary search algorithm in JavaScript:
 
```
const binarySearch = (item, target) => {
  /* 
    *  we create two pointer low and high 
    * the value of pointer will change after the condition 
  */
  let low = 0;
  let high = item.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target === item[mid]) {
      result = mid;
      break;
    } else if (target > item[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
};

console.log(binarySearch([1,2,3], 2))
```

If you want to try the code you go to this [link](https://replit.com/@vadhe/binary-search#index.js)
