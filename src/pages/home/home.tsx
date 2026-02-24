import { useEffect, useState } from "react";
import BuildingTaskList from "../../components/buildingTaskList/buildingTaskList";
import { ListBuildings } from "../../api/buildings";
import type { villageBuilding } from "../../models/village-building/village-building";

const Home = () => {
	const [buildings, setBuildings] = useState([])

	useEffect(()=>{
		const fetchBuildings = async() => {
			setBuildings(await ListBuildings())
		}

		fetchBuildings()
	}, [])

	return (
		<div className="w-full items-center justify-center grid grid-cols-3 grid-rows-3 h-full ">
			{buildings.length > 0 && buildings.map((building: villageBuilding)=>{
				return (
					<BuildingTaskList key={building.ID} building={building}/>
				)
			})}
		</div>
	)
}
export default Home;
