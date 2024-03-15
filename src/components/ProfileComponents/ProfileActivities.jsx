import ProfileActivityButton from "./ProfileActivityButton";
import image from "../../assets/profile_images/post-1.png";
import kuda from "../../assets/profile_images/kuda-ads.png";
import { useAllUserPosts } from "pages/Profile/useAllUserPosts";
import { EmptyResults } from "components/EmptyResults";
import ContainerLoading from "components/ContainerLoading";
import ContainerError from "components/ContainerError";

const ProfileActivities = () => {
  const { userPostsStatus, userPosts, tab } = useAllUserPosts();

  return (
    <div className="profile_activities">
      <div className="cta-btns">
        <ProfileActivityButton
          count={tab === "all" ? userPosts?.posts.length : ""}
          param="all"
        >
          All Posts
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "images" ? userPosts?.posts.length : ""}
          param="images"
        >
          Images
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "videos" ? userPosts?.posts.length : ""}
          param="videos"
        >
          Videos
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "voice_notes" ? userPosts?.posts.length : ""}
          param="voice_notes"
        >
          Voice note
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "locations" ? userPosts?.posts.length : ""}
          param="locations"
        >
          Location
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "musics" ? userPosts?.posts.length : ""}
          param="musics"
        >
          Music
        </ProfileActivityButton>
        <ProfileActivityButton
          count={tab === "files" ? userPosts?.posts.length : ""}
          param="files"
        >
          Files
        </ProfileActivityButton>
      </div>

      {/* TABS LOGICS GOES BELOW */}

      {userPostsStatus === "pending" ? (
        <ContainerLoading height={80} unit="px" />
      ) : userPostsStatus === "pending" ? (
        <ContainerError height={80} unit="px" />
      ) : userPosts?.posts?.length === 0 ? (
        <EmptyResults type="posts" />
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
