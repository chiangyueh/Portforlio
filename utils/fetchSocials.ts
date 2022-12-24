import {Social} from "../typings";
import NextConfig from "../next.config";
export const fetchSocial = async() => {
    const res = await fetch(`${NextConfig.env?.NEXT_PUBLIC_BASE_URL}/api/getSocial`)
    const data = await res.json()
    const socials: Social[] = data.socials;

    return socials
}