import { mockVillageBuildings } from "../../assets/mockData/mockVillageBuildings";
import VillageBuilding from "../../components/villageBuilding/villageBuilding";
const Village = () => {
	return (
		<div className="h-full w-full grid grid-cols-3 grid-rows-3 items-center justify-center gap-10 p-4">
			{
				mockVillageBuildings.map((building)=>{
					return(
						<VillageBuilding building={building} />
					)
				})
			}
		</div>
	)
}
export default Village;
