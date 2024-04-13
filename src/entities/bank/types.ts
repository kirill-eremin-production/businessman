export type Credit = {
    size: number // Изначальный основной долг
    days: number // Количество дней
    overpayment: number // Переплата по кредиту
    sum: number // Сумма кредита
    dailyPayment: number // Ежедневный платеж
    nextPaymentTime: number // Время следующего платежа

    // TODO - усложнить расчет оставшихся значений (пока решил не усложнять)
    // currentSize: number // Оставшийся размер основного долга
    // currentOverpayment: number // Оставшийся размер переплаты
    currentDays: number // Оставшееся количество дней
    currentSum: number // Оставшийся размер кредита
}

export type BankData = {
    credits: Credit[]
}
