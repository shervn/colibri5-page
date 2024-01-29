import './App.css';
import { Container, Divider, Grid, Image, Icon, Header, Segment, Embed, Label } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div>
        {/* <Container textAlign='center'> <h1>ColibriDoc</h1></Container> */}
        <Container textAlign='center'> <h1> <strong>Colibri5:</strong> Real-Time Monocular 5-DoF Trocar Pose Tracking <br/>for Robot-Assisted Vitreoretinal Surgery </h1></Container>
        <Container textAlign='center'> <h5>Shervin Dehghani, Michael Sommersperger, Mahdi Saleh, Alireza Alikhani <br></br> Benjamin Busam, Peter Gehlbach, Nassir Navab, M Ali Nasseri, Iulian Iordachita</h5>
          <Label color='blue' as='a' href="mailto:shervin.dehghani[at]tum.de">
            <Icon name='mail' /> shervin.dehghani@tum.de
          </Label>
          <Label color='red' as='a' href="">
            <Icon name='copy' /> Paper
          </Label>
          <Label color='grey' as='a' href="https://github.com/shervn/5dof-trocar-pose-dataset">
            <Icon name='github' /> Code
          </Label>
          {/* <Label as='a' href="">
            <Icon name='github' /> Code
          </Label> */}
        </Container>
        <Container className='Images' textAlign='justified'>
          <Grid columns={6} centered> 
            <Grid.Row centered>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/shervin.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/michi.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/mahdi.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/aliz.jpeg'} alt=""/>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={6} centered>
            <Grid.Row centered>
            <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/beni.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/gehlbach.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/iordachita.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/navab.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/nasseri.jpeg'} alt=""/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>

        <Container className='Images' textAlign='justified'>

        <Divider horizontal>
            <Header as='h4'>
              <Icon name='search' />
              Abstract
            </Header>
          </Divider>

          Retinal surgery is a complex medical procedure that
requires high precision dexterity to perform delicate
instrument maneuvers with sub-millimeter accuracy.
Minimizing the manual tremor and achieving precise and
repeatable execution of surgical tasks has motivated the
development of robotic platforms to overcome the
limitations of manual surgery. 
However, specific tasks, such as instrument insertion
through the trocar, are more challenging in robotic surgery
than in conventional manual procedures since the robot
control is often optimized for navigation inside the eye.
This challenges the integration of robotic systems,
creating a high cognitive load on the operator and
prolonging the surgery time.
Moreover, misalignment of the robot's remote center of
motion (RCM) and trocar position during the procedure can
lead to excessive forces between the instrument and the
trocar, potentially causing patient trauma.
Precise and rapid localization of the trocars enables the
automation of the insertion procedure and dynamic
compensation of eye motion.  
In this work, we present a real-time marker-less method for
3D pose tracking of trocar, achieved with only a single
monocular camera. Our experiments show promising results
towards real-time trocar pose estimation and tracking,
achieving an average error of 3 degrees in trocar
orientation estimation, with an average processing time of
15 fps. This could serve as a foundation to improve robotic
systems' automation, integration, and efficiency of robotic
systems for retinal surgery. The dataset created for this
work is made publicly available. 

          <Divider horizontal>
            <Header as='h4'>
              <Icon name='video' />
              Videos
            </Header>
          </Divider>
        </Container>

        <Container textAlign='center'>
          <Segment placeholder>
            <Grid columns={1} relaxed='very' stackable>
              {/* <Grid.Column>
                <Header as='h4'>Demo</Header>
                <Embed
                  id='5IBjiwelM6E'
                  source='youtube'
                />
              </Grid.Column> */}
              <Grid.Column verticalAlign='middle'>
                <Header as='h4'>Presentation</Header>
                <Embed
                  id='ltDVQS2Eht4'
                  source='youtube' />
              </Grid.Column>
            </Grid>
          </Segment>

          <Grid>
            <Grid.Row columns={5} verticalAlign='middle'>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/tum.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/camp.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/mri.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/jhu.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/syntheseyes.png'} className='sponsors' alt=""/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

      </div>
    </div>
  );
}

export default App;
