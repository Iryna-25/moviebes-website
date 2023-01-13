import { LoadMoreWrapper, LoadMore } from "./LoadMoreButton.styled"

export const LoadMoreButton = ({ loadMore }) => {
    return (
        <LoadMoreWrapper>
            <LoadMore type="button" onClick={loadMore}> Load more</LoadMore> 
        </LoadMoreWrapper>
    )
}




