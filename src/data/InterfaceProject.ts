export default interface Project {
    isRight: boolean;
    id: string;
    type: string;
    title: string;
    description: string;
    techList: string[];
    linkGithub?: string;
    linkDeploy?: string;
}