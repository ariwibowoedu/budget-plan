export function formatCurrency(value) {
    const amount = Number(value)
    if (isNaN(amount)) return 'Rp 0'


    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'IDR',
        notation: 'compact',
        compactDisplay: 'short',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    }).format(amount)
}