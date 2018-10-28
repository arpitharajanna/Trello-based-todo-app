As per the instructions, I took 2 hours to complete the challenge. My approach was:

1. First I made a plan about how to divide the tasks and which I can complete with less time. So First i started with creating 3 column tables for the lost view. Then I hardcoded the list items inside the column. 
2. Then I started working on the drag and drop functionality of the items in each list. I used JQuery to make the drag and drop functionality by using  sortable function  from one column to another. 
3. After working on that, I created a modal popup form to add a new card with the title. Once that worked, I created a function such that when we create a new task card, we can also select in which column we can place the card. So if the selected dropdown is "In progress", it places the new task card in In progress column. 
4. Then I started working on click of each task card, a modal opens and then we can create new task items under each card. Once that function was ready, I included a close button to each created task items so that we can delete the task item.
5. Then i included a checked function, where if we click on each task item, it marks checked implying the task is completed. 
6. As time was nearing, I applied basic css styling to make it lookable.

Things which i was not able to finish:

1. Modal open on click of each task card. But on the newly created task card, modal doesnot open. My approach was to add an id to the newly created card and link it with the modal id, so that everytime a new card is created, it also has modal popup on click it.
2. I wanted to add animations to make the app look better. But I didnot have time.
3. Also I wanted to add a delete button on the task cards which is present in the completed column. So that once it is moved to completed column,
   it can be deleted.
