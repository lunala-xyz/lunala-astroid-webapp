interface TeamMember {
    username: string,
    fallback: string,
}

interface TeamMemberExtended extends TeamMember {
    role: string,
    description: string,
}