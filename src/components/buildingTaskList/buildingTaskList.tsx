import { useState, useEffect } from "react";
import type { villageBuilding, villageTask } from "../../models/village-building/village-building";
import Modal from "../common/modal/modal";
import CreateTask from "../createTask/createTask";
import BuildingTaskDetails from "../buildingTaskDetails/buildingTaskDetails";

interface BuildingTaskListProps {
	building: villageBuilding,
	taskList: villageTask[]
}
const BuildingTaskList: React.FC<BuildingTaskListProps> = ({building, taskList}) => {
	const [createModalShown, setCreateModalShown] = useState(false);
	const [taskDetailsModalShown, setTaskDetailsModalShown] = useState(false);
	const [tasks, setTasks] = useState(taskList);
	const [selectedTask, setSelectedTask] = useState<villageTask | null>(null);

	const createTask = (task: villageTask) => {
		setTasks([...taskList, task])
	}
	useEffect(()=>{
		setTaskDetailsModalShown(selectedTask !== null)
	}, [selectedTask])

	return (
		<div className="h-full w-full flex items-center justify-start">
			<div className="flex gap-4 h-full w-full border">
				<div className="h-full w-1/2 flex flex-col justify-between">
					<div className="grow border m-2">{building.thumnailImgUrl}</div>
					<div className="m-2">{building.name}</div>
				</div>
				<div className="m-2">
					<ul>
						{tasks.map((task)=>{
							return (
								<li>{task.name}<button onClick={()=>{setSelectedTask(task)}} className="mx-1 p-0">?</button></li>
							)
						})}
					</ul>
					<button onClick={()=>{setCreateModalShown(!createModalShown)}}>+</button>
					<Modal isOpen={createModalShown} closeModal={()=>{setCreateModalShown(false)}}>
						<CreateTask building={building} createTask={createTask}/>
					</Modal>
					<Modal isOpen={taskDetailsModalShown} closeModal={()=>{setSelectedTask(null)}}>
						<BuildingTaskDetails task={selectedTask} />
					</Modal>
				</div>
			</div>
		</div>
	)
}
export default BuildingTaskList;
