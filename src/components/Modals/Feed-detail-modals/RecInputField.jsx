import { useRef, useState, useEffect } from "react";
import { useCreateComment } from "api/hooks/feeds";
import { BsSoundwave } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import "./feed-detail-modal.css";
import Custombutton from "components/Custom-button/Custombutton";

const RecInputField = ({ postId, onStop }) => {
	const { comment, isLoading } = useCreateComment({
		postId,
		onSuccess: (response) => {
			console.log({ response });
			setAudioFile(null);
		},
		onError: (errorResponse) => {
			console.log({ errorResponse });
		},
	});
	const indicatorRef = useRef(null);
	const iconArray = new Array(70).fill(null);
	const mediaRecorder = useRef(null);
	const [audioBlob, setAudioBlob] = useState(null);
	const [audioFile, setAudioFile] = useState(null);
	const [isRecording, setIsRecording] = useState(false);

	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
			});
			mediaRecorder.current = new MediaRecorder(stream);

			const chunks = [];

			mediaRecorder.current.ondataavailable = (e) => {
				if (e.data.size > 0) {
					chunks.push(e.data);
				}
			};

			mediaRecorder.current.onstop = () => {
				const blob = new Blob(chunks, { type: "audio/wav" });
				setAudioBlob(blob);
				setIsRecording(false); // Update recording status when recording stops
				setAudioFile([blob]);
			};

			mediaRecorder.current.start();
			setIsRecording(true); // Update recording status when recording starts
		} catch (error) {
			console.error("Error accessing microphone:", error);
		}
	};

	const stopRecording = () => {
		if (mediaRecorder.current && mediaRecorder.current.state === "recording") {
			mediaRecorder.current.stop();
		}
	};

	const handleDeleteItem = () => {
		setAudioBlob(null);
		setAudioFile(null);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (indicatorRef.current) {
				indicatorRef.current.scrollLeft += 1; // Adjust the speed by changing the value
			}
		}, 5000000); // Adjust the interval to change the speed of scrolling

		return () => clearInterval(interval);
	}, []);
	const audioRef = useRef(null);

	const handlePlay = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
		}
	};

	function handleComment() {
		let commentData = new FormData();
		commentData.append("text_content", "");
		commentData.append("file", audioFile);
		comment(commentData);
	}
	return (
		<>
			<div className="pic-cont-box">
				<div className="np-pic-bx">
					{!audioBlob && !isRecording && (
						<div className="not-wrt">Click start to record</div>
					)}
					{audioBlob ? (
						<div className="audio-item">
							<audio
								className="aud-st"
								controls
								onPlay={handlePlay}
								ref={audioRef}
							>
								<source src={URL.createObjectURL(audioBlob)} type="audio/wav" />
								Your browser does not support the audio tag.
							</audio>
						</div>
					) : (
						<>
							{isRecording && (
								<div
									className="recording-indicator fnt"
									ref={indicatorRef}
									style={{ overflow: "hidden", width: "100%" }}
								>
									<div className="con-sl img-box">
										{iconArray.map((_, index) => (
											<BsSoundwave key={index} className="nn" />
										))}
									</div>

									{/* .:::...::::..:::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::..:::...::::..::::::::....::::.......:.....:..:::::. */}
								</div>
							)}
						</>
					)}
				</div>

				<hr className="ln-hr" />
				<div className="inp-sen-send jus">
					{audioBlob ? (
						<AiFillDelete className="cur" onClick={handleDeleteItem} />
					) : (
						<button
							onClick={isRecording ? stopRecording : startRecording}
							className={`${
								isRecording ? "stop-recordcom record" : "start-recordcom record"
							} ${isRecording ? "recording" : ""}`}
						>
							{isRecording ? "Stop" : "Start"}
						</button>
					)}
					<div className="">
						<Custombutton
							className="com-icon-btn"
							type="submit"
							onClick={handleComment}
							name={
								isLoading ? (
									""
								) : (
									<MdSend className="cur" size={22} color="#4f0da3" />
								)
							}
							disabled={isLoading}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default RecInputField;
