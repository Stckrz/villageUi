export interface villageBuilding {
	ID: number,
	Name: string,
	Description: string,
	Categories: buildingCategory[],
	ImgUrl: string,
	ThumnailImgUrl: string,
	Tasks: villageTask[],
	CreatedAt: Date,
	UpdatedAt: Date,
}

export interface buildingCategory {
	ID: number,
	BuildingID: number,
	Text: string,
	CreatedAt: Date,
	UpdatedAt: Date,
}

export interface villageTask {
	ID: number,
	Name: string,
	Description: string,
	BuildingID: number,
	Building: villageBuilding,
	Complete: boolean,
	CompletedAt: Date | null,
	CreationDate: Date | null,
	IsCompleted: boolean,
	CreatedAt: Date,
	UpdatedAt: Date,
}
