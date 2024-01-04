'use client'

// export default function Error(error) {//We can pass props error as well. 
                                            //It needs to understand because it is either object or array
export default function Error(error) {
  return (
      <main className="error">
        <h1>An error occured</h1>
        <p>Failed to fetch meals data. Please try again later</p>
      </main>
    )
}
