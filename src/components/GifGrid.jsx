import { ShowCategories } from "./index";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h3> { category } </h3>

        { isLoading ? ( <h2>Is Loading...</h2>) : null }

        <div className="card-grid">
          {
            images.map( (image) => (
             <ShowCategories 
                key={image.id}
                { ...image }
            />
              ))
          }
        </div>
    </>
  )
}
