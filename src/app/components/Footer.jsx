import React from "react";

export const Footer = () => {
	return (
		<div className="border-t flex justify-around ">
			<div className="flex gap-20 mx-10 sm:mx-0 mt-4 mb-4 flex-wrap">
				<div className="flex flex-col gap-3">
					<div className="text-blue-600 font-bold font-sans">Pikurate</div>
					<div className="text-sm">© 2023 Pikurate</div>
				</div>
				<div className="flex flex-col gap-3">
					<div className="text-blue-600 font-bold font-sans">About</div>
					<div className="text-sm">About</div>
					<div className="text-sm">Contact</div>
					<div className="text-sm">Careers</div>
				</div>
				<div className="flex flex-col gap-3 ">
					<div className="text-blue-600 font-bold font-sans">Legal</div>
					<div className="text-sm">Privacy Policy</div>
					<div className="text-sm">Terms of Service</div>
				</div>
				<div className="flex flex-col gap-3">
					<div className="text-blue-600 font-bold font-sans">Social</div>
					<div className="text-sm">Facebook</div>
					<div className="text-sm">Twitter</div>
					<div className="text-sm">Instagram</div>
				</div>
			</div>
		</div>
	);
};
