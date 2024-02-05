export const filterUnique = (arr) =>{
        let unique = arr.reduce(function (accumulator, current) {
            if (current!=""&& !accumulator.includes(current))
            accumulator.push(current);
            return accumulator;
        }, []);
        return unique;
}