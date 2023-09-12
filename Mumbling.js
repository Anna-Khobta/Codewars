// i = index  Индекс текущего обрабатываемого элемента в массиве.

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}