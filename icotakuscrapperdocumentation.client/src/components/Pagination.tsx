import '../styles/components/pagination.scss';

interface PaginationProps {
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    previousPageTitle: string;
    nextPageTitle: string;
    previousPageLink: string;
    nextPageLink: string;
}

const PaginationComponent = ({hasPreviousPage, hasNextPage, previousPageTitle, nextPageTitle, previousPageLink, nextPageLink } : PaginationProps) => {
    return (
        <div className="pagination-container">
            {
                hasPreviousPage 
                    ? <a href={previousPageLink} className="page-previous">
                        <div className="page-container">
                            <div className="page-icon-container">
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="page-info">
                                <span className="page-direction">Précédent</span>
                                <span className="page-title">{previousPageTitle}</span>
                            </div>
                        </div>
                    </a> 
                    : <span></span>
            }
            {
                hasNextPage 
                    ? <a href={nextPageLink} className="page-next">
                        <div className="page-container">
                            <div className="page-info">
                                <span className="page-direction">Suivant</span>
                                <span className="page-title">{nextPageTitle}</span>
                            </div>
                            <div className="page-icon-container">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>
                    </a>
                    : <span></span>
            }
        </div>
    );
}

export default PaginationComponent;