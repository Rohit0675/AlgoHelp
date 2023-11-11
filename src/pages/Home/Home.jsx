import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
// import algoLogo from "../../assets/neural.png";
// import cardImg from "../../assets/Algorithm.png";
// import SortingVisualizer from "../SortingVisualizer/SortingVisualizer";
import Bubble from "./Bubble";
export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    
      <div className="home">
        <div className="home__first">
          <div className="home__container">
            <h1 className="home__title">AlgoHelp</h1>
          </div>
          {/* <button  className="home__topButton"> Use Sort </button> */}
          <button
            type="button"
            className="home__topButton btn btn-outline-secondary btn-lg"
          >
            {" "}
            Sort{" "}
          </button>
        </div>
        <div className="home__about">
          <h2 className="home__subtitle">Readings....</h2>
          <div className="home__mainP">
            <p>
              Sorting algorithms are used to sort a data structure according to
              a specific order relationship, such as numerical order or
              lexicographical order.
            </p>
          </div>
          <div>
            <p>
              Some common sorting algorithms include: Bubble sort: This is a
              simple algorithm that repeatedly iterates through the list and
              compares adjacent elements, swapping them if they are in the wrong
              order. It has a time complexity of O(n^2) in the worst case, but
              it can be improved to O(n) in the best case if the list is already
              sorted.
              <br />
              <br />
              Selection sort: This algorithm repeatedly selects the minimum
              element from the unsorted portion of the list and places it at the
              end of the sorted portion. It has a time complexity of O(n^2) in
              the worst case.
              <br />
              <br />
              Insertion sort: This algorithm iterates through the list and
              inserts each element into its correct position in the sorted
              portion of the list. It has a time complexity of O(n^2) in the
              worst case, but it can be improved to O(n) in the best case if the
              list is already sorted.
              <br />
              <br />
              Merge sort: This is a divide and conquer algorithm that
              recursively divides the list into smaller sublists until each
              sublist has only one element, and then merges the sublists back
              together in sorted order. It has a time complexity of O(n log n)
              in the worst case.
              <br />
              <br />
              Quick sort: This is another divide and conquer algorithm that
              selects a pivot element and partition the list around it, such
              that all elements smaller than the pivot are placed before it and
              all elements larger than the pivot are placed after it. It then
              recursively sorts the sublists on either side of the pivot. It has
              a time complexity of O(n log n) in the average case, but it can be
              O(n^2) in the worst case if the list is already sorted or the
              pivot is always chosen poorly
            </p>
          </div>
        </div>
        <div className="home__footer">
          
        </div>
      </div>
    </>
  );
}
