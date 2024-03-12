import { AiFillDelete } from "react-icons/ai";
import "./post-modal.css";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";
import {
	BsFillFileEarmarkPdfFill,
	BsAndroid2,
	BsFiletypeExe,
} from "react-icons/bs";

const PostFormFilesModal = ({ selectedFiles, setSelectedFiles }) => {
	const handleFileChange = (e) => {
        console.log(e.target.files);
        const uploadedFiles = Array.from(e.target.files);
        console.log({ uploadedFiles });
		setSelectedFiles([...selectedFiles, ...uploadedFiles]);

	};

    const handleFileDrop = (e) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        setSelectedFiles([...selectedFiles, ...droppedFiles]);
    };
	const preventDefault = (e) => {
		e.preventDefault();
	};

    const handleDeleteItem = (index) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1); // Remove the item at the specified index
        setSelectedFiles(updatedFiles);
    };

	return (
		<>
			<div
				className="post-audio-cont-box"
				onDrop={handleFileDrop}
				onDragOver={preventDefault}
			>
				{selectedFiles?.length > 0 ? (
					selectedFiles?.map((selectedFile, i) => (
						<div className="file-item" key={i + 1}>
							{/* Display the selected files */}
							<div className="file-content">
								<div className="de-aud">
									<div
										className="delete-file-item"
										onClick={() => handleDeleteItem(i)}
									>
										<AiFillDelete />
									</div>
								</div>
								{selectedFile.name.endsWith(".pdf") ? (
									<BsFillFileEarmarkPdfFill className="icon-dw pdf" />
								) : selectedFile.name.endsWith(".doc") ||
								  selectedFile.name.endsWith(".docx") ? (
									<SiMicrosoftword className="icon-dw word" />
								) : selectedFile.name.endsWith(".xls") ||
								  selectedFile.name.endsWith(".xlsx") ? (
									<SiMicrosoftexcel className="icon-dw excel" />
								) : selectedFile.name.endsWith(".ppt") ||
								  selectedFile.name.endsWith(".pptx") ? (
									<PiMicrosoftPowerpointLogo className="icon-dw prese" />
								) : selectedFile.name.endsWith(".exe") ? (
									<BsFiletypeExe className="icon-dw exe" />
								) : (
									<BsAndroid2 className="icon-dw apk" />
								)}

								<div className="file-content-name">{selectedFile.name}</div>
							</div>
						</div>
					))
				) : (
					<>
						<input
							type="file"
							multiple
							accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .exe, .apk"
							onChange={handleFileChange}
							style={{ display: "none" }}
							id="file-input"
						/>
						<label htmlFor="file-input" className="dra-im">
							<div className="file-icon">
								<FaFileAlt className="file" />
							</div>
							<div className="add-vid">Add File</div>
							<div className="or-dr">or drag and drop</div>
						</label>
					</>
				)}
			</div>
			{selectedFiles.length > 0 && (
				<>
					<input
						type="file"
						accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .exe, .apk"
						multiple
						onChange={handleFileChange}
						style={{ display: "none" }}
						id="file-input"
					/>
					<label htmlFor="file-input" className="add-new-pic-or">
						<FaFileAlt className="file" />
						<div className="add-nnew">Add new</div>
					</label>
				</>
			)}
		</>
	);
};

export default PostFormFilesModal;
