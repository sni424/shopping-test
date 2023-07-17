import * as S from '../../styles/Pagination';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 수

    const handleClick = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            onPageChange(pageNumber); // 페이지 번호 변경
        }
    };

    return (
        <S.PageDiv>
            {Array.from({ length: totalPages }, (_, index) => (
                <S.PageBtn
                    key={index + 1}
                    onClick={() => handleClick(index + 1)}
                    disabled={currentPage === index + 1}
                >
                    {index + 1}
                </S.PageBtn>
            ))}
        </S.PageDiv>
    );
};

export default Pagination;
