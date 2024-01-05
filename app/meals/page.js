import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All meals',
  description: 'Delicious meals, shared by our vibrant community.',
};


async function Meals(){
     const meals = await getMeals(); 
    return <MealsGrid meals={meals}/>
}

export default async function MealsPage() {
  // console.log(meals)
  return (
        <>
        <header className={classes.header}>
          <h1>
            Delicious meals, created{' '}
            <span className={classes.highlight}>by you</span>
          </h1>
          <p>Cook your favourite recipe and cook it yourselv, It is easy and fun</p>
          <p className={classes.cta}>
            <Link href='/meals/share'>
              Share Your Favourite Recipe
            </Link>
          </p>
        </header>
        <main className={classes.main}>
        {/* <main> */}
         <Suspense fallback={<div className={classes.loading}>Fetching Meals...</div>}>
            <Meals/>
         </Suspense>
        </main>
        </>
        )
}
