import classes from './meals-grid.module.css';
import MealItem from './meal-item';


export default function MealsGrid({meals}) {
  // console.log("MealsGrid.................... "meals)
  // meals.map((meal)=>{
  //   const { title, slug, image, summary, creator, id } = {...meal}
  //   console.log("..........###", id);
  // })
  return (
      <ul className={classes.meals}>
         {
          meals.map((meal) => {
            return (
               <li key={meal.id}>
                 <MealItem {...meal}/>
               </li>
             )
          })
         }
      </ul>
    )
}


