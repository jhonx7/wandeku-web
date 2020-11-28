import React from "react";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';


const NotFound = () => (
    <Container>
      <img src="/svg/not-found.svg" alt="Not Found" />
      <h1>Hmm..</h1>
      <p>Sepertinya kamu nyasar..</p>
      <p>
        Yuk kembali ke <Link to="/">halaman awal</Link>.
      </p>
    </Container>
);

export default NotFound;
