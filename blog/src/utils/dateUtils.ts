export const parseDate = (date: Date | undefined, monthType : string) : String => {
    const ye = new Intl.DateTimeFormat('pt-br', { year: 'numeric' }).format(date);
    const mo = new Intl.DateTimeFormat('pt-br', { month: monthType }).format(date);
    const da = new Intl.DateTimeFormat('pt-br', { day: '2-digit' }).format(date);
    return `${da} de ${mo} de ${ye}`;
}

export const parseDateWithHours = (date: Date): string => {
    const ye = new Intl.DateTimeFormat('pt-br', { year: 'numeric' }).format(date);
    const mo = new Intl.DateTimeFormat('pt-br', { month: 'short' }).format(date);
    const da = new Intl.DateTimeFormat('pt-br', { day: '2-digit' }).format(date);
    const hour = new Intl.DateTimeFormat('pt-br', { hour: '2-digit', hour12: false }).format(date);
    return `${da} de ${mo} de ${ye} às ${hour} horas`;
}