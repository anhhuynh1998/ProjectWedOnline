import React, { useRef, useState } from 'react';

const AvatarUploader = ({ setAvatarId }) => {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event) => {
        event.preventDefault();

        const newFiles = event.target.files;
        setSelectedFiles([...selectedFiles, ...newFiles]);

        if (!uploading) {
            setUploading(true);
            uploadAvatar(newFiles);
        }
    };

    const handleCanvasClick = () => {
        fileInputRef.current.click();
    };

    const handleRemoveImage = (index) => {
        const newSelectedFiles = [...selectedFiles];
        newSelectedFiles.splice(index, 1);
        setSelectedFiles(newSelectedFiles);
    };

    const uploadAvatar = async (files) => {
        const formData = new FormData();
        Array.from(files).forEach(file => formData.append("files", file));

        try {
            const response = await fetch("http://localhost:8080/api/files/images", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setAvatarId(data.id);
            } else {
                console.error("Failed to upload avatar");
            }
        } catch (error) {
            console.error("Error uploading avatar:", error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="col-12 mb-3">
            <section>
                <div className="wrapper" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <label
                        htmlFor="imageFileCreate"
                        className="image-preview"
                        onClick={handleCanvasClick}
                    >
                        {Array.from(selectedFiles).map((file, index) => (
                            <div key={index} className="selected-image">
                                <img src={URL.createObjectURL(file)} alt={file.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                                <button onClick={() => handleRemoveImage(index)}>&times;</button>
                            </div>
                        ))}
                        <canvas id="canvasCreate" />
                    </label>
                    <div className="content">
                        <div className="icon">
                            <i className="fas fa-cloud-upload-alt" />
                        </div>
                        <div className="text">
                            {selectedFiles.length > 0
                                ? `${selectedFiles.length} ${selectedFiles.length === 1 ? 'file' : 'files'} selected`
                                : "Chưa chọn file!"
                            }
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
                    multiple  // Cho phép chọn nhiều tệp
                />
            </section>
        </div>
    );
};

export default AvatarUploader;
