import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import SignUp from "./Signup";
import Login from "./Login";
import getFirebase from "../firebase/firebaseconfiguration";
import axios from "axios";
import { Container, Navbar, Nav, Col, NavDropdown, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Sandwiches from "../routers/SandwichesRouters";
import MyOffSet from "../components/MyOffSet";
import Loading from "../components/Loading";
import MyVerticallyCenteredModal from "../components/MyVerticallyCenteredModal";

import MyButton from "../components/MyButton";
//todo
import useTodoState from "../funciones/useTodoState";
import TodoForm from "../components/todo/TodoForm";

import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

export default function Index(props) {
  const firebase = getFirebase();

  const socialLogin = async (props) => {
    await firebase
      .auth()
      .signInWithPopup(props)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signOut = async () => {
    try {
      if (firebase) {
        await firebase.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      alert(error.message);
    }
    props.history.push("/");
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(props);
    try {
      if (props) {
        console.log("iniciando");
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(data.get("email"), data.get("password"));
        //console.log("user", user);
        props.history.push("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const signupSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    try {
      if (firebase) {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            data.get("email"),
            data.get("password")
          );
        console.log("user", user);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [modalShow, setModalShow] = useState(false);
  const [btnActivo, setBtnActivo] = useState("Cargando");
  const [mnsActivo, setMnsActivo] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [nombres, setNombres] = useState([]);

  const [open, setOpen] = React.useState(false);

  //todo
  const { todos, addTodo, deleteTodo, addSingleTodo } = useTodoState([]);

  const handleSelect = () => {
    setModalShow(true);
  };

  const handleSelectFromButton = (props) => {
    console.log(props.target.id);
    setBtnActivo(props.target.id);
    setModalShow(true);
  };

  const handleClick = (props) => {
    setMnsActivo(props);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setNombres(res.data);
      addTodo([...todos, res.data]);
    });
    console.log("HOLA SI ME PREICONO")
  }, []);

  return (
    <Router>
      <Navbar
          style={{ paddingLeft: 20, paddingRight: 20 }}
          sticky="top"
          collapseOnSelect
          bg="dark"
          variant="dark"
          expand="md"
        >
          <LinkContainer to="/tacos">
            <Navbar.Brand>
              {" "}
              <img
                alt=""
                src="https://react-bootstrap.github.io/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              SAI
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/tacos">
                <Nav.Link>Tacos</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sandwiches">
                <Nav.Link>Sandwiches</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sandwiches">
                <Nav.Link>{btnActivo}</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => handleShow()}>
                  Action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => handleSelect()}>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="/dashboard">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/logout">
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
            </Nav>

            <MyButton
              todos={todos}
              _handleSelectFromButton={(a) => handleSelectFromButton(a)}
            />
          </Navbar.Collapse>
        </Navbar>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          todos={todos}
          deleteTodo={deleteTodo}
          _handleClick={(a) => handleClick(a)}
        />
        <MyOffSet
          show={show}
          onHide={() => setShow(false)}
          todos={todos}
          deleteTodo={deleteTodo}
          _handleClick={(a) => handleClick(a)}
        />

        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={mnsActivo}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={handleClose}>
                Deleted
              </Button>
            </React.Fragment>
          }
        />

      {props.currentUser ? (
          <Switch>
          <Route path={"/tacos"}>
            {todos.length === 0 || todos.length === null ? (
              <Loading />
            ) : (
              <Container style={{ padding: 30 }}>
                <TodoForm
                  addSingleTodo={(todoText) => {
                    const trimmedText = todoText.name.trim();

                    if (trimmedText.length > 0) {
                      addSingleTodo(todoText);
                    }
                  }}
                />
              </Container>
            )}
          </Route>
          <Route path={"/sandwiches"}>
            {nombres.length === 0 || nombres.length === null ? (
              <Loading />
            ) : (
              <Container style={{ padding: 20 }}>
                <Row>
                  <Col></Col>
                  <Col>
                    <Sandwiches data={nombres} />
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            )}
          </Route>
          <Route path={"/dashboard"}>
          <Container style={{ padding: 20 }}>
          <Dashboard
                firebase={props.firebase}
                signupSubmit={signupSubmit}
                history={props.history}
              />
            </Container>
          </Route>
          <Route
            path={"/logout"}
            render={() => (
              <Logout
                signOut={signOut}
                firebase={props.firebase}
                history={props.history}
              />
            )}
          ></Route>
        </Switch>  
      ) : (
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => (
              <Login
                firebase={props.firebase}
                loginSubmit={loginSubmit}
                history={props.history}
                socialLogin={socialLogin}
              />
            )}
          ></Route>
          <Route
            path={"/signup"}
            render={() => (
              <SignUp
                firebase={props.firebase}
                signupSubmit={signupSubmit}
                history={props.history}
              />
            )}
          ></Route>
        </Switch>
      )}
    </Router>
  );
}
