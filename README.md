# M8 Assignment 07

## M8 Assignment - Part 1, Practice with Arrays (20 points)

1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
2. Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
3. Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
4. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
5. Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
6. Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
7. Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
8. Copy the code from step 5. Under the existing array, create a new array called ```leastFavMovies```. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
```
Movies I like:

Movie 1
Movie 2
Movie 3
```
…
```
Movies I regret watching:

Movie 1
Movie 2
Movie 3
```
…

9. Copy the code from step 8. Now, use the ```concat()``` method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
10. Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
11. Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
13. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:

  ```movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];```

  &nbsp; &nbsp; &nbsp; Now, loop through the array and filter out and display only the movie names. You must use the ```filter()``` method and you’ll need to filter out the names by their primitive data type.

14. Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

```
Employees:

ZAK
JESSICA
MARK
FRED
SALLY
```

15. Write a JavaScript function to filter false, null, 0 and blank values from an array.

```
Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
Expected Result: [58, "abcd", true]
```

16. Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.
17. Write a JavaScript function to get the largest number from a numeric array.

## M8 Assignment - Part 2, The Employee Management System (80 points)

In this assignment you will build on the M7 Assignment. If you recall, in the M7 Assignment, the user was able to add an employee, view that employee within the grid, and then delete an employee by clicking the delete button that appears to the right of each row. While this was a great learning opportunity as it relates to DOM scripting, it wasn’t realistic as it didn’t allow you to persist the employee data in any way. When the browser was closed, the data was gone and had to be reentered again. In this version, you will modify the application to use arrays and then store the populated array within web storage (localStorage) in order to persist the data across browser sessions.

### The Interface

As was the case in M7 Assignment, the UI has been created for you using Bootstrap and will look identical to the M7 Assignment. You will not need to touch the HTML.

Pay close attention to the table markup of this version of the assignment however. You will create the row structure differently in this assignment than what you did in the M7 Assignment. More on this in a bit.

### Loading an Initial Set of Employees

For this assignment you will use arrays to structure your data. You will need to create an initial array and populate it with at least 5 employees. When the page loads, the grid should automatically populate with those initial 5 employees. The data for each employee should be structured so that you’re storing the employee ID (number), employee name (string), 4 digit extension (number), email (string), and department (string).

### Building the Grid

In the M8 Assignment you used the table’s DOM methods ```insertRow()```, ```insertCell()```, and ```deleteRow()``` to manipulate the row structure for the table. In this assignment you will take a different approach. In this assignment, you’ll see the table includes a ```<tbody>``` tag. Use this tag as a ‘hook’ and rely on the innerHTML property to programmatically construct the row and cell structure for the table using a template literal string.

Considerations:

  - This will be its own function. It will be called when the page loads, when an employee is added, and when an employee is deleted.
  - Use a for / of loop here to loop through the array and build each row in code.
  - Use the ```appendChild()``` method to append the constructed row to the <tbody> tag.

### Adding and Removing Data

You’ll need two separate functions for adding and removing employees. Remember to pass the array into these functions and then use array specific methods to add / remove employees from the array. Don’t forget to call the function to build the grid once an employee has been added or removed.

Considerations:

  - When a new employee is added, you’ll need to create a new array. This array is what will be added into the main employees array.

### Storing Data

Use web storage (localStorage) to persist the array. It should be stored when the page loads / when the grid is built, when a new employee is added, and when an employee is deleted. When the page loads, make sure to check to see if the object exists in storage before you attempt to extract the data from storage.

Considerations

  - You’ll need to use ```JSON.stringify()``` to store the array in storage.
  - You’ll need to use ```JSON.parse()``` to retrieve the array from storage.
