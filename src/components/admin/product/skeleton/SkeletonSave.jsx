import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SkeletonSave = () => {
    return (
        <div className="skeleton-save">
            <Skeleton count={1} height={40} />
        </div>
    )
}

export default SkeletonSave