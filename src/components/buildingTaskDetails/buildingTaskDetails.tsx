import { useState } from "react";
import { EditTask } from "../../api/tasks";
import type { villageTask } from "../../models/village-building/village-building"

interface BuildingTaskDetailsProps {
	task: villageTask | null
	deleteTask: (id: number) => void | Promise<void>,
}
const BuildingTaskDetails: React.FC<BuildingTaskDetailsProps> = ({task, deleteTask}) => {
	const [tempTask, setTempTask] = useState<villageTask | null>(task)
	const completeTask = async () => {
		if(!tempTask || !task) {
			console.log("unable to complete task");
			return;
		}
		console.log(task.ID)
		console.log(tempTask.ID)

		const completeTaskObject = {
			name: tempTask.Name,
			description: tempTask.Description,
			building_id: task.BuildingID,
			is_completed: true,
		}; 

		try{
			await EditTask(completeTaskObject, tempTask.ID);
			setTempTask((prevTask) => prevTask ? {...prevTask, IsCompleted: true} : prevTask)

		} catch (error) {
			console.error("Failed to complete task: ", error)
		}
	}

	if (!tempTask) {
		return <div>Oh no, nothing to show!</div>;
	}

	return(
	task !== null ?
			<div>
				<div>
					{tempTask.Name}
				</div>
				<div>
					{tempTask.Description}
				</div>
				<div>
					{tempTask.CreationDate && tempTask.CreationDate.toLocaleDateString()}
				</div>
				<div>
					{tempTask.IsCompleted ? tempTask.CompletedAt?.toLocaleDateString() : "Incomplete"}
				</div>
				<button type="button" onClick={()=>{deleteTask(tempTask.ID)}}>
					delete
				</button>
				<button type="button" onClick={completeTask}>
					complete
				</button>
			</div>
		: <div>oops! nothing to show..</div>
		
	)
}
export default BuildingTaskDetails;
