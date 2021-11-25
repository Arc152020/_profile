
import './App.css'
import zazie from './assets/zazie.jpg'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import Email from '@mui/icons-material/Email'
import WhatsApp from '@mui/icons-material/WhatsApp'
import styled from 'styled-components'

function App() {
  return (
    <Container>

        <section className="inner">
          <figure>
              <img src={zazie} alt="My Pic" />
          </figure>

          <h2>Hi, I am Marcus a Freelance Web Developer Residing in Jos, Nigeria</h2>
          <p>
            Contact me via: 
          </p>
          <ul>
            <li><a href=""><Facebook /></a></li>
            <li><a href=""><Twitter /></a></li>
            <li><a href="mailto:marcusdashe.developer@gmail.com"><Email /></a></li>
            <li><a href=""><WhatsApp /></a></li>
          </ul>
        </section>
      
    </Container>
  );
}

const Container = styled.div`
  background: skyblue;
  color: #000;

  img{
    width: 300px;
    height: 300px;
    object-fit: contain;
  }
  .inner{
    width: 805;
    height: 80vh;
    text-align: center;
    margin: 0 auto;
  }
  ul{
    display: flex;
    justify-content: center;
    
  }
  ul li{
    list-style-type: none;
    svg{
      color: #000;
      font-size: 20px;
      margin: 20px;
    }
  }
`

export default App;
