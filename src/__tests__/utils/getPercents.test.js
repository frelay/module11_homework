import { getPercents } from "../../utils/getPercents";

describe("Проверка возрата процентов", () => {
    it('Должно возвращаться число если аргументы "числа" и больше 0', () => {
        expect(getPercents(10, 100)).toBe(10);
    }),
        it('Должно возвращать ошибку если аргументы "числа" и меньше 0', () => {
            expect(getPercents(-1, 100)).toBe("Аргументы должны быть больше 0");
        }),
        it("Должно возвращать ошибку если аргументы пустые", () => {
            expect(getPercents(1)).toBe("Аргументы не должны быть пустыми");
        }),
        it('Должно возвращать ошибку если аргументы "строки"', () => {
            expect(getPercents("dsf", "ds")).toBe(
                "Аргументы должны быть числом"
            );
        });
});
