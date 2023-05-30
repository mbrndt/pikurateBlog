"use client";

import React, { Children } from "react";

const Modal = ({ isVisible, onClose, children }) => {
	if (!isVisible) return null;

	const handleClose = (e) => {
		if (e.target.id === "wrapper") {
			onClose();
		}
	};

	return (
		<div
			className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"
			onClick={handleClose}
			id="wrapper"
		>
			<div className="w-[600px] flex flex-col ">
				<button
					className="text-white text-xl place-self-end"
					onClick={() => onClose()}
				>
					X
				</button>
				<div className="bg-white p-2 rounded">{children}</div>
			</div>
		</div>
	);
};

export default Modal;
