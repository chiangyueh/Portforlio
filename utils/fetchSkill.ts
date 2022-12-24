import {Skill} from "../typings";
import NextConfig from "../next.config";
export const fetchSkills = async() => {
    const res = await fetch(`${NextConfig.env?.NEXT_PUBLIC_BASE_URL}/api/getSkill`)

    const data = await res.json()
    const skills: Skill[] = data.skills;

    return skills
}