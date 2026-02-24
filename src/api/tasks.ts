import type { villageTask } from "../models/village-building/village-building";

const urlRoot = "http://localhost:8080/api"

export interface TaskRequest {
	name: string,
	description: string,
	building_id: number,
	is_completed?: boolean
}

export const ListTasks = async () => {
	const response = await fetch(`${urlRoot}/tasks`);
	if (!response.ok) {
		throw new Error("Failed to fetch tasks");
	}

	const data = await response.json();
	return data as villageTask[];
}

export const CreateTask = async (task: TaskRequest): Promise<villageTask> => {
	const body: TaskRequest = {
		name: task.name,
		description: task.description,
		building_id: task.building_id
	}

	const response = await fetch(`${urlRoot}/tasks`,{
			body: JSON.stringify(body),
			method: "POST"
		}
	);
	if (!response.ok) {
		throw new Error("Failed to create task");
	}

	const data = await response.json();
	return data as villageTask;
}

export const EditTask = async (task: TaskRequest, taskID: number) => {
	const body: TaskRequest = {
		name: task.name,
		description: task.description,
		building_id: task.building_id,
		is_completed: task.is_completed
	}

	const response = await fetch(`${urlRoot}/tasks/${taskID}`,{
			body: JSON.stringify(body),
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			}
		}
	);

	if (!response.ok) {
		throw new Error("Failed to edit task");
	}

	return;
}

export const DeleteTask = async (taskID: number) => {
	const response = await fetch(`${urlRoot}/tasks/${taskID}`,{
		method: "DELETE"
		}
	);

	if (!response.ok) {
		throw new Error("Failed to delete task");
	}
	return;
}
