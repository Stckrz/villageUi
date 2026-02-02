import type { villageTask } from "../../models/village-building/village-building";

export const mockTasks: villageTask[] = [
	{
		name: "eat food",
		description: "I really need to find a food to eat",
		complete: false,
		creationDate: new Date(),
		completionDate: null

	},
	{
		name: "drink water",
		description: "I really need to find a water to eats",
		complete: false,
		creationDate: new Date(),
		completionDate: null

	},
	{
		name: "doctor",
		description: "Help! I need to find a doctor!",
		complete: false,
		creationDate: new Date(),
		completionDate: null

	},
	{
		name: "exercise!",
		description: "Opps! Better exercise!",
		complete: false,
		creationDate: new Date(),
		completionDate: null

	},
]
