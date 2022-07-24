import { Container, Row, Col} from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Account from './Account';
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";


function App() {
  return (
    <Container>
       <Row>
        <Col className="text-center">
          <h1>Application d'authentification avec React</h1>

          <section id="navigation">
            <a href="/">Accueil</a>
            <a href="/free">Composant libre d'accès</a>
            <a href="/auth">Composant à accès restreint</a>
          </section>
        </Col>
      </Row>
      <Switch>
        <Route exact path="/" component={Account} />
        <Route exact path="/free" component={FreeComponent } />
        <ProtectedRoutes path="/auth" component={AuthComponent}/>
      </Switch>
    </Container>
  );
}

export default App;