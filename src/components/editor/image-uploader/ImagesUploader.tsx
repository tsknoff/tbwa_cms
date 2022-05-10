import React from 'react';
import ImageUploading from "react-images-uploading";
import MyButton from "../UI/MyButton";

const ImagesUploader = () => {
    const [images, setImages] = React.useState([]);
    const maxNumber = 69;
    const onChange = (imageList:any, addUpdateIndex:any) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className="App">
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper" {...dragProps}>

                        <MyButton value={"Add image"} label={"inspect"} onClick={onImageUpload} />
                        <MyButton value={"Remove all"} label={"remove all"} onClick={onImageRemoveAll} />

                        {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                                <img src={image.data_url} alt="" width="400" />
                                <div className="image-item__btn-wrapper">
                                    <MyButton value={"Update"} label={"inspect"} onClick={() => onImageUpdate(index)} />
                                    <MyButton value={"Remove"} label={"remove all"} onClick={() => onImageRemove(index)} />
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default ImagesUploader;