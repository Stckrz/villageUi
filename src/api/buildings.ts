import type { villageBuilding } from "../models/village-building/village-building";

const urlRoot = "http://localhost:8080/api"

export interface BuildingRequest {
		name: string,
		description: string,
		categories: string[],
		thumnailImgUrl: string,
		imgUrl: string,
}

export const ListBuildings = async () => {
	const response = await fetch(`${urlRoot}/buildings`);
	if (!response.ok) {
		throw new Error("Failed to fetch buildings");
	}

	const data = await response.json();
	return data as villageBuilding[];
}

export const CreateBuilding = async (building: BuildingRequest) => {
	const body: BuildingRequest = {
		name: building.name,
		description: building.description,
		categories: building.categories,
		thumnailImgUrl: building.thumnailImgUrl,
		imgUrl: building.thumnailImgUrl,
	}

	const response = await fetch(`${urlRoot}/buildings`,{
		body: JSON.stringify(body),
		method: "POST"
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch buildings");
	}
	const data = await response.json();
	return data as villageBuilding;
}

export const EditBuilding = async (building: BuildingRequest, buildingID: number) => {
	const body: BuildingRequest = {
		name: building.name,
		description: building.description,
		categories: building.categories,
		thumnailImgUrl: building.thumnailImgUrl,
		imgUrl: building.thumnailImgUrl,
	}
	const response = await fetch(`${urlRoot}/buildings/${buildingID}`,{
		body: JSON.stringify(body),
		method: "PUT"
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch buildings");
	}
	const data = await response.json();
	return data;

}

export const DeleteBuilding = async (buildingID: number) => {
	const response = await fetch(`${urlRoot}/buildings/${buildingID}`,{
		method: "DELETE"
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch buildings");
	}

	const data = await response.json();
	return data;
}

