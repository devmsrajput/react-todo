# Todo project (React + redux/toolkit + tailwindcss + localStorage + custom theme)

## **[Todo App](https://devmsrajput.github.io/react-todo/)**

__Hi, this is Todo Poject:__
> > Why i have initialised "null" in initialState instead of empty array ([])?
> > > I have initialised "null" in initial state just to deal with localStorage and to distinguish been the state of "todos" while loading and at time when all todos get deleted.
> > > What if we initialise todos as empty array: When we will be initialising todos as an empty array, it will be returning an empty array when App will get load and when all todos will get deleted. So, it'll become challenging to know the state of todos while App loading and at cleared all todos.
> > Why we need to distinguish todos state while App loading and at all todos get cleared?
> > > 1. Because in this project we have used localStorage to store todos data string, in order to set todos data into localStorage we would not want to let localStorage set empty [] at the time of App loading because at the App loading time todos will be returning empty [].
> > > 2. While Deleting todos, we would like to reflect changes into localStorage as well. So, in order to do that way we can use useEffect hook to set localStorage, here todos will be in our dependency array so that we could capture changes in todos. In order to perform all this and avoid setting localStorage as an empty array[], we'll be checking like ```if(todos.lenght > 0){...}```, but here comes a problem, at last element, because at last element deletion todos will be returning an empty array [], and we have applied condition check todos.length should be greater than 0 (to avoid setting localStorage at App loading time) so at this moment our localStorage would not be updated, and will be remaining last index value. And on page refresh it'll get fetched back and set into TodoLists even we have deleted all.
> > So, to avoid all these issues i thought to make it null for initialisation.

__Updation:__
> To carry on update values from one component to another i have used Redux to manage these values state, even though in this case we can go through prop drilling as well instead of carring values(id of todo, add/update) through Redux. In my react-basics > myTodo repository, i have done value updation through prop drilling.
