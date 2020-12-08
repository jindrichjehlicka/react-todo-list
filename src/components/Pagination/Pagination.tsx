import React from 'react';
import _ from 'lodash';
import { PAGE } from "const/page";

interface IPagination {
    itemsCount: number;
    pageSize?: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<IPagination> = ({itemsCount, currentPage, onPageChange, pageSize = PAGE.SIZE}) => {

    const pagesCount = Math.ceil(itemsCount / pageSize);

    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return <nav aria-label="Page navigation example">
        <ul className="pagination">
            {pages.map(page => (
                <li
                    key={page}
                    className={"page-item " + (page === currentPage ? 'active' : '')}>
                    <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
                </li>
            ))}
        </ul>
    </nav>;
};

export default Pagination;

