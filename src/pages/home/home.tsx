import { mockTasks } from "../../assets/mockData/mockTodoItems";
import { mockVillageBuildings } from "../../assets/mockData/mockVillageBuildings";
import BuildingTaskList from "../../components/buildingTaskList/buildingTaskList";

const Home = () => {
	return (
		<div className="w-full items-center justify-center grid grid-cols-3 grid-rows-3 h-full ">
			<BuildingTaskList building={mockVillageBuildings[1]} taskList={mockTasks}/>
			<BuildingTaskList building={mockVillageBuildings[1]} taskList={mockTasks}/>
			<BuildingTaskList building={mockVillageBuildings[1]} taskList={mockTasks}/>
			<BuildingTaskList building={mockVillageBuildings[1]} taskList={mockTasks}/>
			<BuildingTaskList building={mockVillageBuildings[1]} taskList={mockTasks}/>
			<BuildingTaskList building={mockVillageBuildings[1]} taskList={mockTasks}/>
			<BuildingTaskList building={mockVillageBuildings[1]} taskList={mockTasks}/>
			<BuildingTaskList building={mockVillageBuildings[1]} taskList={mockTasks}/>
		</div>
	)
}
export default Home;
