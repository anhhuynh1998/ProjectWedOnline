import { SkeletonSideBar, SkeletonHome } from "./Skeleton";

export const SkeletonLoadSideBar = () => {
    return (
        <div>
            <SkeletonSideBar />
            <SkeletonSideBar />
            <SkeletonSideBar />
        </div>
    );
};

export const SkeletonLoadHome = () => {
    return (
        <>
            <SkeletonHome />
        </>
    )
}