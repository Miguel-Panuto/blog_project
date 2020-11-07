export const parseDate = (date: Date, monthType : string) : String => {
    const ye = new Intl.DateTimeFormat('pt-br', { year: 'numeric' }).format(date);
    const mo = new Intl.DateTimeFormat('pt-br', { month: monthType }).format(date);
    const da = new Intl.DateTimeFormat('pt-br', { day: '2-digit' }).format(date);
    return `${da} de ${mo} de ${ye}`;
}
