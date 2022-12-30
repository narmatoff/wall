export const PGP = {
    WIDTH: 667, // Ширина
    HEIGHT: 500, // Высота
    TICKNESS: 80, // Толщина, по сути не используется
    WEIGHT: 36, // Вес каждой плиты,
    ARIA: function () { // Площадь одной плиты
        return this.WIDTH * this.HEIGHT
    }
}
