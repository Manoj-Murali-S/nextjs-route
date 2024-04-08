import { useRouter } from "next/router";

const conceptDetails = ()=>{
    const router = useRouter();
    const {conceptId , featureId} = router.query;
    return <>docs for feature {featureId}, conceptDetails:{conceptId}</>
}

export default conceptDetails;

