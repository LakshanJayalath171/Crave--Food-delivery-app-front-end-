import {create} from 'zustand';

interface categories{
    name:string,
    _id:string,
}

interface categoryStore{
    categories:categories[],
    setCategories:(categories:categories[]) => void
}

const useCategoryStore = create<categoryStore>((set) => ({
    categories: [],
    setCategories: (categories) => set({ categories }),
    
}));

export default useCategoryStore;