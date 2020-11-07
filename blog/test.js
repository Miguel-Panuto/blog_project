const d = new Date();
const ye = new Intl.DateTimeFormat('pt-br', { year: 'numeric' }).format(d);
const mo = new Intl.DateTimeFormat('pt-br', { month: 'long' }).format(d);
const da = new Intl.DateTimeFormat('pt-br', { day: '2-digit' }).format(d);
console.log(`${da} de ${mo} de ${ye}`);