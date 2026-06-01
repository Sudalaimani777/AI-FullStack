import { useState, useCallback } from 'react';
import Search from './Search';

const Brands = () => {

    const allBrands = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Samsung' },
        { id: 3, name: 'Google' },
        { id: 4, name: 'Microsoft' },
        { id: 5, name: 'Amazon' },
        { id: 6, name: 'Facebook' },
        { id: 7, name: 'Tesla' },
        { id: 8, name: 'Netflix' },
        { id: 9, name: 'Adobe' },
        { id: 10, name: 'Intel' },
    ]

    const [brands, setBrands] = useState(allBrands);

    //Normal function without cached instance.
    // const handleSearch = value => {
    //     const updatedBrands = value.length > 0 ? brands.filter(brand => brand.name.toLowerCase().includes(value.toLowerCase())) : allBrands;
    //     setBrands(updatedBrands);
    // }

    // Function with the cached version using useCallback hook :-
    const handleSearch = useCallback((value) => {
        console.log(brands[0]);
        const updatedBrands = value.length > 0 ? brands.filter(brand => brand.name.toLowerCase().includes(value.toLowerCase())) : allBrands;
        setBrands(updatedBrands);
    }, [brands]);

    console.log(brands);

    const handleSort = () => {
        const sortedBrands = [...brands].sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        setBrands(sortedBrands);
    }

    // Example to show that the parent function creates a new instance of the child function every time it is called, which can lead to performance issues if the child function is passed as a prop to a child component that relies on referential equality for optimization.
    const parent = (a, b) => {
        return (a, b) => {
            return a + b;
        }
    }

    const firstChild = parent(1, 2);
    const secondChild = parent(1, 2);

    // This will log false because firstChild and secondChild are different instances of the child function, even though they have the same implementation.
    console.log(firstChild === secondChild);


    //Important -> Whenever the component is "re-rendered" it creates a new instance of the function, so the memo HOC will not work because it will always receive a new instance of the function as a prop, which will cause it to re-render every time. To avoid this issue, we can use the useCallback hook to memoize the function and ensure that it only creates a new instance when its dependencies change.

    return (
        <>
            <main>
                <h1>useCallback Hook</h1>
                <button onClick={handleSort}>Sort Brands</button>
                <Search handleSearch={handleSearch} />
                <div>
                    {
                        brands.map(brand => (
                            <p key={brand.id}>{brand.name}</p>
                        ))
                    }
                </div>
                <div>
                </div>
            </main>
        </>
    )
}

export default Brands