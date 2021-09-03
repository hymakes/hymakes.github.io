import './App.css';
import React from 'react';
import folderLogo from './folder_icon.png';
import { Container, Divider, Grid, Header, Image } from 'semantic-ui-react'


class Home extends React.Component {
    render() {
        return (
          <div>
            <Container>
              <Header size='huge'>hymakes</Header>
            </Container>
            <Divider hidden/>
            <Container className='FolderGrid'>
              <Grid columns='equal'>
                <Grid.Row columns={3}>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                  <Grid.Column><Image size='medium' fluid src={folderLogo} alt="folder"/>folder label</Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
        );
    }

}

export default Home;
