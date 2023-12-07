import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonSelectOption = () => {
    return (
        <div className="skeleton-select">
            <Skeleton count={1} height={40} />
        </div>
    )
}

export default SkeletonSelectOption