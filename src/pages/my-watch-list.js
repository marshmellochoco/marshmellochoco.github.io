import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import React from 'react';
import Layout from './components/Layout';

// styles
const WatchListPage = styled.div``;

const CardList = styled.div`
    display: flex;
    flex-direction: column;
`;

const ItemRowHeader = styled.div`
    display: grid;
    grid-template-columns: 2em 3fr 1fr 1fr;
    gap: 0.5em;
    padding: 12px 8px;
    font-weight: 700;
    border-bottom: 1px solid #d7d7d7;
`;

const ItemRow = styled.div`
    display: grid;
    grid-template-columns: 2em 3fr 1fr 1fr;
    gap: 0.5em;
    padding: 12px 8px;
    :nth-of-type(even) {
        background-color: #f0f0f0;
    }
`;

// markup
const IndexPage = ({ data }) => {
    const watched = data.allContentfulWatched.nodes;
    return (
        <Layout>
            <WatchListPage>
                <h1>my watch list</h1>
                <CardList>
                    <ItemRowHeader>
                        <div>#</div>
                        <div>name</div>
                        <div>category</div>
                        <div>watched on</div>
                    </ItemRowHeader>

                    {watched.map((w, i) => {
                        return (
                            <ItemRow key={w.id}>
                                <div>{i + 1}</div>
                                <div>
                                    {w.title} {` `}
                                    {w.year && `(${w.year.substring(0, 4)})`}
                                </div>
                                <div>{w.category}</div>
                                <div>{w.watchedOn}</div>
                            </ItemRow>
                        );
                    })}
                </CardList>
            </WatchListPage>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        allContentfulWatched(sort: { fields: watchedOn, order: DESC }) {
            nodes {
                title
                watchedOn
                rating
                year
                category
                id
            }
        }
    }
`;
