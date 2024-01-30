export interface Menu {
	image: string
	name: string
	description: string
	price: string
	tag?: string
}

export type MenuEntity = Menu | '|' | string
