import React from 'react'
import { Span, ListDiv, DataListDiv } from './StyledCmp'

function DataList(props) {
  return (
    <div>
        <DataListDiv>
            {
                props.data.map((item)=>{
                    return(
                    <ListDiv key={item.id}>
                        <Span>Name: {item.name} --- </Span>
                        <Span>Email: {item.email} --- </Span>
                        <Span>Select: {item.select}</Span>
                    </ListDiv>
                    );
                })
            }
        </DataListDiv>
        </div>
  )
}

export default DataList