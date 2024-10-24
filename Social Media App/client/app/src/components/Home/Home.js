import { Container, Grid, Grow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import useStyles from "./styles"
import { getPosts } from '../../actions/posts'
import { useSelector } from 'react-redux'

const Home = () => {
    const [currentId, setCurrentId] = useState();
    const classes = useStyles();
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.posts)
    useEffect(()=>{
      dispatch(getPosts())
    }, [currentId, dispatch])
  return (
    <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7} md={10} lg={8}>
              <Posts currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={7} md={2} lg={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home