import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "./components/Layout";

const Work = styled((props) => <Link {...props} />)`
    max-width: 320px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #232129;
    padding: 20px;
    margin: 16px 0;
    box-shadow: 0 1px 2px 0 #c5c5c5;
    &:hover {
        box-shadow: 0 2px 4px 0 #c5c5c5;
    }
`;

const WorkTitle = styled.h1`
    margin: 0;
    font-size: 1.3em;
`;

const WorkStack = styled.subtitle`
    font-size: 0.8em;
`;

const WorkPage = ({ data }) => {
    const works = data.workQuery.nodes;
    return (
        <Layout>
            <h1>work</h1>
            {works.map((w) => {
                return (
                    <Work to={`/work/${w.frontmatter.slug}`}>
                        <WorkTitle>{w.frontmatter.title}</WorkTitle>
                        <WorkStack>{w.frontmatter.stack}</WorkStack>
                    </Work>
                );
            })}
        </Layout>
    );
};

export default WorkPage;

export const query = graphql`
    query WorkPage {
        workQuery: allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
        ) {
            nodes {
                frontmatter {
                    title
                    slug
                    stack
                }
            }
        }
    }
`;
