import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { toast } from 'react-toastify';
import SpinnerUploadImage from '../../layouts/SpinnerUploadImage';

const ImageUpload = ({
    avatarId,
    setAvatarId,
    selectedFiles,
    setSelectedFiles,
    avatarURLs,
    setAvatarURLs,
    uploadedFileCreate,
    setUploadedFileCreate,
    errors
}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    const fileInputRef = useRef(null);
    const uploadedImageRefs = useRef([]);

    const [imageLoading, setImageLoading] = useState(Array(selectedFiles.length).fill(true));
    const [uploadedFile, setUploadedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const setLoadingForImage = (index, isLoading) => {
        setImageLoading(prevState => {
            const newState = [...prevState];
            newState[index] = isLoading;
            return newState;
        });
    };

    const handleFileChange = async (event) => {
        const newFiles = Array.from(event.target.files);
        const invalidFiles = newFiles.filter(file => !isFileValid(file));

        if (invalidFiles.length > 0) {
            setErrorMessage('Chọn các tệp tin không hợp lệ. Chỉ chấp nhận các định dạng .png, .jpg, .jpeg');
            return;
        }
        for (const [index, file] of newFiles.entries()) {
            setLoadingForImage(index, true);

            try {
                const uploadedFileData = await uploadAvatar([file]);
                console.log(uploadedFileData);

                if (uploadedFileData) {
                    setAvatarURLs(prevAvatarURLs => [...prevAvatarURLs, uploadedFileData.avatarURL]);
                    setUploadedFile(uploadedFileData);
                }

                setLoadingForImage(index, false);
            } catch (error) {
                console.error(`Error uploading image '${file.name}':`, error);
                setLoadingForImage(index, false);
            }
        }

        setSelectedFiles([...uploadedFileCreate, ...newFiles]);
        setErrorMessage('');
        if (uploadedFileCreate.length + newFiles.length > 0) {
            const lastImageRef = uploadedImageRefs.current[uploadedImageRefs.current.length - 1];
            console.log("lastImageRef:", lastImageRef);
            lastImageRef?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    };

    const isFileValid = (file) => {
        // Kiểm tra định dạng của file
        const allowedFormats = ["image/png", "image/jpeg", "image/jpg"];
        if (!allowedFormats.includes(file.type)) {
            return false;
        }
        return true;
    };



    const handleRemoveImage = (index) => {
        const newSelectedFiles = [...uploadedFileCreate];
        newSelectedFiles.splice(index, 1);
        setUploadedFileCreate(newSelectedFiles);

        const newAvatarURLs = [...avatarURLs];
        newAvatarURLs.splice(index, 1);
        setAvatarURLs(newAvatarURLs);

        const newAvatarIds = [...avatarId];
        newAvatarIds.splice(index, 1);
        setAvatarId(newAvatarIds);
    };

    const [toastId, setToastId] = useState(null);

    const uploadAvatar = async (files) => {
        const uploadPromises = files.map(async (file, i) => {
            const formData = new FormData();
            formData.append("files", file);

            const uploadingToast = toast.info(`Đang tải ảnh ${i + 1} / ${files.length} . . .`, {
                position: "top-right",
                autoClose: 2200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setToastId(uploadingToast);

            try {
                const response = await fetch("http://localhost:8080/api/admin/files/images", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setUploadedFileCreate((prev) => [...prev, data[0]]);
                    setAvatarId(prevAvatarId => [...prevAvatarId, data[0].id]);

                    toast.update(uploadingToast, {
                        render: `Ảnh đã được tải lên thành công !`,
                        type: toast.TYPE.SUCCESS,
                        autoClose: 2000,
                    });

                    return data[0];
                } else {
                    console.error(`Failed to upload image '${file.name}'`);
                    toast.update(uploadingToast, {
                        render: `Failed to upload image '${file.name}'`,
                        type: toast.TYPE.ERROR,
                        autoClose: 2000,
                    });
                    return null;
                }
            } catch (error) {
                console.error(`Error uploading image '${file.name}':`, error);
                toast.update(uploadingToast, {
                    render: `Error uploading image '${file.name}'`,
                    type: toast.TYPE.ERROR,
                    autoClose: 2000,
                });
                return null;
            }
        });

        const results = await Promise.all(uploadPromises);
        return results.filter(result => result !== null); // Lọc bỏ các giá trị null (các file không thành công)
    };

    return (
        <div style={{ border: "solid 1px", height: "70%" }}>
            <Slider {...settings}>
                {uploadedFileCreate.map((file, index) => (
                    <div key={index} className={`image-container ${imageLoading[index] ? 'loading' : ''}`}
                        ref={(ref) => (uploadedImageRefs.current[index] = ref)}
                    >

                        <img
                            src={file.url}
                            alt={file.fileName}
                            className="product-image"
                            style={{
                                width: "70%",
                                height: "70%",
                                margin: "5px",
                                border: "solid 1px"
                            }}
                        />


                        <button
                            className="btn-closeImage"
                            onClick={() => handleRemoveImage(index)}
                            type="button"
                            style={{
                                borderRadius: "1px",
                                zIndex: 1,
                                position: "absolute",
                                left: "130px",
                                background: "none",
                                top: "15px",
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "red"
                            }}
                        >
                            X
                        </button>
                    </div>
                ))}

                <label
                    htmlFor="imageFileCreate"
                    className="image"
                    style={{
                        position: "absolute",
                        height: "80%",
                        display: "flex",
                        width: "80%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {(uploadedFileCreate && uploadedFileCreate.length > 0) ? (
                        <div className="content-imgCreate" style={{ textAlign: 'left' }}>
                            <div className="icon">
                                <i className="fa-solid fa-cloud-arrow-up"></i>
                            </div>
                            <div className="content-imgCreate">
                                {uploadedFileCreate && uploadedFileCreate.length > 0 ? '   Thêm Ảnh !!' : 'Chưa chọn Files!'}
                            </div>
                        </div>
                    ) : (
                        <div className="content-imgCreate" style={{ textAlign: 'center', marginLeft: '50%' }}>
                            <div className="icon">
                                <i className="fa-solid fa-cloud-arrow-up"></i>
                            </div>
                            <div className="content-imgCreate">
                                {uploadedFileCreate && uploadedFileCreate.length > 0 ? 'Thêm Ảnh !!' : ' Chưa chọn Files!'}
                            </div>
                        </div>
                    )}

                </label>

                <input
                    type="file"
                    id="imageFileCreate"
                    name='imgUrl'
                    accept="image/jpeg, image/png"
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    multiple
                />
            </Slider>
            {/* <span className="text-danger">{errors?.files?.message}</span> */}
            {errorMessage && (
                <span style={{ color: 'red' }}>{errorMessage}</span>
            )}
        </div>
    );
};

export default ImageUpload;
