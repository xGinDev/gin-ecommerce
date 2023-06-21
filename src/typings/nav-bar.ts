export type NavBar = {
    id: number
    title: string
    route: string
}

export const PAGE_SECTIONS: NavBar[] = [
    {
        id: 1,
        title: "Products",
        route: "/products"
    },
    {
        id: 2,
        title: "Blog",
        route: "/blog"
    }, 
    {
        id: 3,
        title: "Recommends",
        route: "/recommends"
    }
]