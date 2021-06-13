import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../pages/components/Layout";

const WorkDetails = ({ data }) => {
    const { html } = data.markdownRemark;
    const { stack, title, github, site } = data.markdownRemark.frontmatter;

    const Header = styled.header`
        margin: 16px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const WorkLink = styled((props) => <Link {...props} />)`
        text-decoration: none;
        color: black;
        margin: 16px;
        padding: 8px 16px;
        box-shadow: 0 1px 2px 0 #c5c5c5;
        &:hover {
            box-shadow: 0 2px 4px 0 #c5c5c5;
        }
    `;

    const Title = styled.h1`
        margin: 0;
    `;

    const Detail = styled.div`
        width: 100%;
        & > p > img {
            max-width: 100%;
        }
    `;

    return (
        <Layout>
            <Header>
                <div>
                    <Title>{title}</Title>
                    <subtitle>{stack}</subtitle>
                </div>
                <div>
                    {github ? (
                        <WorkLink to={github}>Project repo</WorkLink>
                    ) : (
                        <></>
                    )}
                    {site ? (
                        <WorkLink to={site}>Check me out!</WorkLink>
                    ) : (
                        <></>
                    )}
                </div>
            </Header>
            <Detail dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
};

export default WorkDetails;

export const query = graphql`
    query ($slug: String) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                stack
                title
                github
                site
            }
        }
    }
`;
