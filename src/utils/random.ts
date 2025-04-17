export const GetRandomInt = (max: number, start: number) => {
    return Math.floor(Math.random() * max) + start;
}