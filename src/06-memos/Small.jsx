import { memo } from 'react';

export const Small = memo(({counter}) => {
    console.log("Me volvi chango")
    return (
        <>
            <small>{ counter }</small>
        </>
    )
});
