import React from "react";
import ReactDOM from "react-dom";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
	isOpen: boolean,
	closeModal: ()=>void
}

const modalRoot = document.getElementById('modal-root');

const Modal: React.FC<ModalProps> = ({ children, isOpen, className, closeModal }) => {
	if (!modalRoot || !isOpen) {
		return null;
	}

	const content =
		<div className="modal w-full h-full bg-black/50 absolute top-0 left-0 flex items-center justify-center flex-col">
			<div className={`${className}`}>
				{children}
			</div>
			<button
				onClick={() => {
					closeModal();
				}}
			>
				Close
			</button>
		</div>;

	return ReactDOM.createPortal(content, modalRoot);
}

export default Modal;
