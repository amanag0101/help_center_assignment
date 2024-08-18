interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div className={`h-full w-full grid grid-rows-auto gap-4 ${className}`}>
      {[...Array(10)].map((_, index) => (
        <div key={index} className="shimmer-animation h-8"></div>
      ))}
    </div>
  );
};

export default Skeleton;
