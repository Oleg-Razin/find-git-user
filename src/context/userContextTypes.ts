export interface gitUserInterface {
    login: string,
    html_url: string,
    avatar_url: string,
    bio: string,
}

export type userType = {
    user: gitUserInterface | null,
    setUser: (user: gitUserInterface) => void,
    loading: boolean,
    setLoading: (loading: boolean) => void,
    status: number | undefined,
    setStatus: (status: number | undefined) => void;
}