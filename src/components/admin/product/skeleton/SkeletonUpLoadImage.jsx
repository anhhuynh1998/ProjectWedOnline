import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonUpLoadImage = ({ count = 1, height = 200 }) => {
    return (
        <div className="skeleton-upload">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="image-container">
                    <Skeleton height={height} />
                </div>
            ))}
        </div>
    )
}

export default SkeletonUpLoadImage
