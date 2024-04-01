import { useGetAllUsers } from "api/hooks/feeds";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import style from "./tag-friends.module.css"

const TagFriends = ({ handleCloseTagFrdClick, onFriendCheck }) => {
	const { data, isLoading } = useGetAllUsers();
	const [userInput, setUserInput] = useState("");
	const [temporarilyCheckedFriends, setTemporarilyCheckedFriends] = useState(
		[]
	);

	const handleInputChange = (event) => {
		setUserInput(event.target.value);
	};
	const handleCheckboxChange = (item) => {
		const index = temporarilyCheckedFriends.indexOf(item?.id);
		if (index > -1) {
			const updatedFriends = [...temporarilyCheckedFriends];
			updatedFriends.splice(index, 1);
			setTemporarilyCheckedFriends(updatedFriends);
		} else {
			setTemporarilyCheckedFriends([...temporarilyCheckedFriends, item?.id]);
		}
		onFriendCheck(item);
	};

	useEffect(() => {
		const storedFriends = JSON.parse(localStorage.getItem("checkedFriends"));
		if (storedFriends) {
			setTemporarilyCheckedFriends(storedFriends);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			"checkedFriends",
			JSON.stringify(temporarilyCheckedFriends)
		);
	}, [temporarilyCheckedFriends]);

	const filteredData = data?.filter(
		(item) =>
			item?.user?.username?.toLowerCase().includes(userInput.toLowerCase()) ||
			item?.user?.first_name?.toLowerCase().includes(userInput.toLowerCase()) ||
			item?.user?.last_name?.toLowerCase().includes(userInput.toLowerCase())
	);

	if (isLoading) {
		return (
			<div>
				<h4>loading users</h4>
				<p>please wait</p>
			</div>
		);
	}

	return (
		<div className="postFormModal-container">
			<div className={style["tag-friends-container"]}>
				<div className="tag-close-box">
					<AiOutlineArrowLeft
						className="cls-post"
						onClick={handleCloseTagFrdClick}
					/>
					<div className="tag-head">Tag Friends</div>
				</div>
				<div className="body-cont-tag">
					<div className="search-done-box">
						<div className="search-icon-bx">
							<BiSearch />
							<input
								type="text"
								className="tags-inp"
								placeholder="Search for friends"
								onChange={handleInputChange}
							/>
						</div>
						<div className="done-txt" onClick={handleCloseTagFrdClick}>
							Done
						</div>
					</div>
					<div className="sug-txt">Suggestions</div>
					<div className={style["suggestion-list"]}>
						{userInput.length >= 1
							? filteredData?.map((item, index) => (
									<div className="sugg-friend-cont" key={index}>
										<div className="sugg-frd-prof">
											<img
												src={
													item?.profile_picture ??
													"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
												}
												alt=""
											/>
											<div className="pro-tag-nm">{item?.user?.username}</div>
										</div>
										<div className="check-box-tag">
											<input
												type="checkbox"
												className="tag-check-bx"
												onChange={() => handleCheckboxChange(item)}
												checked={temporarilyCheckedFriends.includes(item.id)}
											/>
										</div>
									</div>
							  ))
							: data?.map((item, index) => (
									<div className="sugg-friend-cont" key={index}>
										<div className="sugg-frd-prof">
											<img
												src={
													item?.profile_picture ??
													"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
												}
												alt=""
											/>
											<div className="pro-tag-nm">{item?.user?.username}</div>
										</div>
										<div className="check-box-tag">
											<input
												type="checkbox"
												className="tag-check-bx"
												onChange={() => handleCheckboxChange(item)}
												checked={temporarilyCheckedFriends.includes(item.id)}
											/>
										</div>
									</div>
							  ))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TagFriends;
