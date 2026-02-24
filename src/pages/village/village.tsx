import { useEffect, useState } from "react";
import VillageBuilding from "../../components/villageBuilding/villageBuilding";
import { ListBuildings } from "../../api/buildings";

const Village = () => {
	const [buildings, setBuildings] = useState([])

	const fetchBuildings = async() => {
		setBuildings(await ListBuildings())
	}
	useEffect(()=>{
		fetchBuildings()

	}, [])
	console.log("buildings", buildings)

	return (
		<div className="h-full w-full grid grid-cols-3 grid-rows-3 items-center justify-center gap-10 p-4">
			{
				buildings.map((building)=>{
					return(
						<VillageBuilding building={building} />
					)
				})
			}
		</div>
	)
}
export default Village;
