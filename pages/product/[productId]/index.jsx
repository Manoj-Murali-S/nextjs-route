import { useRouter } from "next/router";

const ProductDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <div>
            <h3>Details about product no : </h3>
            {productId}
        </div>
    );
};

export default ProductDetail;