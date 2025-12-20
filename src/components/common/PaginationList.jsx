import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

const PaginationList = () => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="pagination-container-style">
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden sm:block md:block lg:block ">
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:block lg:block ">
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden lg:block ">
          <PaginationLink href="#">6</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden lg:block ">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hidden lg:block ">
          <PaginationLink href="#">24</PaginationLink>
        </PaginationItem>
        <PaginationItem className="pagination-container-style">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationList;
