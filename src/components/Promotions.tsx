import useCategoryStore from '../store/categoryStore'

const Promotions = () => {

  const categories = useCategoryStore((state) => state.categories);
  console.log('Categories in Promotions component:', categories);
  return (
    <div>Promotions</div>
  )
}

export default Promotions