export type LinkTypes = {
    path:string,
    title:string,
}

export type TabButtonTypes = {
    active: boolean, 
    selectTab: (event: React.MouseEvent<HTMLSpanElement>) => void,
    children: string,
}

export type projectTypes = {
    title: string,
    description: string,
    imgUrl: string,
    gitUrl: string,
    previewUrl: string,
}