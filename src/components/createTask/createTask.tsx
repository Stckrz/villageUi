import { useState } from "react";
import type { villageBuilding, villageTask } from "../../models/village-building/village-building";

interface CreateTaskProps {
	createTask: (task: Partial<villageTask>) => void | Promise<void>,
	building: villageBuilding
}
const CreateTaskForm: React.FC<CreateTaskProps> = ({createTask, building}) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState<string | null>(null);

	const submitTask = async() => {
		const trimmedName = name.trim();
		const trimmedDescription = description.trim();
		if(!trimmedName || !trimmedDescription) {
			setError("Please fill out both fields");
			return;
		}

		setError(null);

		const newTask: Partial<villageTask> = {
			Name: trimmedName,
			Description: trimmedDescription,
			BuildingID: building.ID
		};
		try{
			await createTask(newTask);
			setName("");
			setDescription("");

		} catch (error){
			setError(`Failed to create task: ${error}`)
		}
	}

	return (
		<div className="flex items-center justify-start flex-col m-0 p-4 w-full h-full border border-black">
			<div>
				<div>{building.ThumnailImgUrl}</div>
			</div>
			<div>
				<label
					className="w-full text-start text-lg"
					htmlFor="taskName">Name:
					<div className="relative w-full flex items-center justify-center">
						<input
							className="w-full px-2"
							name="taskName"
							id="taskName"
							onChange={e => setName(e.target.value)}
						/>
					</div>
				</label>
				<label
					className="w-full text-start text-lg"
					htmlFor="taskDescription">Description:
					<div className="relative w-full flex items-center justify-center">
						<input
							className="w-full px-2"
							name="taskDescription"
							id="taskDescription"
							onChange={e => setDescription(e.target.value)}
						/>
					</div>
				</label>
				{error && <p className="text-sm text-red-600">{error}</p>}
				<button onClick={submitTask}>submit</button>
			</div>
		</div>
	)
}
export default CreateTaskForm;
