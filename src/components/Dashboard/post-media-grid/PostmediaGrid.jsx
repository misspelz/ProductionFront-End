import React from "react";
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";
import {
	BsFillFileEarmarkPdfFill,
	BsAndroid2,
	BsFiletypeExe,
} from "react-icons/bs";
import "./media-grid.css";

const domainUrl = "https://development.2geda.net";
const RenderMedia = ({ mediaFile }) => {
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
			<div className="media-item-container">
				<audio controls>
					<source src={domainUrl + mediaFile.file} type={mediaFile.file_type} />
				</audio>
			</div>
		);
	}
	if (mediaFile?.file_type?.includes("image")) {
		return (
			<img
				src={domainUrl + mediaFile.file}
				alt=""
				className="media-item-container"
			/>
		);
	}
	if (mediaFile?.file_type?.includes("video")) {
		return (
			<video
				controls
				className="media-item-container"
			>
				<source src={domainUrl + mediaFile.file} type={mediaFile.file_type} />
				Your browser does not support the video tag.
			</video>
		);
	}
	if (mediaFile?.file_type?.includes("application")) {
		const fileName = mediaFile.file.split("/")[3];
		return (
			<div
				className="document-media media-item-container"
			>
				<div>{renderFileIcon(mediaFile?.file)}</div>
				<span>{fileName}</span>
			</div>
		);
	}
};

const PostmediaGrid = ({ media }) => {
	return (
		<>
			{media?.length === 1 && (
				<div className="post-media-container post-media-single-grid">
					<RenderMedia mediaFile={media[0]} />
				</div>
			)}

			{media?.length === 2 && (
				<div className="post-media-container post-media-double-grid">
					{media?.map((item) => (
						<RenderMedia mediaFile={item} />
					))}
				</div>
			)}
			{media?.length === 3 && (
				<div className="post-media-container post-media-triple-grid">
					{media?.map((item) => (
						<RenderMedia mediaFile={item} />
					))}
				</div>
			)}

			{media?.length === 4 && (
				<div className={`post-media-container post-media-grid`}>
					{media?.map((item) => (
						<RenderMedia mediaFile={item} />
					))}
				</div>
			)}

			{media?.length > 4 && (
				<div className={`post-media-container grid-with-overlay`}>
					{media?.slice(0, 3).map((item) => (
						<RenderMedia mediaFile={item} />
					))}
					{media?.length > 4 && (
						<div className="grid-media-overlay-item">
							<RenderMedia mediaFile={media[3]} />
							<div className="grid-media-count">+ {media?.length - 3}</div>
						</div>
					)}
				</div>
			)}
		</>
	);
};

export default PostmediaGrid;
