import { useRouter } from "next/router";

const ProductReview = () => {
    const router = useRouter();
    const {productId , reviewId} = router.query;
    return (
        <div>
            <h3>Review {reviewId} for product no : </h3>
            {productId}
        </div>
    );
};

export default ProductReview;