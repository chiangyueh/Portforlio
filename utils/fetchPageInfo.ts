import {PageInfo} from "../typings";
import NextConfig from "../next.config";
export const fetchPageInfo = async() => {
    const res = await fetch(`${NextConfig.env?.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)

    const data = await res.json()
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo
}