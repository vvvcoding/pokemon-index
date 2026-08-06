import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface FooterProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Footer({ currentPage, totalPages, setCurrentPage }: FooterProps) {
    
    const getPageNumbers = () => {
        const pages: (number | "ellipsis")[] = [];

        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        pages.push(1);

        if (currentPage <= 3) {
            pages.push(2, 3);
            pages.push("ellipsis");
        } else if (currentPage >= totalPages - 2) {
            pages.push("ellipsis");
            pages.push(totalPages - 2, totalPages - 1);
        } else {
            pages.push("ellipsis");
            pages.push(currentPage - 1, currentPage, currentPage + 1);
            pages.push("ellipsis");
        }

        pages.push(totalPages);

        return pages;
    };
    
    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious 
                            onClick={() => 
                                setCurrentPage((page) => Math.max(page - 1, 1))
                            }
                        />
                    </PaginationItem>
                    
                    {getPageNumbers().map((page, index) => (
                        <PaginationItem key={index}>
                            {page === "ellipsis" ? (
                                <PaginationEllipsis />
                            ) : (
                                <PaginationLink
                                    isActive={currentPage === page}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            onClick={() =>
                                setCurrentPage((page) =>
                                    Math.min(page + 1, totalPages)
                                )
                            }
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    )
}

export default Footer