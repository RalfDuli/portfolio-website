export class projectCardObj {
    name: string;
    desc: string;
    imgUrl: string;
    githubLink: string;
    constructor(name:string, desc:string, imgUrl:string, githubLink:string) {
        this.name = name;
        this.desc = desc;
        this.imgUrl = imgUrl;
        this.githubLink = githubLink;
    }
}