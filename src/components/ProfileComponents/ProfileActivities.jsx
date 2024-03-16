import ProfileActivityButton from "./ProfileActivityButton";
import image from "../../assets/profile_images/post-1.png";
import kuda from "../../assets/profile_images/kuda-ads.png";
import { useAllUserPosts } from "pages/Profile/useAllUserPosts";
import { EmptyResults } from "components/EmptyResults";
import ContainerLoading from "components/ContainerLoading";
import ContainerError from "components/ContainerError";

const ProfileActivities = () => {
  const { userPostsStatus, userPosts, tab } = useAllUserPosts();

  const updatingText =
    tab === "all"
      ? "Posts"
      : tab === "voice_notes"
      ? "Voice notes"
      : tab === "locations"
      ? "Locations"
      : tab;

  return (
    <div className="profile_activities">
      <div className="cta-btns">
        <ProfileActivityButton
          count={tab === "all" ? userPosts?.data?.length : ""}
          param="all"
        >
          All Posts
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "images" ? userPosts?.data?.length : ""}
          param="images"
        >
          Images
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "videos" ? userPosts?.data?.length : ""}
          param="videos"
        >
          Videos
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "voice_notes" ? userPosts?.data?.length : ""}
          param="voice_notes"
        >
          Voice note
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "locations" ? userPosts?.data?.length : ""}
          param="locations"
        >
          Location
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "musics" ? userPosts?.data?.length : ""}
          param="musics"
        >
          Musics
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "file" ? userPosts?.data.length : ""}
          param="file"
        >
          Files
        </ProfileActivityButton>
      </div>

      {/* TABS LOGICS GOES BELOW */}

      {userPostsStatus === "pending" ? (
        <ContainerLoading height={80} unit="px" />
      ) : userPostsStatus === "error" ? (
        <ContainerError height={80} unit="px" />
      ) : !userPosts?.data?.length ? (
        <EmptyResults type={updatingText} />
      ) : (
        <div className="profile_posts">
          {Array.from({ length: 24 }, (_, i) => i + 1).map((i) => (
            <div className="profile_posts_container" key={i}>
              <img src={image} alt="POST" />
            </div>
          ))}
        </div>
      )}

      <div className="profile_activities_bottom_ads">
        <img src={kuda} alt="KUDA" />
      </div>
    </div>
  );
};

export default ProfileActivities;
