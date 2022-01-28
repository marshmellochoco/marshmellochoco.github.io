import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "./components/Layout";

const WorkContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    @media (max-width: 1280px) {
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
    @media (max-width: 748px) {
        grid-template-columns: 1fr;
        gap: 16px;
    }
`;

const Work = styled((props) => <Link {...props} />)`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #232129;
    padding: 20px;
    box-shadow: 0 2px 4px 0 #c5c5c5;
    &:hover {
        box-shadow: 0 4px 8px 0 #c5c5c5;
    }
`;

const WorkTitle = styled.h1`
    margin: 0;
    font-size: 1.3em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const WorkStack = styled.div`
    font-size: 0.8em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const WorkPage = ({ data }) => {
    const works = data.allContentfulWork.nodes;
    return (
        <Layout>
            <h1>work</h1>
            <WorkContainer>
                {works.map((w) => {
                    return (
                        <Work to={`/work/${w.slug}`} key={w.id}>
                            <WorkTitle>{w.title}</WorkTitle>
                            <WorkStack>{w.stack.join(", ")}</WorkStack>
                        </Work>
                    );
                })}
            </WorkContainer>
        </Layout>
    );
};

export default WorkPage;

export const query = graphql`
    query {
        allContentfulWork(sort: { fields: date, order: DESC }) {
            nodes {
                id
                title
                slug
                stack
            }
        }
    }
`;
