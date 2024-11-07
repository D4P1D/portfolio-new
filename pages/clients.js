import Image from "next/image";
import One from "../public/images/ade.png";
import Two from "../public/images/pes.png";
import { FaApple } from "react-icons/fa";
import { FaAirbnb } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { Element } from "react-scroll";

function clients() {
	return (
		<Element id="Clients" name="Clients">
			<div>
				<div className="w-full my-20 h-auto flex flex-col justify-center items-center">
					<h1 className="text-indigo-900 text-6xl font-bold text-center">
						My Skill
					</h1>
					<div className="flex justify-between text-center mx-20 my-10 md:gap-10 gap-2">
						<div className="flex justify-center items-center cursor-pointer">
						<Image
							src={One}
							alt="One"
							height={200}
							width={200}
							className="p-2 rounded cursor-pointer"
						/>
						</div>
						<div className="flex justify-center items-center cursor-pointer">
						<Image
							src={Two}
							alt="Two"
							height={200}
							width={200}
							className="p-2 rounded cursor-pointer"
						/>
						</div>
						
						
					</div>
				</div>
			</div>
		</Element>
	);
}

export default clients;
