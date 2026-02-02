export interface villageBuilding {
	name: string,
	description: string,
	matters: string[],
	imgUrl: string,
	thumnailImgUrl: string
}

export interface villageTask {
	name: string,
	description: string,
	complete: boolean,
	creationDate: Date | null,
	completionDate: Date | null
}
