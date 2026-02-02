import type { villageTask } from "../../models/village-building/village-building"

interface BuildingTaskDetailsProps {
	task: villageTask | null
}
const BuildingTaskDetails: React.FC<BuildingTaskDetailsProps> = ({task}) => {
	return(
	task !== null ?
			<div>
				<div>
					{task.name}
				</div>
				<div>
					{task.description}
				</div>
				<div>
					{task.creationDate && task.creationDate.toLocaleDateString()}
				</div>
				<div>
					{task.completionDate ? task.completionDate.toLocaleDateString() : "Incomplete"}
				</div>
			</div>
		: <div>ass</div>
		
	)
}
export default BuildingTaskDetails;
