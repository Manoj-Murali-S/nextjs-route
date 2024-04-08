import { useRouter } from "next/router";

const featureDetails = ()=>{
    
    const router = useRouter();
    const featureId = router.query.featureId;
    return <>featureDetails:{featureId}</>
}

export default featureDetails;