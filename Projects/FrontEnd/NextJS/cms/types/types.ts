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
    status: string,
    slug?: string,
    ogImage?: string
}

// Editor props which has the PostData

export type EditorProps = {
    savePost: (data: PostData) => void
}

// Image Upload Props :-

export interface ImageUploadProps {
    returnImage: (url: string) => void; 
}