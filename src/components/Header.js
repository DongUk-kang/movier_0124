import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul``;

const Item = styled.li``;

const SLink = styled(Link)``;

const Hearder = () => {
    return (
        <Header>
            <List>
                <Item>
                    <SLink to="/">
                        Home
                    </SLink>
                </Item>
                <Item>
                    <SLink to="/tv">
                        Tv
                    </SLink>
                </Item>
                <Item>
                    <SLink to="/search">
                        Search
                    </SLink>
                </Item>

            </List>

        </Header>
    );
};

export default Hearder;
