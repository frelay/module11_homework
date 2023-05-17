export function getPercents(percent, number) {
    console.log(percent, typeof number);
    if (percent < 0 || number < 0) {
        return "Аргументы должны быть больше 0";
    } else if (percent === undefined || number === undefined) {
        return "Аргументы не должны быть пустыми";
    } else if (typeof percent === "string" || typeof number === "string") {
        return "Аргументы должны быть числом";
    } else {
        return (number / 100) * percent;
    }
}
