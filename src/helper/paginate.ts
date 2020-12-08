import _ from 'lodash';

export function paginate<T extends any[]>(items: T, pageNumber: number, pageSize: number) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();

}
