const PAGE_LIMIT = 10;

export const getPagination = (pageParam: string, limit = PAGE_LIMIT) => {
    const page = Number(pageParam) || 1;
    
    const offset = (page - 1) * limit;

    return {
        page,
        limit,
        offset
    }
}