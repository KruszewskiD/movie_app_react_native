export const filterUnique = (arr) =>{
        let unique = arr.reduce(function (accumulator, current) {
            if (current!=""&& !accumulator.includes(current))
            accumulator.push(current);
        console.log(accumulator)
            return accumulator;
        }, []);
        return unique;
}