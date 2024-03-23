import React, { useState } from "react";
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
import TagFriends from "../TagFriends";
import data from "utils/tag.json";
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { useCreateFeedsPost, useCreatePostFile } from "api/hooks/feeds";
import Custombutton from "components/Custom-button/Custombutton";

const topFriends = [
	{ name: "Alice Oghene", id: 1 },
	{ name: "John doe", id: 2 },
	{ name: "Simeon Harry", id: 3 },
	{ name: "Theresa Oliver", id: 4 },
	{ name: "Idris Haruna", id: 5 },
];

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
	const hashtags = ["#programming", "#technology", "#art", "#travel"];
	const [checkedFriends, setCheckedFriends] = useState([]);
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

	const handleFriendCheck = (img) => {
		if (checkedFriends.includes(img)) {
			setCheckedFriends(checkedFriends.filter((friend) => friend !== img));
		} else {
			setCheckedFriends([...checkedFriends, img]);
		}
	};

	const handleRemoveTagFrd = (index) => {
		const updatedFriends = [...checkedFriends];
		updatedFriends.splice(index, 1);
		setCheckedFriends(updatedFriends);
	};

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
			console.log({ response });
			for (const value of postFileData.values()) {
				console.log(value);
			}
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
			Swal.fire({
				icon: "error",
				title: "An error occured",
				text: "unable to create post at this time, please try again",
				confirmButtonText: "OK",
			})
		},
	});

	const handlePost = () => {
		let data = new FormData();
		let textData = new FormData();
		if (exe?.[0]) {
			data.append("files", exe[0]);
		}
		if (word?.[0]) {
			data.append("files", word[0]);
		}
		if (excel?.[0]) {
			data.append("files", excel[0]);
		}
		if (location) {
			textData.append(
				"location",
				`${location?.latitude},${location?.longitude}`
			);
		}
		if (audioFile?.[0]) {
			data.append("files", audioFile[0]);
		}

		if (images.length > 0) {
			images.map((image) => {
				return data.append("files", image);
			});
		}
		if (selectedFile.length > 0) {
			selectedFile.map((file) => {
				return data.append("files", file);
			});
		}

		textData.append("hashtags", addedTags);
		textData.append("text_content", contentText);
		// data.append("url", "https://example.com");
		// data.append("is_business_post", "True");
		// data.append("tagged_users", TagFriends);
		setPostFileData(data);
		createPost(textData);
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
							data={data}
							onFriendCheck={handleFriendCheck}
						/>
					</div>
				)}
				<div className="hashtags-container" onClick={handleTagFrdClick}>
					<div className="add-tags-frd">Tag Friends</div>
				</div>
				<div className="taged-frd-box">
					{checkedFriends.map((img, index) => (
						<div className="tag-frd-cont" key={index}>
							<img src={img} alt="" />
							<IoCloseSharp
								className="cls-tag-fr"
								onClick={() => handleRemoveTagFrd(index)}
							/>
						</div>
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
