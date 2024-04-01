import React, { useState, useEffect } from "react";
import { BsCardImage, BsMic } from "react-icons/bs";
import { FaVideo, FaMusic, FaFileAlt } from "react-icons/fa";
import { SiMicrosoftword, SiMicrosoftexcel } from "react-icons/si";
import { IoLocation, IoCloseSharp } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import "./post-modal.css";
import PostFormPhotoModal from "./PostFormPhotoModal";
import PostFormMusicModal from "./PostFormMusicModal";
import PostFormRecModal from "./PostFormRecModal";
import PostFormWordModal from "./PostFormWordModal";
import PostFormExcelModal from "./PostFormExcelModal";
import PostFormExeModal from "./PostFormExeModal";
import PostFormLocationModal from "./PostFormLocModal";
import PostFormFilesModal from "./PostFormFilesModal";
import HashtagModal from "../HashTagModal";
import TagFriends from "./tag-friends/TagFriends";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { useCreateFeedsPost, useCreatePostFile } from "api/hooks/feeds";
import Custombutton from "components/Custom-button/Custombutton";
import { PiSuitcaseSimple } from "react-icons/pi";

const icon = <MdCheckBoxOutlineBlank size={18} />;
const checkedIcon = <MdOutlineCheckBox size={18} />;

const PostFormModal = ({
	handleCloseMainContainerClick,
	selectedIcon,
	handleIconClick,
}) => {
	const [userInput, setUserInput] = useState("");
	const [suggestedHashtags, setSuggestedHashtags] = useState([]);
	const [addedTags, setAddedTags] = useState([]);
	const [isTagsFrd, setIsTagsFrd] = useState(false);
	const [selectedSuggestion] = useState("");
	const hashtags = ["#programming", "#outside", "#art"];
	const [checkedFriends, setCheckedFriends] = useState([]);
	const [taggedUserIds, setTaggedUserIds] = useState([]);
	const [images, setImages] = useState([]);
	const [selectedFile, setSelectedFile] = useState([]);
	const [audioFile, setAudioFile] = useState([]);
	const [word, setWord] = useState([]);
	const [excel, setExcel] = useState([]);
	const [exe, setExe] = useState([]);
	const [music, setMusic] = useState([]);
	const [contentText, setContentText] = useState(null);
	const [location, setLocation] = useState(null);
	const [postFileData, setPostFileData] = useState(null);
	const sampleJob = {
		job_title: "Robotics Engineer",
		company_name: "Xendia Tech",
		min_salary: 400000,
		max_salary: 500000,
		period: 1,
		job_description:
			"A dedicated Robotics Engineer with 5 yrs experience in Java, C++ and Python",
	};

	const handleFriendCheck = (item) => {
		if (checkedFriends.includes(item)) {
			setCheckedFriends(
				checkedFriends.filter((friend) => friend.id !== item?.id)
			);
		} else {
			setCheckedFriends([...checkedFriends, item]);
		}
	};

	const handleRemoveTagFrd = (index) => {
		const updatedFriends = [...checkedFriends];
		updatedFriends.splice(index, 1);
		setCheckedFriends(updatedFriends);
	};

	useEffect(() => {
		setTaggedUserIds(checkedFriends.map((item) => item?.id));
	}, [checkedFriends]);

	const handleInputChange = (event) => {
		const inputText = event.target.value;
		setUserInput(inputText);

		const filteredHashtags = hashtags.filter((tag) =>
			tag.toLowerCase().includes(inputText.toLowerCase())
		);
		setSuggestedHashtags(filteredHashtags);
	};

	const handleEnterPress = (event) => {
		if (
			(event.key === "Enter" || event.key === "Tab") &&
			userInput.length > 0
		) {
			setAddedTags([...addedTags, userInput]);
			setUserInput("");
		}
	};

	const handleRemoveTag = (index) => {
		const updatedTags = [...addedTags];
		updatedTags.splice(index, 1);
		setAddedTags(updatedTags);
	};

	const handleSuggestionClick = (suggestion) => {
		setAddedTags([...addedTags, suggestion]);
	};

	const handleTagFrdClick = () => {
		setIsTagsFrd(true);
	};

	const handleCloseTagFrdClick = () => {
		setIsTagsFrd(false);
	};

	const addFileFn = useCreatePostFile({
		postFileData: postFileData,
		onSuccess: () => {
			handleCloseMainContainerClick();
			Swal.fire({
				icon: "success",
				title: "Post Successful!",
				text: "Your media post has been successfully posted.",
				confirmButtonText: "OK",
			}).then(() => {
				Swal.close();
			});
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});
	const { createPost, isLoading, isError } = useCreateFeedsPost({
		onSuccess: (response) => {
			if (postFileData) {
				addFileFn.postFile(response?.data?.post?.id);
				return;
			}
			handleCloseMainContainerClick();
			Swal.fire({
				icon: "success",
				title: "Post Successful!",
				text: "Your text content post has been successfully posted.",
				confirmButtonText: "OK",
			}).then(() => {
				Swal.close();
			});
		},
		onError: () => {
			handleCloseMainContainerClick();
			Swal.fire({
				icon: "error",
				title: "An error occured",
				text: "unable to create post at this time, please try again",
				confirmButtonText: "OK",
			});
		},
	});

	const handlePost = () => {
		let fileData = new FormData();
		let plainData = {};

		if (exe?.[0]) {
			fileData.append("files", exe[0]);
		}
		if (word?.[0]) {
			fileData.append("files", word[0]);
		}
		if (excel?.[0]) {
			fileData.append("files", excel[0]);
		}
		if (location) {
			plainData.location = `${location?.latitude},${location?.longitude}`;
		}
		if (audioFile?.[0]) {
			fileData.append("files", audioFile[0]);
		}
		if (music?.[0]) {
			fileData.append("files", music[0]);
		}

		if (images.length > 0) {
			images.map((image) => {
				return fileData.append("files", image);
			});
		}
		if (selectedFile.length > 0) {
			selectedFile.map((file) => {
				return fileData.append("files", file);
			});
		}

		plainData.hashtags = hashtags;
		plainData.text_content = contentText;
		plainData.tagged_users = taggedUserIds;
		setPostFileData(fileData);
		createPost(plainData);
	};

	return (
		<>
			<div className="postFormModal-container">
				<div className="post-clos-box">
					<div className="post-ead">Post on feed</div>
					<AiOutlineClose
						className="cls-post"
						onClick={handleCloseMainContainerClick}
					/>
				</div>
				<textarea
					name=""
					id=""
					placeholder="Write up to 1,000 words"
					className="text-area"
					onChange={(event) => setContentText(event.target.value)}
				></textarea>
				<div className="viwdt">
					{selectedIcon === "photo" && (
						<PostFormPhotoModal images={images} setImages={setImages} />
					)}
					{selectedIcon === "music" && (
						<PostFormMusicModal music={music} setMusic={setMusic} />
					)}
					{selectedIcon === "rec" && (
						<PostFormRecModal setAudioFile={setAudioFile} />
					)}
					{selectedIcon === "word" && (
						<PostFormWordModal setword={setWord} word={word} />
					)}
					{selectedIcon === "excel" && (
						<PostFormExcelModal setExcel={setExcel} excel={excel} />
					)}
					{selectedIcon === "exe" && (
						<PostFormExeModal setExe={setExe} exe={exe} />
					)}
					{selectedIcon === "location" && (
						<PostFormLocationModal
							location={location}
							setLocation={setLocation}
						/>
					)}
					{selectedIcon === "allfiles" && (
						<PostFormFilesModal
							selectedFiles={selectedFile}
							setSelectedFiles={setSelectedFile}
						/>
					)}
					{selectedIcon === "job" && (
						<PostFormFilesModal
							selectedFiles={selectedFile}
							setSelectedFiles={setSelectedFile}
						/>
					)}
				</div>
				<div className="hashtags-container">
					<div className="add-tags-btn">Add hashtag</div>
					{addedTags.map((tag, index) => (
						<div className="add-tags-btn added-tag-cont" key={index}>
							<div className="added-tag-tst">{tag}</div>
							<AiOutlineClose
								className="cls-tag"
								onClick={() => handleRemoveTag(index)}
							/>
						</div>
					))}
					<div className="add-tags-btn added-tag-cont">
						<div className="added-tag-tst">
							<input
								type="text"
								className="let-inp"
								value={selectedSuggestion || userInput}
								onChange={handleInputChange}
								onKeyDown={handleEnterPress}
								placeholder="Type here"
							/>
						</div>
						<AiOutlineClose className="cls-tag" />
						{userInput.length > 0 && (
							<HashtagModal
								hashtags={suggestedHashtags}
								onHashtagClick={handleSuggestionClick}
							/>
						)}
					</div>
				</div>
				{isTagsFrd && (
					<div className="modal-full-container">
						<TagFriends
							handleCloseTagFrdClick={handleCloseTagFrdClick}
							onFriendCheck={handleFriendCheck}
						/>
					</div>
				)}
				<div className="hashtags-container" onClick={handleTagFrdClick}>
					<div className="add-tags-frd">Tag Friends</div>
				</div>
				<div className="taged-frd-box">
					{checkedFriends.map((item, index) => (
						<>
							<div className="tag-frd-cont" key={index}>
								<img
									src={
										item?.profile_picture ??
										"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
									}
									alt=""
								/>
								<IoCloseSharp
									className="cls-tag-fr"
									onClick={() => handleRemoveTagFrd(index)}
								/>
							</div>
							{/* <span>{item?.username}</span> */}
						</>
					))}
				</div>
				<div className="down-post-feed">
					<div className="icon-post-feed">
						<BsCardImage
							className="pic-vid"
							onClick={() => handleIconClick("photo")}
						/>
						<FaVideo
							className="pic-vid"
							onClick={() => handleIconClick("photo")}
						/>
						<IoLocation
							className="loca"
							onClick={() => handleIconClick("location")}
						/>
						<FaMusic
							className="music"
							onClick={() => handleIconClick("music")}
						/>
						<BsMic className="mic" onClick={() => handleIconClick("rec")} />
						<FaFileAlt
							className="fil"
							onClick={() => handleIconClick("allfiles")}
						/>
						<SiMicrosoftword
							className="word"
							onClick={() => handleIconClick("word")}
						/>
						<SiMicrosoftexcel
							className="excel"
							onClick={() => handleIconClick("excel")}
						/>
						<PiSuitcaseSimple
							className="fil"
							onClick={() => handleIconClick("job")}
						/>
					</div>
					<Custombutton
						className="post-btn"
						type="submit"
						onClick={handlePost}
						name={isLoading || addFileFn.isLoading ? "Posting" : "Post"}
						disabled={isLoading || addFileFn.isLoading}
					/>
				</div>
			</div>
		</>
	);
};

export default PostFormModal;

// textData.is_job_post = true;
// textData.job_details = sampleJob;
// data.append("url", "https://example.com");
// textData.append("job_details", sampleJob);
// setPostFileData(data);
