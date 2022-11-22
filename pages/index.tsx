import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import axios from 'axios'
import { Video } from '../types'
import NoResults from '../components/NoResults'
import VideoCard from '../components/VideoCard'
interface IProps {
  videos: Video[]
}
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Home = ({ videos }: IProps) => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {videos.length ? (
        videos.map((video: Video) => (
          <VideoCard post={video} key={video._id} />
        ))
      ) :
        (<NoResults text={'No Videos'} />)
      }
    </div>
  )
}

export const getServerSideProps = async (
  { query: { topic } }: { query: { topic: string } }
) => {
  let response = null
  if (topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  } else {
    response = await axios.get(`${BASE_URL}/api/post`);
  }

  return {
    props: {
      videos: response.data
    }
  }
}

export default Home 
