export const paddingNumber = (
	num: number | string,
	payload: number | undefined = 2
) => {
	num = Number(num).toString()
	const zerosAdded = payload - num.length
	if (zerosAdded > 0) num = Array(zerosAdded).fill(0).join('') + num
	return num
}

export const convertSize = (val: string | number) =>
	typeof val === 'string' ? val : val + 'px'
