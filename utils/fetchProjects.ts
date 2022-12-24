import {Project} from "../typings";
import NextConfig from "../next.config";
export const fetchProject = async() => {
    const res = await fetch(`${NextConfig.env?.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

    const data = await res.json()
    const projects: Project[] = data.projects;

    return projects
}