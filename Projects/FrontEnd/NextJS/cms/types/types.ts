// User Info :-
export interface User {
    name: string,
    userName: string,
    userImage: string
}

// Draft Post:-
export interface PostData {
    title: string,
    content: string,
    excerpt: string,
    metaDescription: string,
    category: string,
    keywords: string,
    status: string
}

// Editor props which has the PostData

export type EditorProps = {
    savePost: (data: PostData) => void
}