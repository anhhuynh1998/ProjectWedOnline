/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef } from "react";

const AvatarUploader = ({
  setAvatarId,
  setSelectedFile,
  setSelectedImage,
  setAvatarURL,
  selectedFile,
  selectedImage,
  avatarUrl,
  noneContent,
  setNoneContent,
}) => {
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    console.log("demo");
    const file = event.target.files[0];
    const allowedFormats = ["image/jpeg", "image/png"];

    if (file && allowedFormats.includes(file.type)) {
      setSelectedFile(file);
      uploadAvatar(file);
      setNoneContent(true);

      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Vui lòng chọn file có định dạng JPG hoặc PNG");
    }
  };

  const handleCanvasClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append("files", file);
    try {
      const response = await fetch("http://localhost:8080/api/files/images", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setAvatarURL(data[0].url);
        setAvatarId(data[0].id);
      } else {
        console.error("Không tải được hình đại diện lên");
      }
    } catch (error) {
      console.error("Lỗi tải hình đại diện lên:", error);
    }
  };
  console.log(avatarUrl);
  return (
    <div className="col-12 mb-3">
      <section>
        <div className="wrapper" style={{ minHeight: "100%" }}>
          <label
            htmlFor="imageFileCreate"
            className="image-preview"
            onClick={(e) => {
              handleCanvasClick(e);
            }}
          ></label>
          {(selectedImage || avatarUrl) && (
            <img src={selectedImage || avatarUrl} alt="Selected" />
          )}
          <div
            className="content"
            style={{ display: noneContent || avatarUrl ? "none" : "block" }}
          >
            <div
              className="icon"
              style={{ textAlign: "center", display: "flex" }}
            >
              <i className="fas fa-cloud-upload-alt" />
            </div>
            <div className="text">
              {selectedFile || avatarUrl
                ? selectedFile?.name || "Anh cu"
                : "Chưa chọn file!"}
            </div>
          </div>
          <div className="clear-image-preview">
            <i className="fas fa-times" />
          </div>
          <div className="file-name">Thay đổi ảnh</div>
        </div>
        <input
          type="file"
          id="imageFileCreate"
          accept="image/jpeg, image/png"
          hidden
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </section>
    </div>
  );
};

export default AvatarUploader;
