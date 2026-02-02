import { useState } from "react";
import type { villageBuilding, villageTask } from "../../models/village-building/village-building";
interface CreateTaskProps {
	createTask: (task: villageTask) => void,
	building: villageBuilding
}
const CreateTask: React.FC<CreateTaskProps> = ({createTask, building}) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const submitTask = () => {
		if (name != "" && description != ""){
			const villageTask: villageTask = {
				name: name.trim(),
				description: description.trim(),
				complete: false,
				creationDate: new Date(),
				completionDate: null
			}
			createTask(villageTask)
		}
	}

	return (
		<div className="flex items-center justify-start flex-col m-0 p-4 w-full h-full border border-black">
			<div>
				<div>{building.thumnailImgUrl}</div>
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
				<button onClick={submitTask}>submit</button>
			</div>
		</div>
	)
}
export default CreateTask;
