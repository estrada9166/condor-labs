import React, {Component} from 'react'
import Head from 'next/head'
import NavBar from './NavBar';
import Header from './Header';
import Search from './Search';
import Featured from './Featured';
import Courses from './Courses';

class Main extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Condor Labs</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        </Head>
        <NavBar />
        <Header />
        <Search />
        <Featured />
        <Courses />
      </div>
    )
  }
}

export default Main
