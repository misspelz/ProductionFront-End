import React from "react";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { BsAndroid2, BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { IoCloudDownloadSharp } from "react-icons/io5";

const domainUrl = "https://development.2geda.net";
const docUrl = "https://docs.google.com/gview?url=";
const docUrlPrefix = "&embedded=true";

const DisplayMedia = ({ mediaFile }) => {
	const renderFileIcon = (fileType) => {
		if (fileType?.endsWith("pdf")) {
			return <BsFillFileEarmarkPdfFill className="icon-dw pdf" size={24} />;
		}
		if (fileType?.endsWith("doc") || fileType?.endsWith("docx")) {
			return <SiMicrosoftword className="icon-dw word" size={24} />;
		}
		if (fileType?.endsWith("xls") || fileType?.endsWith("xlsx")) {
			return <SiMicrosoftexcel className="icon-dw excel" size={24} />;
		}
		if (fileType?.endsWith("ppt")) {
			return <PiMicrosoftPowerpointLogo className="icon-dw prese" size={24} />;
		}
		if (fileType?.endsWith("exe")) {
			return <PiMicrosoftPowerpointLogo className="icon-dw prese" size={24} />;
		}
		if (fileType?.endsWith("apk")) {
			return <BsAndroid2 className="icon-dw apk" size={24} />;
		}
	};
	if (mediaFile?.file_type?.includes("audio")) {
		const fileName = mediaFile.file.split("/")[3];
		return (
			<div>
				<p>{fileName}</p>
				<audio controls>
					<source src={domainUrl + mediaFile.file} type={mediaFile.file_type} />
				</audio>
			</div>
		);
	}
	if (mediaFile?.file_type?.includes("image")) {
		return <img src={domainUrl + mediaFile.file} alt="" />;
	}
	if (mediaFile?.file_type?.includes("video")) {
		return (
			<video width="100%" height="180" controls>
				<source src={domainUrl + mediaFile.file} type={mediaFile.file_type} />
				Your browser does not support the video tag.
			</video>
		);
	}
	if (mediaFile?.file_type?.includes("application")) {
		const fileName = mediaFile.file.split("/")[3];
		return (
			<>
				<a
					href={docUrl + domainUrl + mediaFile.file + docUrlPrefix}
					rel="noopener noreferrer"
					className="document-media"
					target="_blank"
				>
					<div>{renderFileIcon(mediaFile?.file)}</div>
					<span>{fileName}</span>
					<div></div>
				</a>
				<a
					href={domainUrl + mediaFile.file}
					target="_blank"
					rel="noopener noreferrer"
					download
					className="document-media-btn"
				>
					<IoCloudDownloadSharp /> Download
				</a>
			</>
		);
	}
};

export default DisplayMedia;
