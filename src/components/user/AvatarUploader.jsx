/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";

const AvatarUploader = ({ setAvatarId }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [avatarURL, setAvatarURL] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    uploadAvatar(file);
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
        setAvatarURL(data.avatarURL);
        setAvatarId(data.id);
      } else {
        console.error("Failed to upload avatar");
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <div className="col-12 mb-3">
      <section>
        <div className="wrapper" style={{ minHeight: "100%" }}>
          <canvas id="canvasCreate" />
          <label
            htmlFor="imageFileCreate"
            className="image-preview"
            onClick={(e) => handleCanvasClick(e)}
          ></label>
          <div className="content">
            <div className="icon">
              <i className="fas fa-cloud-upload-alt" />
            </div>
            <div className="text">
              {selectedFile ? selectedFile.name : "Chưa chọn file!"}
            </div>
            <div className="text">Dung lượng tối đa = 2MB</div>
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
