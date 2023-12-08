import React, { useState, useRef, useEffect } from 'react'
import Slider from "react-slick";
import { toast } from 'react-toastify';
import SpinnerUploadImage from '../../layouts/SpinnerUploadImage';

const ImageUploadUpdate = ({
    avatarId,
    setAvatarId,
    selectedFiles,
    setSelectedFiles,
    uploadedFiles,
    setUploadedFiles,
    avatarURLs,
    setAvatarURLs,
    reset,

}) => {

    const [imgUrl, setImgUrl] = useState([]);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    useEffect(() => setImgUrl([]), [reset])

    const fileInputRef = useRef(null);
    const [imageLoading, setImageLoading] = useState();
    const [errorMessage, setErrorMessage] = useState('');




    const handleFileChanged = async (event) => {
        const newFiles = Array.from(event.target.files);
        const invalidFiles = newFiles.filter(file => !isFileValid(file));

        if (invalidFiles.length > 0) {
            setErrorMessage('Chọn các tệp tin không hợp lệ. Chỉ chấp nhận các định dạng .png, .jpg, .jpeg');
            return;
        }

        for (const [index, file] of newFiles.entries()) {
            const uploadedFile = await uploadAvatar([file]);
            console.log('ImageUploadUpdate uploadedFile ===============');


            if (uploadedFile) {
                setAvatarURLs(prevAvatarURLs => [...prevAvatarURLs, uploadedFile.avatarURL]);

            }
        }
        setErrorMessage('');
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

        if (index >= 0 && index < selectedFiles.length) {
            const newSelectedFiles = [...selectedFiles];
            newSelectedFiles.splice(index, 1);
            setSelectedFiles(newSelectedFiles);

            const newAvatarURLs = [...avatarURLs];
            newAvatarURLs.splice(index, 1);
            setAvatarURLs(newAvatarURLs);

            const newAvatarIds = [...avatarId];
            newAvatarIds.splice(index, 1);
            setAvatarId(newAvatarIds);
        }
    };

    const [toastId, setToastId] = useState(null);

    const uploadAvatar = async (files) => {
        const uploadPromises = files.map(async (file, i) => {
            const formData = new FormData();
            formData.append("files", file);
            const uploadingToast = toast.info(`Uploading image ${i + 1} / ${files.length} . . .`, {
                position: "top-right",
                autoClose: 2200,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setToastId(uploadingToast);

            try {
                const response = await fetch("http://localhost:8080/api/files/images", {
                    method: "POST",
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setUploadedFiles((prev) => [...prev, { id: data[0].id }])
                    setAvatarId(prevAvatarId => [...prevAvatarId, data[0].id]);
                    setImgUrl(prev => [...prev, data[0]])
                    toast.update(uploadingToast, {
                        render: `Ảnh đã được tải lên thành công !`,
                        type: toast.TYPE.SUCCESS,
                        autoClose: 2000,
                    });

                } else {
                    console.error(`Failed to upload image '${file.name}'`);
                    toast.update(uploadingToast, {
                        render: `Failed to upload image '${file.name}'`,
                        type: toast.TYPE.ERROR,
                        autoClose: 2000,
                    });
                }
            } catch (error) {
                console.error(`Error uploading image '${file.name}':`, error);
                toast.update(uploadingToast, {
                    render: `Error uploading image '${file.name}'`,
                    type: toast.TYPE.ERROR,
                    autoClose: 2000,
                });
            }
        });

        console.log("uploadAvatar uploadedFiles ===========================");
        console.log(uploadedFiles);

        await Promise.all(uploadPromises);
    };


    return (
        <div style={{ border: "solid 1px", height: "70%" }}>
            <Slider {...settings}>
                {
                    selectedFiles && selectedFiles.map((file, index) => (
                        <div key={index} className="image-container">

                            <img
                                src={file.url}
                                alt={file}
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
                    ))
                }

                {
                    imgUrl && imgUrl.map((file, index) => (
                        <div key={index} className="image-container">

                            <img
                                src={file.url}
                                alt={file.fileName}
                                // alt=''
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
                    ))
                }

                <label
                    htmlFor="imageFileUpdate"
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
                    {selectedFiles > 0 ? (
                        <div className="content-img">
                            <div className="icon">
                                <i className="fa-solid fa-cloud-arrow-up"></i>
                            </div>
                            <div className="text center">
                                Thêm ảnh update
                            </div>
                        </div>
                    ) : (
                        <div className="content-img">
                            <div className="icon">
                                <i className="fa-solid fa-cloud-arrow-up"></i>
                            </div>
                            <div className="text center">
                                Chưa chọn file!
                            </div>
                        </div>
                    )}
                </label>

                <input
                    type="file"
                    id="imageFileUpdate"
                    name='imgUrl'
                    accept="image/jpeg, image/png"
                    hidden
                    ref={fileInputRef}
                    onChange={handleFileChanged}
                    multiple
                />
            </Slider >
            {/* <span className="text-danger">{errors?.files?.message}</span> */}
            {errorMessage && (
                <span style={{ color: 'red' }}>{errorMessage}</span>
            )}
        </div >
    )
}

export default ImageUploadUpdate
