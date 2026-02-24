import { useState } from "react";
import type { villageBuilding, villageTask } from "../../models/village-building/village-building";
import Modal from "../common/modal/modal";
import CreateTaskForm from "../createTask/createTask";
import BuildingTaskDetails from "../buildingTaskDetails/buildingTaskDetails";
import { CreateTask, DeleteTask, type TaskRequest } from "../../api/tasks";

interface BuildingTaskListProps {
	building: villageBuilding,
}
const BuildingTaskList: React.FC<BuildingTaskListProps> = ({building}) => {
	const [createModalShown, setCreateModalShown] = useState(false);
	const [selectedTask, setSelectedTask] = useState<villageTask | null>(null);
	const [tasks, setTasks] = useState<villageTask[] | []>(building.Tasks ? building.Tasks : []);

	const taskDetailsModalShown = selectedTask !== null;

	const createTask = async (task: Partial<villageTask>) => {
		if(!task.Name || !task.Description || !task.BuildingID){
			console.log("Missing required task fields");
			return;
		}
		const createTaskObject: TaskRequest = {
			name: task.Name,
			description: task.Description,
			building_id: task.BuildingID
		}; 
		try {
			const createdTask = await CreateTask(createTaskObject);
			setTasks((prevTasks) => [...prevTasks, createdTask]);
			setCreateModalShown(false);
		} catch (error) {
			console.error("Failed to create task: ", error)
		}
	}

	const deleteTask = async (taskID: number) => {
		try {
			await DeleteTask(taskID)
			setTasks((prevTasks) => prevTasks.filter((task) => task.ID !== taskID))
			setSelectedTask((prevSelectedTask) => prevSelectedTask?.ID === taskID ? null : prevSelectedTask);
		} catch (error) {
			console.log("Failed to delete task: ", error)
		}
	}

	return (
		<div className="h-full w-full flex items-center justify-start">
			<div className="flex gap-4 h-full w-full border">
				<div className="h-full w-1/2 flex flex-col justify-between">
					<div className="grow border m-2">{building.ThumnailImgUrl}</div>
					<div className="m-2">{building.Name}</div>
				</div>
				<div className="m-2">
					<ul>
						{tasks.length > 0 ? tasks.map((task: villageTask)=>{
							return (
								<li>{task.Name}<button onClick={()=>{setSelectedTask(task)}} className="mx-1 p-0">?</button></li>
							)
						}): <li>no tasks :(</li>
						}
					</ul>
					
					<button onClick={()=>{setCreateModalShown(!createModalShown)}}>+</button>
					<Modal isOpen={createModalShown} closeModal={()=>{setCreateModalShown(false)}}>
						<CreateTaskForm building={building} createTask={createTask}/>
					</Modal>
					<Modal isOpen={taskDetailsModalShown} closeModal={()=>{setSelectedTask(null)}}>
						<BuildingTaskDetails task={selectedTask} deleteTask={deleteTask}/>
					</Modal>
				</div>
			</div>
		</div>
	)
}
export default BuildingTaskList;
