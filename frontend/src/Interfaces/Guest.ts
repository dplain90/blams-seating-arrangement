export interface Guest {
    id: string
    name: string
}

export function GuestFactory(options: Partial<Guest> = {}): Guest {
    return (
        {
            id: '2',
            name: 'John',
            ...options
        }
    )

}