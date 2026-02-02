import type { villageBuilding } from "../../models/village-building/village-building";

interface VillageBuildingProps {
	building: villageBuilding
}

const VillageBuilding: React.FC<VillageBuildingProps> = ({building}) => {
	return (
		<div className="border flex items-center justify-start h-full">
			<div className="w-1/2 h-full border flex flex-col items-center justify-evenly">
				<div className="aspect-square border h-1/2">{building.imgUrl}</div>
				<div>
					<div>{building.name}</div>
					<div>{building.description}</div>
				</div>
			</div>
			<ul className="flex flex-col items-start justify-start gap-4  h-full p-4">
				{building.matters.map((matter)=>{
					return (
						<li>{matter}</li>
					)
				})}
			</ul>
		</div>
	)
}
export default VillageBuilding;
